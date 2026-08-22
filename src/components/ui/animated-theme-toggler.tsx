import { Moon, Sun } from 'lucide-react'
import { flushSync } from 'react-dom'
import { useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'
import type { Theme } from '@/hooks/use-theme'

export type TransitionVariant = 'circle' | 'diamond'

type Props = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  duration?: number
  variant?: TransitionVariant
  fromCenter?: boolean
}

function getClipPaths(
  variant: TransitionVariant,
  x: number,
  y: number,
  maxRadius: number,
): [string, string] {
  if (variant === 'diamond') {
    const radius = maxRadius * Math.SQRT2
    return [
      `polygon(${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px, ${x}px ${y}px)`,
      `polygon(${x}px ${y - radius}px, ${x + radius}px ${y}px, ${x}px ${y + radius}px, ${x - radius}px ${y}px)`,
    ]
  }

  return [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${maxRadius}px at ${x}px ${y}px)`,
  ]
}

export function AnimatedThemeToggler({
  theme,
  onThemeChange,
  duration = 400,
  variant = 'circle',
  fromCenter = false,
  className,
  ...props
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const documentWithTransitions = document as Document & {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>
        finished: Promise<unknown>
      }
    }
    const start = documentWithTransitions.startViewTransition
    const applyTheme = () => {
      document.documentElement.classList.toggle('dark', next === 'dark')
      onThemeChange(next)
    }
    if (!start || reduced) {
      applyTheme()
      return
    }
    const button = buttonRef.current?.getBoundingClientRect()
    const x = fromCenter
      ? innerWidth / 2
      : (button?.left ?? innerWidth / 2) + (button?.width ?? 0) / 2
    const y = fromCenter
      ? innerHeight / 2
      : (button?.top ?? innerHeight / 2) + (button?.height ?? 0) / 2
    const radius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )
    document.documentElement.style.setProperty('--theme-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-y', `${y}px`)
    document.documentElement.style.setProperty('--theme-radius', `${radius}px`)
    document.documentElement.style.setProperty(
      '--theme-duration',
      `${duration}ms`,
    )
    const transition = documentWithTransitions.startViewTransition?.(() => {
      flushSync(applyTheme)
    })
    transition?.finished.finally(() => {
      document.documentElement.style.removeProperty('--theme-x')
      document.documentElement.style.removeProperty('--theme-y')
      document.documentElement.style.removeProperty('--theme-radius')
      document.documentElement.style.removeProperty('--theme-duration')
    })
    transition?.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: getClipPaths(variant, x, y, radius),
        },
        {
          duration,
          easing: 'ease-in-out',
          fill: 'forwards',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }, [duration, fromCenter, onThemeChange, theme, variant])
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label="Alternar tema"
      onClick={toggle}
      className={cn(
        'grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-witcher focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-witcher',
        className,
      )}
      {...props}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="sr-only">Alternar tema</span>
    </button>
  )
}
