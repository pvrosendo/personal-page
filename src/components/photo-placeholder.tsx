export function PhotoPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-[14px] border border-border bg-card ${className}`}
    >
      <div className="absolute inset-3 border border-witcher/30" />
      <span className="absolute bottom-5 left-5 font-display text-6xl font-bold tracking-[-0.1em] text-witcher/80">
        PV
      </span>
      <span className="absolute right-5 top-5 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
        portrait / 01
      </span>
    </div>
  )
}
