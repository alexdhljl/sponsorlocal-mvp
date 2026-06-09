const events = [
  ["one", "Community", "1.8 mi", "Riverside Sunday 5K Club", "Northbank Run Collective", "85 attendees", "Jul 12", "Austin", "$50", "A casual neighborhood run with a post-run hangout and shareable sponsor moments."],
  ["two", "School", "3.2 mi", "Maple Elementary Maker Fair", "Maple PTA", "220 attendees", "Aug 3", "Denver", "$300", "Student demos, robotics tables, family bags, and trusted school community exposure."],
  ["three", "Culture", "4.6 mi", "Little Havana Culture Night", "Calle Ocho Arts Circle", "140 attendees", "Jul 24", "Miami", "$150", "Outdoor performers, food vendors, community art tables, and high-energy social content."]
];

export default function Home() {
  return (
    <main>
      <header className="top">
        <nav className="shell nav">
          <a className="brand" href="#"><span className="logo">SL</span>SponsorLocal</a>
          <div className="links">
            <a href="#events">Explore</a><a href="#create">Create event</a><a href="#dashboards">Dashboards</a><a href="#proof">Proof</a>
          </div>
          <a className="btn primary" href="#events">Find matches</a>
        </nav>
      </header>

      <div className="shell hero">
        <div>
          <span className="badge">Local Community Sponsorship Marketplace</span>
          <h1>Sponsor local events like buying neighborhood ads.</h1>
          <p className="lead">SponsorLocal helps brands, local shops, schools, nonprofits, and organizers turn small community moments into measurable sponsorship opportunities.</p>
          <div className="actions"><a className="btn primary" href="#events">Explore events</a><a className="btn secondary" href="#create">Create sponsorship page</a></div>
          <div className="metrics"><div className="metric"><strong>128</strong><span>Demo events</span></div><div className="metric"><strong>2.9 mi</strong><span>Avg local reach</span></div><div className="metric"><strong>$50</strong><span>Package starts</span></div></div>
        </div>
        <div className="showcase">
          <div className="card listing">
            <div className="photo"><div className="pills"><span className="badge">School</span><span className="badge">3.2 mi</span></div><div className="photoText"><h2>Maple Elementary Maker Fair</h2><p>Maple PTA · 220 attendees · Denver, CO</p></div></div>
            <div className="features"><div className="feature"><span>⌁</span>Geo-matched</div><div className="feature"><span>$</span>Stripe ready</div><div className="feature"><span>✓</span>Proof workflow</div></div>
          </div>
        </div>
      </div>

      <section id="events" className="shell">
        <div className="sectionTitle"><div className="eyebrow">Explore</div><h3>Find sponsor-ready local events</h3><p>Search nearby opportunities by distance, event type, audience, attendance, and sponsorship budget.</p></div>
        <div className="grid3">
          {events.map(([tone, category, distance, title, organizer, attendees, date, city, price, copy]) => (
            <article className="card eventCard" key={title}>
              <div className={`eventImg ${tone}`}><div className="pills"><span className="badge">{category}</span><span className="badge">{distance}</span></div><div className="eventTitle"><h4>{title}</h4><small>{organizer}</small></div></div>
              <div className="eventBody"><div className="eventMeta"><span>{attendees}</span><span>{date}</span><span>{city}</span></div><p>{copy}</p><div className="price"><span>Packages from</span><strong>{price}</strong></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell">
        <div className="sectionTitle"><div className="eyebrow">Event Detail</div><h3>Clear packages, real exposure, simple purchase flow</h3></div>
        <div className="dashboard">
          <div className="card panel"><h2>Maple Elementary Maker Fair</h2><p className="lead">A family-first maker fair featuring student demos, robotics tables, and community partner booths.</p><div className="metrics"><div className="metric"><strong>220</strong><span>Attendees</span></div><div className="metric"><strong>3.2</strong><span>Miles away</span></div><div className="metric"><strong>School</strong><span>Category</span></div></div><div className="package ai"><b>AI sponsorship studio</b><p>Suggested: position this event as a high-trust neighborhood activation with one low-cost package and one premium booth placement.</p></div></div>
          <div className="card panel"><div className="package"><b>Gift Bag Sponsor</b><br/><strong>$300</strong><ul><li>Insert in 200 family bags</li><li>Sponsor board logo</li><li>Newsletter thank-you</li></ul><button className="btn primary" style={{width:"100%",marginTop:18}}>Buy sponsorship</button></div><div className="package"><b>Logo Sponsor</b><br/><strong>$500</strong><ul><li>Large logo placement</li><li>Booth space</li><li>Two social media mentions</li></ul></div></div>
        </div>
      </section>

      <section id="dashboards" className="shell"><div className="sectionTitle"><div className="eyebrow">Dashboards</div><h3>Three-role MVP: sponsor, organizer, admin</h3></div><div className="grid3"><div className="card panel"><h2>Sponsor HQ</h2><p>Saved events, active conversations, purchased packages, and AI recommendations.</p><div className="metric"><strong>$1.2k</strong><span>Purchased packages</span></div></div><div className="card panel"><h2>Organizer HQ</h2><p>Manage events, inquiries, orders, and Stripe payout status from one surface.</p><div className="metric"><strong>8</strong><span>Sponsor inquiries</span></div></div><div className="card panel"><h2>Admin</h2><p>Review event quality, approve packages, manage users, and watch disputes.</p><div className="metric"><strong>18</strong><span>Packages pending</span></div></div></div></section>

      <section id="proof" className="shell"><div className="dashboard"><div className="card panel"><div className="eyebrow">Proof of Exposure</div><h3>Voucher pickup plus proof upload</h3><p>Digital voucher fulfillment keeps the platform light. After the event, organizers upload brand exposure photos and a social recap link for sponsor approval.</p><div className="actions"><button className="btn primary">Submit proof</button><button className="btn secondary">View voucher SL-92A84F13BC</button></div></div><div className="card panel"><h2>Status</h2><p>✓ Payment captured</p><p>✓ Voucher issued</p><p>○ Awaiting proof</p><p>○ Sponsor review</p></div></div></section>
      <footer className="shell">SponsorLocal MVP · Next.js, Supabase schema, and Stripe-ready architecture.</footer>
    </main>
  );
}
