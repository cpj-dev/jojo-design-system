/* Marketing — hero. Flat warm paper, large light display, one tertiary accent CTA,
   and a flat code preview well (diff-add uses the ok status tint — content, not chrome). */
const { Button: HeroButton } = window.DS;

function Hero() {
  return (
    <section className="mk-hero" id="top">
      <div className="mk-shell mk-hero__inner">
        <div className="mk-hero__copy">
          <div className="mk-eyebrow">one ink · one paper</div>
          <h1 className="mk-hero__title">Warm paper, drawn in ink.</h1>
          <p className="mk-hero__sub">
            jojo is an original, framework-agnostic design system. One warm ink, one warm paper,
            one disciplined accent — composed into calm, legible interfaces that work in light and dark.
          </p>
          <div className="mk-hero__cta">
            <HeroButton variant="primary" size="lg">Get started</HeroButton>
            <HeroButton variant="tertiary">Read the docs</HeroButton>
          </div>
          <div className="mk-hero__meta">MIT-licensed · works with any framework · light &amp; dark</div>
        </div>

        <div className="mk-hero__demo" aria-hidden="true">
          <div className="mk-code">
            <div className="mk-code__bar"><span className="mk-code__file">cta.css</span></div>
            <pre className="mk-code__body"><span className="c-com">// compose from tokens — never hardcode</span>{"\n"}.cta {"{"}{"\n"}{"  "}background: <span className="c-kw">var(--fill-ink)</span>;{"\n"}<span className="c-add">+  color: var(--accent-orange);</span>{"\n"}{"}"}</pre>
            <div className="mk-code__hint"><span className="mk-kbd">var()</span> resolves to the live theme</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
