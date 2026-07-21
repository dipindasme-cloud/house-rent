export const SITE_CONFIG = {
  brand: {
    name: "AuraSpace",
    tagline: "Redefining Indian Luxury Living",
    description: "Premium real estate crafted for the discerning Indian homeowner.",
  },
  locale: {
    lang: "en-IN",
    currency: {
      code: "INR",
      symbol: "₹",
      locale: "en-IN",
    },
    measurement: {
      unit: "sq. ft.",
      area: "sq. ft.",
    },
    notation: {
      lakh: "Lakh",
      crore: "Crore",
      thousand: "Thousand",
      bhk: "BHK",
    },
  },
  contact: {
    phone: {
      display: "+91 1800 123 4567",
      raw: "+9118001234567",
      countryCode: "+91",
    },
    email: "info@auraspace.in",
    address: {
      line1: "42, Lotus Tower",
      line2: "Andheri East",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400093",
      country: "India",
    },
    social: {
      instagram: "https://instagram.com/auraspace",
      facebook: "https://facebook.com/auraspace",
      youtube: "https://youtube.com/@auraspace",
    },
  },
  seo: {
    title: "AuraSpace — Premium Indian Real Estate",
    description:
      "Discover luxury homes, villas, and apartments across India's top metros. AuraSpace brings you handpicked properties with unparalleled craftsmanship.",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
