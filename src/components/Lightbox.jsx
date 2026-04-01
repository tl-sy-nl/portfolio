import { useState, useCallback, useEffect, useRef } from 'react'

export function CaseImage({ src, alt, width, height, caption }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const prevFocusRef = useRef(null)

  const handleOpen = useCallback(() => {
    prevFocusRef.current = document.activeElement
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => setOpen(false), [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleOpen()
    }
  }, [handleOpen])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      // Focus trap: keep Tab within the lightbox
      if (e.key === 'Tab' && closeRef.current) {
        e.preventDefault()
        closeRef.current.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Move focus to close button when lightbox opens
    if (closeRef.current) closeRef.current.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      // Restore focus to the element that opened the lightbox
      if (prevFocusRef.current) prevFocusRef.current.focus()
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
          onKeyDown={handleKeyDown}
          tabIndex="0"
          role="button"
          aria-label={`View enlarged: ${alt}`}
          style={{ cursor: 'zoom-in' }}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {open && (
        <div
          className="lightbox-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image view"
        >
          <button ref={closeRef} className="lightbox-close" onClick={handleClose} aria-label="Close enlarged image">×</button>
          <img
            src={src}
            alt={`Enlarged view: ${alt}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {caption && <p className="lightbox-caption">{caption}</p>}
        </div>
      )}
    </>
  )
}
