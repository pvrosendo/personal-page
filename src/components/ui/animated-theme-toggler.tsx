import { Moon, Sun } from 'lucide-react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import type { Theme } from '@/hooks/use-theme'

type Props = Omit<React.ComponentProps<'button'>, 'onClick'> & {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  duration?: number
  fromCenter?: boolean
}

export function AnimatedThemeToggler({
  theme,
  onThemeChange,
  duration = 400,
  fromCenter = false,
  className,
  ...props
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const documentWithTransitions = document as Document & {
      startViewTransition?: (callback: () => void) => {
        finished: Promise<unknown>
      }
    }
    const start = documentWithTransitions.startViewTransition
    if (!start || reduced) {
      onThemeChange(next)
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
      document.documentElement.classList.toggle('dark', next === 'dark')
      onThemeChange(next)
    })
    transition?.finished.finally(() => {
      document.documentElement.style.removeProperty('--theme-x')
      document.documentElement.style.removeProperty('--theme-y')
      document.documentElement.style.removeProperty('--theme-radius')
      document.documentElement.style.removeProperty('--theme-duration')
    })
  }
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
