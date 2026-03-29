import { useState, useCallback, useEffect } from 'react'

export function CaseImage({ src, alt, width, height, caption }) {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => setOpen(true), [])
  const handleClose = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <figure className="case-img">
        {/* TODO: Add srcSet when 2x version of image is available */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onClick={handleOpen}
          style={{ cursor: 'zoom-in' }}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {open && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <button className="lightbox-close" onClick={handleClose} aria-label="Close">×</button>
          <img
            src={src}
            alt={alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && <p className="lightbox-caption">{caption}</p>}
        </div>
      )}
    </>
  )
}
