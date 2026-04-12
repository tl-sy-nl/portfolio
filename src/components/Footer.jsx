export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">© {new Date().getFullYear()} Sylvia Lin. All rights reserved.</p>
      <div className="footer__contact">
        <a href="mailto:tunglin.sy@gmail.com" className="footer__contact-link">tunglin.sy@gmail.com</a>
        <span className="footer__sep">·</span>
        <a href="https://linkedin.com/in/tl-sylvia" target="_blank" rel="noopener noreferrer" className="footer__contact-link">LinkedIn</a>
        <span className="footer__sep">·</span>
        <a href="/TungLin_CV_2026.pdf" download="TungLin_CV_2026.pdf" className="footer__contact-link">CV ↓</a>
      </div>
    </footer>
  )
}
