import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
export function Badge({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'rounded-full border border-biolum/30 bg-biolum/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-biolum',
        className,
      )}
      {...props}
    />
  )
}
