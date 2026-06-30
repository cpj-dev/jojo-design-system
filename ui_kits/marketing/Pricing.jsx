/* Marketing pricing. SegmentedControl toggles monthly/annual pricing. The check
   glyph is inline SVG because this section re-renders. */
const { Button: PrButton, Card: PrCard, SegmentedControl: PrSegmented } = window.DS;
const { useState: prUseState } = React;

const PrCheck = () => (
  <svg className="mk-price__check" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TIERS = [
  {
    name: 'Community', monthly: 0, annual: 0, blurb: 'Everything, forever. MIT-licensed.',
    cta: 'Get started', variant: 'secondary',
    features: ['All tokens & components', 'Light & dark themes', 'Docs in English & 简体中文'],
  },
  {
    name: 'Sponsor', monthly: 20, annual: 16, blurb: 'Support ongoing development.', featured: true,
    cta: 'Become a sponsor', variant: 'primary',
    features: ['Everything in Community', 'Your name in BACKERS.md', 'Priority issue triage', 'Early access to RFCs'],
  },
  {
    name: 'Studio', monthly: 40, annual: 32, blurb: 'For teams adopting jojo.',
    cta: 'Talk to sales', variant: 'outline',
    features: ['Everything in Sponsor', 'Adoption guidance', 'Private Q&amp;A channel', 'A design-system review'],
  },
];

function PriceTier({ tier, annual }) {
  const price = annual ? tier.annual : tier.monthly;
  return (
    <PrCard variant={tier.featured ? 'outline' : 'soft'} hairline={!tier.featured} padding="lg" className="mk-price">
      <div className="mk-price__head">
        <span className="mk-price__name">{tier.name}</span>
        {tier.featured && <span className="mk-price__flag">Most popular</span>}
      </div>
      <div className="mk-price__amount">
        <span className="mk-price__num">${price}</span>
        <span className="mk-price__per">/ month{annual && price > 0 ? ', billed yearly' : ''}</span>
      </div>
      <p className="mk-price__blurb">{tier.blurb}</p>
      <PrButton variant={tier.variant} className="mk-price__cta">{tier.cta}</PrButton>
      <ul className="mk-price__list">
        {tier.features.map((f, i) => (
          <li key={i}><PrCheck /><span dangerouslySetInnerHTML={{ __html: f }} /></li>
        ))}
      </ul>
    </PrCard>
  );
}

function Pricing() {
  const [annual, setAnnual] = prUseState(true);
  return (
    <section className="mk-section mk-section--alt" id="pricing">
      <div className="mk-shell">
        <div className="mk-section__head mk-section__head--center">
          <div className="mk-eyebrow">support</div>
          <h2 className="mk-section__title">Free forever. Sponsor if it helps.</h2>
          <div className="mk-price__toggle">
            <PrSegmented
              value={annual ? 'annual' : 'monthly'}
              onChange={(v) => setAnnual(v === 'annual')}
              options={[{ value: 'monthly', label: 'Monthly' }, { value: 'annual', label: 'Yearly · save 20%' }]}
            />
          </div>
        </div>
        <div className="mk-price-grid">
          {TIERS.map((t) => <PriceTier key={t.name} tier={t} annual={annual} />)}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
