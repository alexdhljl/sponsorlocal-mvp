const events = [
  {
    tone: "one",
    category: "Community",
    distance: "1.8 mi",
    title: "Riverside Sunday 5K Club",
    organizer: "Northbank Run Collective",
    attendees: "85 attendees",
    date: "Jul 12",
    city: "Austin",
    price: "$50",
    copy: "A casual neighborhood run with a post-run hangout and shareable sponsor moments.",
    insights: { score: 88, traffic: "12-20", redemption: 31 }
  },
  {
    tone: "two",
    category: "School",
    distance: "3.2 mi",
    title: "Maple Elementary Maker Fair",
    organizer: "Maple PTA",
    attendees: "220 attendees",
    date: "Aug 3",
    city: "Denver",
    price: "$300",
    copy: "Student demos, robotics tables, family bags, and trusted school community exposure.",
    insights: { score: 92, traffic: "15-25", redemption: 35 }
  },
  {
    tone: "three",
    category: "Culture",
    distance: "4.6 mi",
    title: "Little Havana Culture Night",
    organizer: "Calle Ocho Arts Circle",
    attendees: "140 attendees",
    date: "Jul 24",
    city: "Miami",
    price: "$150",
    copy: "Outdoor performers, food vendors, community art tables, and high-energy social content.",
    insights: { score: 90, traffic: "18-28", redemption: 38 }
  }
];

const detailInsights = {
  sponsorScore: 92,
  couponRedemptionRate: 35,
  avgSponsorTraffic: "15-25",
  avgAttendance: 320,
  couponClaims: 75,
  pastSponsorCount: 12,
  repeatSponsorRate: 68,
  categories: ["Restaurants", "Tutoring Centers", "Dental Clinics", "Real Estate Agents", "Local Services"]
};

export default function Home() {
  return (
    <main>
      <header className="top">
        <nav className="shell nav">
          <a className="brand" href="#"><span className="logo">SL</span>SponsorLocal</a>
          <div className="links">
            <a href="#events">Explore</a><a href="#insights">Insights</a><a href="#dashboards">Dashboards</a><a href="#proof">Proof</a>
          </div>
          <a className="btn primary" href="#events">Find matches</a>
        </nav>
      </header>

      <div className="shell hero">
        <div>
          <span className="badge">Measurable Local Sponsorship Marketplace</span>
          <h1>Sponsor local events with measurable results.</h1>
          <p className="lead">SponsorLocal helps brands, local shops, schools, nonprofits, and organizers turn small community moments into measurable sponsorship opportunities, with performance signals that feel closer to buying neighborhood ads.</p>
          <div className="actions"><a className="btn primary" href="#events">Explore events</a><a className="btn secondary" href="#insights">View performance data</a></div>
          <div className="metrics"><div className="metric"><strong>92</strong><span>Top Sponsor Score</span></div><div className="metric"><strong>35%</strong><span>Coupon redemption</span></div><div className="metric"><strong>15-25</strong><span>Estimated visits</span></div></div>
        </div>
        <div className="showcase">
          <div className="card listing">
            <div className="photo"><div className="pills"><span className="badge">School</span><span className="badge">3.2 mi</span></div><div className="photoText"><h2>Maple Elementary Maker Fair</h2><p>Maple PTA · 220 attendees · Denver, CO</p></div></div>
            <div className="features"><div className="feature"><span>92</span>Sponsor Score</div><div className="feature"><span>35%</span>Redemption</div><div className="feature"><span>15-25</span>Visits</div></div>
          </div>
        </div>
      </div>

      <section id="events" className="shell">
        <div className="sectionTitle"><div className="eyebrow">Explore</div><h3>Find sponsor-ready local events</h3><p>Browse nearby opportunities with compact performance signals, so sponsors can quickly judge whether an event is worth backing.</p></div>
        <div className="grid3">
          {events.map((event) => (
            <article className="card eventCard" key={event.title}>
              <div className={`eventImg ${event.tone}`}><div className="pills"><span className="badge">{event.category}</span><span className="badge">{event.distance}</span></div><div className="eventTitle"><h4>{event.title}</h4><small>{event.organizer}</small></div></div>
              <div className="eventBody"><div className="eventMeta"><span>{event.attendees}</span><span>{event.date}</span><span>{event.city}</span></div><p>{event.copy}</p><div className="miniInsights"><div className="mini dark"><b>{event.insights.score}/100</b><span>Sponsor Score</span></div><div className="mini"><b>{event.insights.traffic}</b><span>Traffic</span></div><div className="mini lavender"><b>{event.insights.redemption}%</b><span>Redemption</span></div></div><div className="price"><span>Packages from</span><strong>{event.price}</strong></div></div>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="shell">
        <div className="sectionTitle"><div className="eyebrow">Sponsor Performance Insights</div><h3>Historical organizer-reported data to help sponsors estimate local impact.</h3><p>These metrics are framed as historical averages and estimated impact, not guarantees. The goal is to make local sponsorship feel more measurable and decision-ready.</p></div>
        <div className="insightWrap">
          <div className="scoreCard"><div className="eyebrow">Sponsor Score</div><strong>{detailInsights.sponsorScore}<span>/100</span></strong><div className="bar"><i style={{width:`${detailInsights.sponsorScore}%`}} /></div><p>Higher than similar local events</p><div className="tagRow"><span>Historical Average</span><span>Organizer Reported</span><span>Estimated Impact</span></div></div>
          <div className="insightGrid">
            <div className="insight"><small>Historical Coupon Redemption Rate</small><b>{detailInsights.couponRedemptionRate}%</b><div className="bar sage"><i style={{width:`${detailInsights.couponRedemptionRate}%`}} /></div><p>35% historical coupon redemption rate</p></div>
            <div className="insight"><small>Average Foot Traffic Generated</small><b>{detailInsights.avgSponsorTraffic}</b><p>15-25 estimated sponsor-driven visits</p></div>
            <div className="insight"><small>Average Attendance</small><b>{detailInsights.avgAttendance}</b><p>Historical average attendance</p></div>
            <div className="insight"><small>Coupon Claims</small><b>{detailInsights.couponClaims}</b><p>Average sponsor offer claims</p></div>
            <div className="insight"><small>Past Sponsor Count</small><b>{detailInsights.pastSponsorCount}</b><p>Brands that sponsored prior editions</p></div>
            <div className="insight"><small>Repeat Sponsor Rate</small><b>{detailInsights.repeatSponsorRate}%</b><div className="bar lavenderBar"><i style={{width:`${detailInsights.repeatSponsorRate}%`}} /></div><p>Returning sponsor signal</p></div>
          </div>
          <div className="categoryBox"><b>Best Sponsor Categories</b><p>Best for restaurants, tutoring centers, dental clinics, real estate agents, and local services.</p><div className="tagRow">{detailInsights.categories.map((category) => <span key={category}>{category}</span>)}</div></div>
        </div>
      </section>

      <section id="dashboards" className="shell"><div className="sectionTitle"><div className="eyebrow">Dashboards</div><h3>Three-role MVP: sponsor, organizer, admin</h3></div><div className="grid3"><div className="card panel"><h2>Sponsor HQ</h2><p>Saved events, active conversations, purchased packages, and AI recommendations.</p><div className="metric"><strong>$1.2k</strong><span>Purchased packages</span></div></div><div className="card panel"><h2>Organizer HQ</h2><p>Manage events, inquiries, orders, and Stripe payout status from one surface.</p><div className="metric"><strong>8</strong><span>Sponsor inquiries</span></div></div><div className="card panel"><h2>Admin</h2><p>Review event quality, approve packages, manage users, and watch disputes.</p><div className="metric"><strong>18</strong><span>Packages pending</span></div></div></div></section>

      <section id="proof" className="shell"><div className="dashboard"><div className="card panel"><div className="eyebrow">Proof of Exposure</div><h3>Voucher pickup plus proof upload</h3><p>Digital voucher fulfillment keeps the platform light. After the event, organizers upload brand exposure photos and a social recap link for sponsor approval.</p><div className="actions"><button className="btn primary">Submit proof</button><button className="btn secondary">View voucher SL-92A84F13BC</button></div></div><div className="card panel"><h2>Status</h2><p>✓ Payment captured</p><p>✓ Voucher issued</p><p>○ Awaiting proof</p><p>○ Sponsor review</p></div></div></section>
      <footer className="shell">SponsorLocal MVP · Sponsor local events with measurable results.</footer>
    </main>
  );
}
