/* Console — left sidebar. bg-1 well, right hairline, 0 radius. Items: full-width,
   16px/400, 4px radius, hover one ladder step; active = orange text + a thin accent
   underline stroke (never a fill/pill, never a side-stripe). */
const { Avatar: SbAvatar } = window.DS;

function NavItem({ icon, label, active, onClick }) {
  return (
    <button type="button" className={'cs-navitem' + (active ? ' is-active' : '')} onClick={onClick}>
      <i data-lucide={icon}></i>
      <span className="cs-navitem__label">{label}</span>
    </button>
  );
}

function Sidebar({ active, onNavigate }) {
  const main = [
    { id: 'overview', icon: 'layout-dashboard', label: 'Overview' },
    { id: 'deployments', icon: 'rocket', label: 'Deployments' },
    { id: 'analytics', icon: 'bar-chart-3', label: 'Analytics' },
    { id: 'logs', icon: 'scroll-text', label: 'Logs' },
  ];
  const workspace = [
    { id: 'members', icon: 'users', label: 'Members' },
    { id: 'usage', icon: 'gauge', label: 'Usage' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  return (
    <aside className="cs-sidebar">
      <div className="cs-side-top">
        <a className="cs-logo" href="#" aria-label="jojo">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="27" height="27" rx="5" stroke="currentColor" strokeOpacity="0.2" /><circle cx="15.6" cy="8" r="2" fill="currentColor" /><path d="M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>jojo</span>
          <span className="cs-logo__chev"><i data-lucide="chevrons-up-down"></i></span>
        </a>
      </div>

      <nav className="cs-nav" aria-label="Primary">
        {main.map((it) => (
          <NavItem key={it.id} {...it} active={active === it.id} onClick={() => onNavigate(it.id)} />
        ))}
        <div className="cs-nav__section">Workspace</div>
        {workspace.map((it) => (
          <NavItem key={it.id} {...it} active={active === it.id} onClick={() => onNavigate(it.id)} />
        ))}
      </nav>

      <div className="cs-side-foot">
        <div className="cs-usage">
          <div className="cs-usage__row"><span>Fast requests</span><span className="cs-usage__num">812 / 1000</span></div>
          <div className="cs-usage__track"><span className="cs-usage__fill" style={{ width: '81%' }}></span></div>
        </div>
        <div className="cs-user">
          <SbAvatar initials="AL" size="sm" />
          <div className="cs-user__meta">
            <div className="cs-user__name">Ada Lovelace</div>
            <div className="cs-user__plan">Pro · acme-inc</div>
          </div>
          <span className="cs-user__more"><i data-lucide="ellipsis"></i></span>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
