/* Marketing feature grid with static Lucide icons. */

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
          <div className="mk-eyebrow">included</div>
          <h2 className="mk-section__title">Tokens, components, and examples</h2>
          <p className="mk-section__lede">
            Use the CSS layer on its own, or compose the React primitives for
            common forms, navigation, surfaces, and data views.
          </p>
        </div>

        <div className="mk-feat-grid">
          <Feature icon="palette" title="Design tokens"
            body="CSS custom properties cover color, typography, spacing, radius, motion, and theme values." />
          <Feature icon="blocks" title="Component primitives"
            body="Buttons, inputs, cards, tables, tabs, and overlays are exposed on window.JojoDesignSystem." />
          <Feature icon="square" title="Border tokens"
            body="Use --hairline for standard borders and --rule-ink for higher-contrast borders." />
          <Feature icon="layout-dashboard" title="Example layouts"
            body="Marketing and console pages show how the tokens and components work together." />
          <Feature icon="zap" title="Motion tokens"
            body="Interaction feedback uses token-based color and opacity transitions, with reduced-motion support." />
          <Feature icon="sun-moon" title="Light & dark"
            body="Theme values are defined in CSS and switch through .dark or [data-theme='dark']." />
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
