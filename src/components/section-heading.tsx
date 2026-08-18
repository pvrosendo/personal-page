export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
      <h1 className="font-display text-5xl font-semibold tracking-[-0.07em] md:text-7xl">
        {title}
      </h1>
    </div>
  )
}
