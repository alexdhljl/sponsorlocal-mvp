import { ArrowRight, BarChart3, CheckCircle2, MapPin, QrCode, Search, Sparkles, Store, TicketPercent, Users } from "lucide-react";

const recommendedEvents = [
  {
    name: "Chinese School Open House",
    type: "School",
    distance: "1.4 mi",
    audience: "Families with children",
    match: 95,
    campaign: "Buy One Get One Free"
  },
  {
    name: "Family Picnic",
    type: "Community",
    distance: "2.1 mi",
    audience: "Local parents",
    match: 88,
    campaign: "First Visit Discount"
  },
  {
    name: "Youth Sports Day",
    type: "Sports",
    distance: "3.8 mi",
    audience: "Active families",
    match: 82,
    campaign: "Trial Class"
  }
];

const couponIdeas = ["Buy One Get One", "Free Consultation", "First Visit Discount", "Trial Class", "Family Discount", "Gift Cards"];

const roiMetrics = [
  { label: "Distributed", value: "120" },
  { label: "Claimed", value: "68" },
  { label: "Redeemed", value: "21" },
  { label: "Redemption Rate", value: "31%" },
  { label: "New Customers", value: "18" }
];

const successFees = [
  { business: "Restaurant", fee: "$0.50-$1", basis: "per redeemed coupon" },
  { business: "Coffee Shop", fee: "$0.50-$1", basis: "per redeemed coupon" },
  { business: "Summer Camp", fee: "$2-$5", basis: "per redeemed coupon" },
  { business: "Pediatric Dentist", fee: "$10-$20", basis: "per qualified lead" }
];

export default function Home() {
  return (
    <main>
      <header className="top">
        <nav className="shell nav">
          <a className="brand" href="#"><span className="logo">EFX</span>EventFloX</a>
          <div className="links">
            <a href="#how">How it works</a>
            <a href="#match">Example match</a>
            <a href="#dashboard">Results</a>
            <a href="#pricing">Pricing</a>
          </div>
          <a className="btn primary" href="#start"><Search size={17} />Find Local Opportunities</a>
        </nav>
      </header>

      <section className="shell hero">
        <div className="heroCopy">
          <span className="badge"><Sparkles size={15} />AI-powered local business growth platform</span>
          <h1>Turn Local Events Into Real Customers</h1>
          <p className="lead">EventFloX helps local businesses discover nearby community events, launch coupon campaigns, and generate measurable customer visits.</p>
          <div className="actions">
            <a className="btn primary" href="#start"><MapPin size={18} />Find Local Opportunities</a>
            <a className="btn secondary" href="#organizers"><Users size={18} />Join as an Organizer</a>
          </div>
          <div className="trustStrip">
            <span><CheckCircle2 size={16} />Free to join</span>
            <span><CheckCircle2 size={16} />No monthly fees</span>
            <span><CheckCircle2 size={16} />Pay when customers show up</span>
          </div>
        </div>

        <div className="heroPanel" aria-label="EventFloX local opportunity finder preview">
          <div className="finderTop">
            <div>
              <span className="eyebrow">Opportunity Finder</span>
              <h2>New Bubble Tea Shop</h2>
              <p>Hoboken, NJ · Families and students</p>
            </div>
            <div className="zipBox">07030</div>
          </div>
          <div className="matchList">
            {recommendedEvents.map((event) => (
              <div className="matchRow" key={event.name}>
                <div>
                  <strong>{event.name}</strong>
                  <span>{event.type} · {event.distance} · {event.audience}</span>
                </div>
                <b>{event.match}%</b>
              </div>
            ))}
          </div>
          <div className="couponPreview">
            <div className="qr"><QrCode size={42} /></div>
            <div>
              <span className="eyebrow">Suggested campaign</span>
              <h3>Buy One Get One Free</h3>
              <p>Expected reach: 150 families · Expected claims: 60 · Estimated visits: 18</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="shell">
        <div className="sectionTitle">
          <span className="eyebrow">How it works</span>
          <h2>Three steps from local event discovery to customer visits</h2>
        </div>
        <div className="stepGrid">
          <article className="stepCard"><Store size={26} /><span>Step 1</span><h3>Tell us about your business</h3><p>Enter your ZIP code, business category, and target audience.</p></article>
          <article className="stepCard"><MapPin size={26} /><span>Step 2</span><h3>Get matched with nearby events</h3><p>AI recommends schools, festivals, cultural events, family days, and local organizations with match scores.</p></article>
          <article className="stepCard"><BarChart3 size={26} /><span>Step 3</span><h3>Track real results</h3><p>See coupon claims, redemptions, redemption rate, and estimated new customers in one clean dashboard.</p></article>
        </div>
      </section>

      <section id="match" className="shell matchSection">
        <div className="sectionTitle">
          <span className="eyebrow">Example match</span>
          <h2>A new bubble tea shop finds nearby family events in minutes</h2>
          <p>Instead of guessing where to advertise, the business gets ranked local opportunities and a ready-to-launch offer.</p>
        </div>
        <div className="exampleGrid">
          <div className="examplePanel">
            <span className="eyebrow">Business profile</span>
            <h3>New Bubble Tea Shop</h3>
            <p>Location: Hoboken, NJ</p>
            <p>Target audience: families, students, and weekend foot traffic</p>
            <div className="tagRow"><span>ZIP 07030</span><span>Drinks</span><span>Family-friendly</span></div>
          </div>
          <div className="rankedList">
            {recommendedEvents.map((event) => (
              <div className="rankedItem" key={event.name}>
                <div><strong>{event.name}</strong><span>{event.campaign}</span></div>
                <b>{event.match}% Match</b>
              </div>
            ))}
          </div>
          <div className="campaignBox">
            <TicketPercent size={28} />
            <span className="eyebrow">Suggested campaign</span>
            <h3>Buy One Get One Free</h3>
            <div className="forecast"><span>150 Families</span><span>60 Claims</span><span>18 Visits</span></div>
          </div>
        </div>
      </section>

      <section id="businesses" className="shell twoColumn">
        <div className="sectionTitle">
          <span className="eyebrow">For businesses</span>
          <h2>Acquire customers without wasting money on broad ads</h2>
          <p>EventFloX is built for restaurants, coffee shops, camps, clinics, tutoring centers, studios, and local services that want measurable community-driven growth.</p>
        </div>
        <div className="benefitList">
          <p><CheckCircle2 size={18} />Reach nearby families</p>
          <p><CheckCircle2 size={18} />Discover events you would never find manually</p>
          <p><CheckCircle2 size={18} />Launch trackable coupon campaigns</p>
          <p><CheckCircle2 size={18} />Measure actual customer visits</p>
          <p><CheckCircle2 size={18} />Pay only when campaigns work</p>
        </div>
      </section>

      <section id="organizers" className="shell twoColumn organizerBand">
        <div className="sectionTitle">
          <span className="eyebrow">For organizers</span>
          <h2>Bring useful local perks to your attendees</h2>
          <p>Organizers can connect their community with relevant neighborhood businesses while creating measurable value for every partner.</p>
        </div>
        <div className="benefitList">
          <p><CheckCircle2 size={18} />Bring perks to attendees</p>
          <p><CheckCircle2 size={18} />Attract local business partners</p>
          <p><CheckCircle2 size={18} />Reduce cold outreach</p>
          <p><CheckCircle2 size={18} />Build stronger community connections</p>
          <p><CheckCircle2 size={18} />Create measurable partner value</p>
        </div>
      </section>

      <section id="dashboard" className="shell">
        <div className="sectionTitle">
          <span className="eyebrow">ROI dashboard preview</span>
          <h2>Track coupon performance and real customer visits</h2>
        </div>
        <div className="dashboardPreview">
          <div className="metricGrid">
            {roiMetrics.map((metric) => (
              <div className="metricTile" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
          <div className="chartPanel">
            <div className="chartHeader"><span>Campaign funnel</span><b>New Bubble Tea Shop</b></div>
            <div className="funnel"><i style={{ width: "100%" }} /><i style={{ width: "57%" }} /><i style={{ width: "31%" }} /></div>
            <div className="chartLabels"><span>Distributed</span><span>Claimed</span><span>Redeemed</span></div>
          </div>
        </div>
      </section>

      <section id="pricing" className="shell pricingSection">
        <div className="sectionTitle">
          <span className="eyebrow">Business model</span>
          <h2>Free to join. No monthly fees. No upfront costs.</h2>
          <p>EventFloX only earns revenue when coupons are redeemed or qualified leads are generated. We succeed when local businesses get customers.</p>
        </div>
        <div className="feeGrid">
          {successFees.map((fee) => (
            <div className="feeItem" key={fee.business}><strong>{fee.business}</strong><b>{fee.fee}</b><span>{fee.basis}</span></div>
          ))}
        </div>
      </section>

      <section id="start" className="shell finalCta">
        <span className="badge"><Sparkles size={15} />Free During Beta</span>
        <h2>Start With Your ZIP Code</h2>
        <p>See what community events are happening around your business, then launch an offer you can actually measure.</p>
        <div className="actions"><a className="btn primary" href="mailto:hello@eventflox.com?subject=Join%20the%20EventFloX%20Beta"><Search size={18} />Find Local Opportunities</a><a className="btn secondary" href="mailto:hello@eventflox.com?subject=Organizer%20Beta"><ArrowRight size={18} />Join the Beta</a></div>
      </section>

      <footer className="shell">EventFloX · Discover community events. Launch offers. Track results.</footer>
    </main>
  );
}
