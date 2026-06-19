# EventFloX MVP

EventFloX is an AI-powered local business growth platform that helps local businesses turn community events into real customers.

The product is no longer positioned as an event sponsorship marketplace. The MVP focuses on three core jobs:

1. Discover nearby community events
2. Launch coupon campaigns
3. Track real customer visits and redemptions

Tagline: **Turn Local Events Into Real Customers**

## Product Direction

EventFloX is for restaurants, coffee shops, camps, clinics, tutoring centers, studios, and local service businesses that want measurable customer acquisition through community engagement.

Businesses join for free. There are no monthly fees, no subscription tiers, and no upfront costs. EventFloX earns revenue only when coupons are redeemed or qualified leads are generated.

Think: Google Ads for local community events.

Not: Eventbrite for sponsorships.

## Included

- Modern responsive homepage for the EventFloX repositioning
- AI-style local opportunity finder preview
- Example match flow for a local business
- Coupon campaign preview with QR/redemption framing
- ROI dashboard preview with distributed, claimed, redeemed, redemption rate, and estimated new customer metrics
- Organizer-facing value story for bringing local perks to attendees
- Free beta and pay-for-results business model messaging

## Homepage Structure

- Hero: Turn Local Events Into Real Customers
- How it works: business profile, event matching, coupon/result tracking
- Example match: New Bubble Tea Shop in Hoboken, NJ
- For businesses: acquire customers through nearby community events
- For organizers: bring local perks to attendees and create measurable partner value
- ROI dashboard preview: coupon distribution, claims, redemptions, and new customers
- Pricing model: free to join, no monthly fees, pay when customers show up
- Final CTA: Start With Your ZIP Code

## Core MVP Data

Businesses enter:

- ZIP Code
- Business Category
- Target Audience

EventFloX recommends:

- Nearby community events
- School events
- Family events
- Cultural events
- Festivals
- Local organizations

Campaign types include:

- Buy One Get One
- Free Consultation
- First Visit Discount
- Trial Class
- Family Discount
- Gift Cards

Example ROI metrics:

- Coupons Distributed: 120
- Coupons Claimed: 68
- Coupons Redeemed: 21
- Redemption Rate: 31%
- Estimated New Customers: 18

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Next Steps

- Build the ZIP/category/audience intake form
- Add real event ingestion and matching logic
- Generate coupon codes and QR codes per campaign
- Track coupon claims and redemptions
- Add lead qualification for high-value local service businesses
- Replace demo metrics with persisted campaign analytics
