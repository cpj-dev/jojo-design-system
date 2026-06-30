/* Marketing — features. A grid grouped by gap (NO per-card borders — anti-box).
   Static lucide icons. Hierarchy by size + the mono eyebrow, not boxes. */

function Feature({ icon, title, body }) {
  return (
    <div className="mk-feat">
      <div className="mk-feat__icon"><i data-lucide={icon}></i></div>
      <h3 className="mk-feat__title">{title}</h3>
      <p className="mk-feat__body">{body}</p>
    </div>
  );
}

function Features() {
  return (
    <section className="mk-section" id="features">
      <div className="mk-shell">
        <div className="mk-section__head">
          <div className="mk-eyebrow">why jojo</div>
          <h2 className="mk-section__title">Familiar, but disciplined</h2>
          <p className="mk-section__lede">
            jojo gives you the smallest set of decisions that still feels complete — tokens,
            primitives, and rules that keep every screen consistent.
          </p>
        </div>

        <div className="mk-feat-grid">
          <Feature icon="palette" title="Design tokens"
            body="One warm ink stepped into one warm paper. Reference resolved CSS variables — never hardcode a color, shadow, or radius." />
          <Feature icon="blocks" title="Component primitives"
            body="Accessible React primitives — buttons, inputs, cards, tables, tabs — that already speak the system, in light and dark." />
          <Feature icon="square" title="Dual-border system"
            body="A barely-there hairline for chrome, a hard ink outline for emphasis. The two-border contrast is the refined tell." />
          <Feature icon="layout-dashboard" title="Anti-box layout"
            body="Group with whitespace, headers, and hairlines. At most one bordered container per region; never a card in a card." />
          <Feature icon="zap" title="Color-only motion"
            body="State is color, never geometry — no lift, bounce, or spin. prefers-reduced-motion is honored by default." />
          <Feature icon="sun-moon" title="Light & dark"
            body="The same one-hue mechanism on warm paper or warm near-black. WCAG-AA verified in both themes." />
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
