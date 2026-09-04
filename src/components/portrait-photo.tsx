type PortraitPhotoProps = {
  src: string
  alt: string
  className?: string
}

export function PortraitPhoto({
  src,
  alt,
  className = '',
}: PortraitPhotoProps) {
  return (
    <div
      className={`relative aspect-4/5 overflow-hidden rounded-[14px] border border-border bg-card ${className}`}
    >
      <img src={src} alt={alt} className="size-full object-cover" />
      <div className="pointer-events-none absolute inset-3 border border-witcher/30" />
    </div>
  )
}
