/* Marketing closing CTA band and footer. */
const { Button: FtButton } = window.DS;

const FOOTER_COLS = [
  { h: 'System', links: ['Tokens', 'Components', 'Themes', 'UI kits', 'Changelog'] },
  { h: 'Docs', links: ['Getting started', 'Design language', 'English', '简体中文', 'GitHub'] },
  { h: 'Project', links: ['About', 'Contributing', 'License', 'Code of conduct', 'Credits'] },
];

function Footer() {
  return (
    <footer className="mk-footer">
      <div className="mk-shell">
        <div className="mk-cta">
          <h2 className="mk-cta__title">Start with tokens and components.</h2>
          <div className="mk-cta__actions">
            <FtButton variant="primary" size="lg">Get started</FtButton>
            <FtButton variant="tertiary">Read the docs</FtButton>
          </div>
        </div>

        <div className="mk-footer__grid">
          <div className="mk-footer__brand">
            <a className="mk-logo" href="#top" aria-label="jojo home">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="27" height="27" rx="5" stroke="currentColor" strokeOpacity="0.2" /><circle cx="15.6" cy="8" r="2" fill="currentColor" /><path d="M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>jojo</span>
            </a>
            <p className="mk-footer__tag">MIT-licensed design system.</p>
          </div>

          {FOOTER_COLS.map((col) => (
            <nav className="mk-footer__col" key={col.h} aria-label={col.h}>
              <div className="mk-footer__h">{col.h}</div>
              {col.links.map((l) => <a key={l} href="#">{l}</a>)}
            </nav>
          ))}
        </div>

        <div className="mk-footer__bar">
          <span>© 2026 perelmangao — the jojo design system.</span>
          <span className="mk-footer__legal"><a href="#">Terms</a><a href="#">Privacy</a></span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
