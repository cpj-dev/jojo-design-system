/* Console — Deployments. Editor-style Tabs filter by env; a 3-zone filter toolbar
   (one control height); the DS Table with row selection; a per-row overflow Flyout.
   Status lives in content (dots/badges); chrome stays monochrome. */
const { Tabs: DvTabs, Table: DvTable, Input: DvInput, Select: DvSelect, Button: DvButton, IconButton: DvIconButton, Flyout: DvFlyout, Badge: DvBadge, Avatar: DvAvatar } = window.DS;
const { useState: dvUseState, useEffect: dvUseEffect } = React;

const DEPLOYS = [
  { id: 'd1', name: 'web', branch: 'main', env: 'Production', status: 'ok', author: 'AL', commit: 'a1f9c2e', duration: '38s' },
  { id: 'd2', name: 'web', branch: 'feat/predict-cache', env: 'Preview', status: 'info', author: 'JS', commit: '7b30d11', duration: '41s' },
  { id: 'd3', name: 'docs', branch: 'main', env: 'Production', status: 'warning', author: 'CW', commit: 'c0e4a88', duration: '1m 12s' },
  { id: 'd4', name: 'api', branch: 'hotfix/timeout', env: 'Staging', status: 'danger', author: 'AL', commit: '5d2bb90', duration: '—' },
  { id: 'd5', name: 'web', branch: 'feat/agent-tools', env: 'Preview', status: 'ok', author: 'MR', commit: '9ee1f04', duration: '44s' },
  { id: 'd6', name: 'marketing', branch: 'main', env: 'Production', status: 'ok', author: 'JS', commit: '2c77a31', duration: '29s' },
  { id: 'd7', name: 'api', branch: 'main', env: 'Production', status: 'ok', author: 'CW', commit: 'b41d9a7', duration: '52s' },
];
const STATUS_LABEL = { ok: 'Ready', info: 'Building', warning: 'Queued', danger: 'Failed' };

function RowMenu({ open, onToggle, onPick }) {
  return (
    <div className="cs-actions" onClick={(e) => e.stopPropagation()}>
      <DvIconButton icon={<i data-lucide="ellipsis"></i>} label="Actions" size="sm" onClick={onToggle} />
      {open && (
        <div className="cs-actions__menu">
          <DvFlyout
            style={{ width: 180 }}
            items={[
              { label: 'Redeploy', icon: <i data-lucide="refresh-cw"></i>, onClick: () => onPick() },
              { label: 'View logs', icon: <i data-lucide="scroll-text"></i>, onClick: () => onPick() },
              { label: 'Rename', icon: <i data-lucide="pencil"></i>, onClick: () => onPick() },
              { separator: true },
              { label: 'Delete', icon: <i data-lucide="trash-2"></i>, danger: true, onClick: () => onPick() },
            ]}
          />
        </div>
      )}
    </div>
  );
}

function DeploymentsView() {
  const [env, setEnv] = dvUseState('all');
  const [q, setQ] = dvUseState('');
  const [status, setStatus] = dvUseState('all');
  const [selected, setSelected] = dvUseState('d1');
  const [menuId, setMenuId] = dvUseState(null);

  dvUseEffect(() => {
    if (!menuId) return;
    const close = () => setMenuId(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuId]);

  const rows = DEPLOYS.filter((d) => {
    if (env !== 'all' && d.env.toLowerCase() !== env) return false;
    if (status !== 'all' && d.status !== status) return false;
    if (q && !(`${d.name} ${d.branch}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  });

  const columns = [
    { key: 'name', label: 'Deployment', render: (_, r) => <span className="cs-deploy">{r.name} <span className="cs-deploy__branch">{r.branch}</span></span> },
    { key: 'env', label: 'Environment' },
    { key: 'status', label: 'Status', render: (v) => <span className="cs-cell-status"><span className={'jojo-dot jojo-dot--' + v}></span>{STATUS_LABEL[v]}</span> },
    { key: 'author', label: 'Author', render: (v) => <span className="cs-cell-author"><DvAvatar initials={v} size="sm" /></span> },
    { key: 'commit', label: 'Commit', render: (v) => <DvBadge mono>{v}</DvBadge> },
    { key: 'duration', label: 'Duration', numeric: true },
    { key: '_actions', label: '', render: (_, r) => <RowMenu open={menuId === r.id} onToggle={() => setMenuId(menuId === r.id ? null : r.id)} onPick={() => setMenuId(null)} /> },
  ];

  return (
    <div className="cs-view">
      <div className="cs-page-head">
        <div>
          <h1 className="cs-h1">Deployments</h1>
          <p className="cs-sub">{rows.length} of {DEPLOYS.length} shown · last synced 2m ago</p>
        </div>
        <DvButton variant="primary" leadingIcon={<i data-lucide="plus"></i>}>New deployment</DvButton>
      </div>

      <DvTabs
        value={env}
        onChange={setEnv}
        tabs={[
          { id: 'all', label: 'All' },
          { id: 'production', label: 'Production' },
          { id: 'preview', label: 'Preview' },
          { id: 'staging', label: 'Staging' },
        ]}
      />

      <div className="cs-toolbar">
        <div className="cs-toolbar__lead">
          <div className="cs-toolbar__search">
            <DvInput size="sm" leadingIcon={<i data-lucide="search"></i>} placeholder="Filter by name or branch…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Quick find" />
          </div>
          <DvSelect size="sm" value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status"
            options={[{ value: 'all', label: 'Any status' }, { value: 'ok', label: 'Ready' }, { value: 'info', label: 'Building' }, { value: 'warning', label: 'Queued' }, { value: 'danger', label: 'Failed' }]} />
        </div>
        <div className="cs-toolbar__trail">
          <DvButton variant="ghost" size="sm" leadingIcon={<i data-lucide="download"></i>}>Export</DvButton>
          <DvIconButton icon={<i data-lucide="sliders-horizontal"></i>} label="More filters" shape="trigger" size="sm" />
        </div>
      </div>

      <div className="cs-table-card">
        {rows.length > 0 ? (
          <DvTable columns={columns} data={rows} rowKey="id" selectedId={selected} onRowClick={(r) => setSelected(r.id)} />
        ) : (
          <div className="cs-empty">No deployments match these filters.</div>
        )}
      </div>
    </div>
  );
}
window.DeploymentsView = DeploymentsView;
