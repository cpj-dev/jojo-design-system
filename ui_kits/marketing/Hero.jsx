/* Marketing hero composed from the shared tokens and component primitives. */
const { Button: HeroButton } = window.DS;

function Hero() {
  return (
    <section className="mk-hero" id="top">
      <div className="mk-shell mk-hero__inner">
        <div className="mk-hero__copy">
          <div className="mk-eyebrow">CSS tokens · React components</div>
          <h1 className="mk-hero__title">Build static interfaces from one stylesheet.</h1>
          <p className="mk-hero__sub">
            jojo provides CSS custom properties, React primitives, and example
            layouts for pages that need light and dark themes.
          </p>
          <div className="mk-hero__cta">
            <HeroButton variant="primary" size="lg">Get started</HeroButton>
            <HeroButton variant="tertiary">Read the docs</HeroButton>
          </div>
          <div className="mk-hero__meta">MIT-licensed · CSS-first · light and dark themes</div>
        </div>

        <div className="mk-hero__demo" aria-hidden="true">
          <div className="mk-code">
            <div className="mk-code__bar"><span className="mk-code__file">cta.css</span></div>
            <pre className="mk-code__body"><span className="c-com">// reference token aliases</span>{"\n"}.cta {"{"}{"\n"}{"  "}background: <span className="c-kw">var(--fill-ink)</span>;{"\n"}<span className="c-add">+  color: var(--accent-orange);</span>{"\n"}{"}"}</pre>
            <div className="mk-code__hint"><span className="mk-kbd">var()</span> resolves to the live theme</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
