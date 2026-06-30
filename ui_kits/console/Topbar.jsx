/* Console — top bar. Three-zone grid [title | search | actions]; one control height.
   Sits on the page paper with a bottom hairline. Theme toggle is inline SVG. */
const { Input: TbInput, IconButton: TbIconButton, Avatar: TbAvatar } = window.DS;

const TbSun = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const TbMoon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

function Topbar({ title, theme, onToggleTheme }) {
  return (
    <header className="cs-topbar">
      <div className="cs-topbar__title">{title}</div>
      <div className="cs-topbar__search">
        <TbInput size="sm" leadingIcon={<i data-lucide="search"></i>} placeholder="Search deployments, files, members…" aria-label="Search" />
      </div>
      <div className="cs-topbar__actions">
        <TbIconButton icon={theme === 'dark' ? <TbSun /> : <TbMoon />} label="Toggle theme" onClick={onToggleTheme} />
        <TbIconButton icon={<i data-lucide="bell"></i>} label="Notifications" />
        <TbIconButton icon={<i data-lucide="circle-help"></i>} label="Help" />
        <span className="cs-topbar__avatar"><TbAvatar initials="AL" size="sm" /></span>
      </div>
    </header>
  );
}
window.Topbar = Topbar;
