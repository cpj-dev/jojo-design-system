/* Console — Overview. Metric tiles grouped by GRID GAP (tint fill, no per-tile
   border — anti-box), then a recent-activity list as divide-y rows (no row boxes). */
const { Badge: OvBadge, Button: OvButton } = window.DS;

const METRICS = [
  { label: 'Deployments today', value: '24', delta: '+12%', dir: 'up' },
  { label: 'Avg build time', value: '41s', delta: '-8%', dir: 'up' },
  { label: 'Success rate', value: '98.2%', delta: '+0.4%', dir: 'up' },
  { label: 'Fast requests', value: '812', delta: '81% of plan', dir: 'flat' },
];

const ACTIVITY = [
  { name: 'web — main', branch: 'main', tone: 'ok', label: 'Ready', when: '2m ago' },
  { name: 'web — feat/predict-cache', branch: 'feat/predict-cache', tone: 'info', label: 'Building', when: '6m ago' },
  { name: 'docs — main', branch: 'main', tone: 'warning', label: 'Queued', when: '18m ago' },
  { name: 'api — hotfix/timeout', branch: 'hotfix/timeout', tone: 'danger', label: 'Failed', when: '41m ago' },
  { name: 'web — main', branch: 'main', tone: 'ok', label: 'Ready', when: '1h ago' },
];

function OverviewView() {
  return (
    <div className="cs-view">
      <div className="cs-page-head">
        <div>
          <h1 className="cs-h1">Overview</h1>
          <p className="cs-sub">Everything happening across acme-inc this week.</p>
        </div>
        <OvButton variant="primary" leadingIcon={<i data-lucide="plus"></i>}>New deployment</OvButton>
      </div>

      <div className="cs-metrics">
        {METRICS.map((m) => (
          <div className="cs-metric" key={m.label}>
            <div className="cs-metric__label">{m.label}</div>
            <div className="cs-metric__value">{m.value}</div>
            <div className="cs-metric__delta">{m.delta}</div>
          </div>
        ))}
      </div>

      <div className="cs-section">
        <div className="cs-section__head">
          <h2 className="cs-h2">Recent deployments</h2>
          <OvButton variant="tertiary">View all</OvButton>
        </div>
        <div className="cs-list">
          {ACTIVITY.map((a, i) => (
            <div className="cs-list__row" key={i}>
              <span className="cs-list__name">{a.name}</span>
              <span className="cs-list__status"><span className={'jojo-dot jojo-dot--' + a.tone}></span>{a.label}</span>
              <span className="cs-list__when">{a.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.OverviewView = OverviewView;
