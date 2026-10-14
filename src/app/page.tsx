import React from "react";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/settings";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechEcosystemSection from "@/components/home/TechEcosystemSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import { ComparisonMatrixSection } from "@/components/home/ComparisonMatrixSection";
import IndustryVerticalsSection from "@/components/home/IndustryVerticalsSection";
import ProcessSection from "@/components/home/ProcessSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import SeoKnowledgeTabs from "@/components/home/SeoKnowledgeTabs";
import GlobalPresenceSection from "@/components/home/GlobalPresenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AiCapabilitySection from "@/components/home/AiCapabilitySection";
import FaqAccordion, { FaqItem } from "@/components/common/FaqAccordion";
import FinalCtaSection from "@/components/home/FinalCtaSection";

// Revalidate page cache periodically for high performance and live CMS updates
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const canonicalUrl = "https://birdhillstech.com";
  return {
    title: settings.site_title || "Bird Hills Tech | Global Enterprise Software & Digital Architecture",
    description:
      settings.site_description ||
      "Enterprise web engineering, scalable cloud infrastructure, custom software development, and AI business automation for organizations worldwide.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: settings.site_title,
      description: settings.site_description,
      url: canonicalUrl,
      siteName: "Bird Hills Tech Global",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: settings.site_title,
      description: settings.site_description,
    },
  };
}

const DEFAULT_HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "Why should our company invest in custom Next.js web development over WordPress?",
    answer:
      "Next.js delivers lightning-fast page loads, zero runtime bloat, and enterprise security that traditional templates cannot match. In competitive markets, a slow platform directly burns marketing capital. Furthermore, our builds guarantee full intellectual property and source code ownership with zero dependency on third-party plugin licensing.",
    category: "Technology",
  },
  {
    question: "How does Bird Hills Tech guarantee industry-leading website performance?",
    answer:
      "We engineer every page with strict performance budgets using modern server-side rendering (SSR), image optimization, and low-latency global edge caching across 300+ cities. We eliminate unoptimized third-party tracking bloat and compile type-safe TypeScript directly into lean, edge-cached bundles.",
    category: "Technology",
  },
  {
    question: "Can you help our business dominate organic search and generative AI search?",
    answer:
      "Yes. Our search practice manages the entire lifecycle: technical schema markup, entity optimization for ChatGPT Search, Perplexity AI, and Google AI Overviews, high-intent commercial keywords, and multi-region search visibility.",
    category: "Marketing",
  },
  {
    question: "How do your digital marketing services ensure commercial ROI rather than vanity metrics?",
    answer:
      "Unlike agencies that report superficial clicks and impressions, our growth practice tracks closed-loop revenue pipeline. We focus on high-intent commercial keywords and decision-makers on Google, LinkedIn, and Meta, tying every dollar directly to verified CRM opportunities and Customer Acquisition Cost (CAC) targets.",
    category: "Marketing",
  },
  {
    question: "Do we own 100% of the code, designs, and database upon project completion?",
    answer:
      "Absolutely. We operate with a strict zero-vendor-lock-in policy. Upon final milestone sign-off, full intellectual property, Figma design systems, database schemas, and Git code repositories are permanently transferred to your organization.",
    category: "General",
  },
  {
    question: "What is your typical project timeline from kickoff to production launch?",
    answer:
      "Standard corporate web platforms are delivered within 2 to 4 weeks through structured discovery, prototyping, and engineering sprints. Custom SaaS portals, multi-language enterprise web applications, and customer portals typically require 4 to 8 weeks with dedicated weekly sprint demonstrations.",
    category: "General",
  },
  {
    question: "Where are your servers located, and is our corporate data secure?",
    answer:
      "We provide low-latency cloud infrastructure deployed across multi-region Tier-3/Tier-4 edge nodes (US East/West, Europe, Asia-Pacific, Middle East), guaranteeing 99.99% uptime and full alignment with international data security best practices (GDPR, SOC-2).",
    category: "Infrastructure",
  },
  {
    question: "Can we schedule a discovery consultation?",
    answer:
      "Yes. You can schedule a strategy session directly through our website scheduler or message our senior team on WhatsApp (+971 52 440 5785). Consultations are conducted via secure video conference across all global time zones.",
    category: "General",
  },
];

export default async function HomePage() {
  // Fetch dynamic content from Prisma database
  let settingsMap: Record<string, string> = {};
  let projects: any[] = [];
  let testimonials: any[] = [];
  let faqs: FaqItem[] = DEFAULT_HOMEPAGE_FAQS;

  try {
    const settings = await prisma.siteSetting.findMany();
    settings.forEach((s) => {
      settingsMap[s.key] = s.value;
    });

    projects = await prisma.project.findMany({
      where: { status: "published" },
      orderBy: { featured: "desc" },
      take: 6,
    });

    testimonials = await prisma.testimonial.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      take: 6,
    });

    const dbFaqs = await prisma.fAQ.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      take: 8,
    });

    if (dbFaqs && dbFaqs.length > 0) {
      faqs = dbFaqs.map((f) => ({
        question: f.question,
        answer: f.answer,
        category: f.category || "General",
      }));
    }
  } catch (err) {
    console.error("Database fetch error on homepage:", err);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 01 — HERO (AUTO-SLIDER) */}
      <HeroSection
        eyebrow={settingsMap["hero_eyebrow"]}
        headline={settingsMap["hero_headline"]}
        subcopy={settingsMap["hero_subcopy"]}
      />

      {/* SECTION 02 — TRUST */}
      <TrustSection
        headline={settingsMap["trust_headline"]}
        statement={settingsMap["trust_statement"]}
      />

      {/* SECTION 03 — SERVICES WITH DIRECT ACTIONS */}
      <ServicesSection />

      {/* SECTION 04 — TECH STACK & ECOSYSTEM */}
      <TechEcosystemSection />

      {/* SECTION 05 — WHY BIRD HILLS TECH */}
      <WhyUsSection />

      {/* SECTION 06 — COMPARISON MATRIX: TRADITIONAL VS BIRD HILLS TECH (NEW) */}
      <ComparisonMatrixSection />

      {/* SECTION 07 — REGIONAL INDUSTRY VERTICALS */}
      <IndustryVerticalsSection />

      {/* SECTION 08 — PROCESS ROADMAP */}
      <ProcessSection />

      {/* SECTION 09 — SELECTED WORK */}
      <SelectedWorkSection projects={projects} />

      {/* SECTION 10 — SEO KNOWLEDGE & TECHNICAL PILLARS TAB HUB (NEW) */}
      <SeoKnowledgeTabs />

      {/* SECTION 11 — GLOBAL DELIVERY HUBS & STRATEGIC PRESENCE */}
      <GlobalPresenceSection />

      {/* SECTION 12 — CLIENT TESTIMONIALS (AUTO-SLIDER) */}
      <TestimonialsSection testimonials={testimonials} />

      {/* SECTION 13 — AI CAPABILITY */}
      <AiCapabilitySection />

      {/* SECTION 14 — HOMEPAGE FAQ ACCORDION WITH SCHEMA MARKUP (NEW) */}
      <FaqAccordion
        items={faqs}
        title="Frequently Asked Questions"
        eyebrow="DIRECT ANSWERS & TRANSPARENCY"
        description="Clear, authoritative answers to help your leadership team evaluate technical architecture, timelines, commercial agreements, and enterprise SLA support."
        theme="light"
        includeSchema={true}
      />

      {/* SECTION 15 — FINAL CTA */}
      <FinalCtaSection />
    </div>
  );
}
