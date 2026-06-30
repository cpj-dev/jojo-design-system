/* Console — Settings. Sections are a heading + divide-y rows (no card-in-card).
   The Appearance control is wired to the real app theme. One primary action. */
const { Input: StInput, Select: StSelect, Switch: StSwitch, Checkbox: StCheckbox, SegmentedControl: StSegmented, Button: StButton } = window.DS;
const { useState: stUseState } = React;

function SetRow({ label, hint, children }) {
  return (
    <div className="cs-set-row">
      <div className="cs-set-row__meta">
        <div className="cs-set-row__label">{label}</div>
        {hint && <div className="cs-set-row__hint">{hint}</div>}
      </div>
      <div className="cs-set-row__control">{children}</div>
    </div>
  );
}

function SetSection({ title, desc, children }) {
  return (
    <section className="cs-set-section">
      <div className="cs-set-section__head">
        <h2 className="cs-h2">{title}</h2>
        {desc && <p className="cs-sub">{desc}</p>}
      </div>
      <div className="cs-set-rows">{children}</div>
    </section>
  );
}

function SettingsView({ theme, onThemeChange }) {
  const [tabAutocomplete, setTabAutocomplete] = stUseState(true);
  const [privacy, setPrivacy] = stUseState(false);
  const [weekly, setWeekly] = stUseState(true);

  return (
    <div className="cs-view cs-view--narrow">
      <div className="cs-page-head">
        <div>
          <h1 className="cs-h1">Settings</h1>
          <p className="cs-sub">Manage your workspace, AI features, and appearance.</p>
        </div>
      </div>

      <SetSection title="General" desc="Basic information about this workspace.">
        <SetRow label="Workspace name" hint="Shown across the dashboard and in invites.">
          <StInput defaultValue="acme-inc" aria-label="Workspace name" />
        </SetRow>
        <SetRow label="Default environment" hint="Where new deployments land by default.">
          <StSelect defaultValue="Production" options={['Production', 'Staging', 'Preview']} aria-label="Default environment" />
        </SetRow>
      </SetSection>

      <SetSection title="AI features" desc="Control how the workspace assistant indexes and suggests across your project.">
        <SetRow label="Tab autocomplete" hint="Multi-line predictions from your recent edits.">
          <StSwitch checked={tabAutocomplete} onChange={(e) => setTabAutocomplete(e.target.checked)} />
        </SetRow>
        <SetRow label="Privacy mode" hint="Code is never stored remotely. SOC 2 certified.">
          <StSwitch checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} />
        </SetRow>
        <SetRow label="Default model" hint="Used for agent and ⌘K edits.">
          <StSelect defaultValue="claude-sonnet" aria-label="Default model"
            options={[{ value: 'claude-sonnet', label: 'Claude Sonnet' }, { value: 'gpt', label: 'GPT' }, { value: 'jojo-small', label: 'jojo-small' }]} />
        </SetRow>
      </SetSection>

      <SetSection title="Appearance" desc="Choose how the dashboard looks on this device.">
        <SetRow label="Theme" hint="Both themes are first-class and warm.">
          <StSegmented value={theme} onChange={onThemeChange}
            options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }]} />
        </SetRow>
        <SetRow label="Weekly summary email" hint="A Monday digest of deploys and usage.">
          <StCheckbox label="Enabled" checked={weekly} onChange={(e) => setWeekly(e.target.checked)} />
        </SetRow>
      </SetSection>

      <div className="cs-set-actions">
        <StButton variant="ghost">Cancel</StButton>
        <StButton variant="primary">Save changes</StButton>
      </div>
    </div>
  );
}
window.SettingsView = SettingsView;
