import { prisma } from "./prisma";

export interface SiteSettings {
  site_title: string;
  site_description: string;
  site_keywords: string;
  google_indexing: string;
  company_name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  working_hours: string;
  linkedin_url: string;
  twitter_url: string;
  instagram_url: string;
  github_url: string;
  facebook_url: string;
  youtube_url: string;
  ai_bot_name: string;
  ai_welcome_message: string;
  ai_qualification_notes: string;
  lead_notification_email: string;
  [key: string]: string;
}

export const defaultSettings: SiteSettings = {
  site_title: "Bird Hills Tech | Global Enterprise Software & Web Engineering",
  site_description:
    "Bird Hills Tech engineers high-performance web applications, enterprise cloud hosting, AI business automation, and scalable digital architectures for global businesses.",
  site_keywords:
    "Enterprise Software Engineering, Next.js Web Development, Global Cloud Hosting, AI Automation, Enterprise Digital Marketing, International SEO, Headless Commerce, Bird Hills Tech",
  google_indexing: "enabled", // enabled for search engine crawling
  company_name: "Bird Hills Tech Global",
  tagline: "Global Enterprise Software & Digital Architecture",
  address: "Global Delivery Hubs: Dubai · London · Singapore · Remote Engineering Worldwide",
  phone: "+971 52 440 5785",
  whatsapp: "+971 52 440 5785",
  email: "contact@birdhillstech.com",
  website: "https://birdhillstech.com",
  working_hours: "24/7 Global Client Support & Worldwide Engineering Operations",
  linkedin_url: "https://linkedin.com/company/birdhillstech",
  twitter_url: "https://twitter.com/birdhillstech",
  instagram_url: "https://instagram.com/birdhillstech",
  github_url: "https://github.com/saikat111/birdhills-tech-global",
  facebook_url: "https://facebook.com/birdhillstech",
  youtube_url: "https://youtube.com/@birdhillstech",
  ai_bot_name: "Bird Hills Global AI",
  ai_welcome_message: "Welcome to Bird Hills Tech Global. Tell us what software or web platform you are building.",
  ai_qualification_notes:
    "Prioritize enterprise project scope, target timeline, commercial budget (in USD), and international deployment requirements.",
  lead_notification_email: "birdhillstech@gmail.com",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const records = await prisma.siteSetting.findMany();
    const map: Record<string, string> = { ...defaultSettings };
    records.forEach((r) => {
      if (r.value !== undefined && r.value !== null) {
        map[r.key] = r.value;
      }
    });
    return map as SiteSettings;
  } catch (err) {
    console.error("Error fetching site settings from DB:", err);
    return defaultSettings;
  }
}
