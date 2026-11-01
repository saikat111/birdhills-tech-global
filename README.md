# Bird Hills Tech · International & Global Platform (USD)

<div align="center">
  <img src="public/images/logo.svg" alt="Bird Hills Tech Global" width="280" height="auto" />
  <p><strong>Technology × Creative × Growth</strong></p>
  <p><em>Enterprise Web Engineering, Bespoke Software, Brand Architecture & Global Digital Growth Partner</em></p>
</div>

---

## Executive Overview

**Bird Hills Tech Global** ([birdhillstech.com](https://birdhillstech.com)) is a premier international technology, creative, and commercial growth company:
- **Global Inquiries:** contact@birdhillstech.com / support@birdhillstech.com
- **Hotline & WhatsApp:** +971 52 440 5785
- **Official Commercial Currency:** US Dollars (USD / $) · Worldwide Direct Invoicing

This repository contains the complete international corporate web platform and integrated administrative CMS engineered specifically for **global enterprise clients**. The platform features sub-second Core Web Vitals (< 0.8s LCP), global domain registration, multi-region edge cloud hosting, and transparent USD pricing tiers.

*(For the regional UAE / GCC platform in AED, see the [Bird Hills Tech UAE Platform](https://github.com/saikat111/birdhills-tech.git)).*

---

## Core Value Pillars & Standards

- **Technology ($1,250+):** Modern Next.js 16 architectures, React 19, TypeScript, bespoke web applications, enterprise portals, and cloud integrations built for sub-second Core Web Vitals and 100% intellectual property transfer.
- **Infrastructure ($9.99/mo+):** Top-level global domain registrations (.com, .ai, .io, .net, etc.), Anycast DNS, pure NVMe cloud edge servers, and high-deliverability business email (DKIM/SPF/DMARC).
- **Creative ($1,050+):** Prestigious corporate brand identity systems, vector logo design, multi-device UI/UX design systems, and high-converting ad creatives.
- **Growth ($760/mo+):** High-intent Google Ads, LinkedIn B2B targeting, AEO/GEO generative AI search optimization, and closed-loop CRM revenue attribution.

---

## Image & Asset Architecture

All visuals across the entire platform are **high-resolution locally generated 3D tech assets** stored directly in `public/images/generated/` (over 136 tailored visual assets). Zero external hotlinks (Unsplash, etc.) are used in production, guaranteeing:
- 100% privacy and zero third-party cookie/tracking exposure.
- Sub-second image load times via Next.js edge optimization.
- Consistent executive dark navy (`#070B14`, `#0B1730`) and gold (`#C59B27`, `#D4AF37`) visual identity.

---

## Tech Stack & Architecture

- **Framework:** Next.js 16 (App Router) with React 19 & Turbopack
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS v4 with custom executive tokens
- **Database & ORM:** MySQL (Hostinger Cloud) / SQLite with Prisma ORM 6
- **Security & Authentication:** `jose` (JWT HTTP-only encrypted session cookies) + `bcryptjs`
- **Email Dispatch:** Hostinger SMTP (`smtp.hostinger.com:465`)
- **Motion & Icons:** Framer Motion & Lucide React
- **Validation:** Zod schemas & server-side sanitization

---

## Repository Structure

```
birdhills-tech-global/
├── prisma/
│   ├── schema.prisma        # Relational database models
│   └── seed.ts              # Production database seed script (USD pricing)
├── public/
│   ├── images/
│   │   ├── logo.svg         # Primary dark navy corporate logo
│   │   ├── logo-white.svg   # Monochrome white logo
│   │   └── generated/       # 136+ locally generated 3D tech showcase assets
│   └── favicon.svg          # High-resolution vector favicon
├── src/
│   ├── app/
│   │   ├── page.tsx         # Corporate homepage (9 services, hero slider, SEO hub)
│   │   ├── about/           # Corporate story, engineering standards, leadership
│   │   ├── services/        # 9 Core Practice Areas + 74 Sub-Service Pages
│   │   ├── work/            # Portfolio showcase & case studies
│   │   ├── hosting/         # NVMe Cloud Hosting & Business Email (USD plans)
│   │   ├── domains/         # Global Domain Registry & Anycast DNS (USD pricing)
│   │   ├── pricing/         # Transparent Worldwide Corporate Invoicing (USD tiers)
│   │   ├── contact/         # Direct contact intake & consultation scheduler
│   │   ├── book-a-meeting/  # Multi-step executive consultation booking engine
│   │   ├── admin/           # Administrative CMS portal (leads, bookings, content, blog)
│   │   └── api/             # Secure REST API endpoints (contact, bookings, admin CRUD)
│   ├── components/
│   │   ├── common/          # Header, Footer, SubServiceDetailView, FaqAccordion
│   │   ├── home/            # HeroSection, ServicesSection, SeoKnowledgeTabs, ComparisonMatrix
│   │   ├── pricing/         # PricingCardsClient (USD retainers & tiers)
│   │   └── domains/         # DomainSearchClient (Global TLD lookup)
│   └── data/
│       └── services/        # Detailed metadata for all 74 individual sub-services
└── README.md
```

---

## Quick Start & Local Setup

### 1. Prerequisites
- Node.js 20+ (LTS recommended)
- npm

### 2. Installation
```bash
git clone https://github.com/saikat111/birdhills-tech-global.git
cd birdhills-tech-global
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.

---

## Admin CMS Credentials

The administrative control center is located at `/admin`:

- **URL:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Email:** `admin@birdhillstech.com`
- **Default Password:** `GlobalTech2026!`

---

## Currency & Invoicing Standards

- **UAE Platform (`birdhills-tech`):** Quoted and invoiced in **UAE Dirhams (AED)**.
- **Global Platform (`birdhills-tech-global`):** Quoted and invoiced in **US Dollars (USD / $)**.
