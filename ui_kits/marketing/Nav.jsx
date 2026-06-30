/* Marketing — top navigation. Uses DS Button + IconButton. Theme toggle uses
   inline SVGs (not lucide) so the sun/moon swap stays pure-React on re-render. */
const { Button: MkButton, IconButton: MkIconButton } = window.DS;

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

function Nav({ theme, onToggleTheme }) {
  return (
    <header className="mk-nav">
      <div className="mk-shell mk-nav__row">
        <a className="mk-logo" href="#top" aria-label="jojo home">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="27" height="27" rx="5" stroke="currentColor" strokeOpacity="0.2" /><circle cx="15.6" cy="8" r="2" fill="currentColor" /><path d="M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>jojo</span>
        </a>

        <nav className="mk-nav__links" aria-label="Primary">
          <a href="#features" className="is-active">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
          <a href="#blog">Blog</a>
        </nav>

        <div className="mk-nav__actions">
          <MkIconButton
            icon={theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            label="Toggle theme"
            onClick={onToggleTheme}
          />
          <MkButton variant="quinary" className="mk-hide-sm">GitHub</MkButton>
          <MkButton variant="primary">Get started</MkButton>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;
