// src/lib/seo-config.js
// Astro-compatible (plain JS) version of your original seo-config.ts
// - No TypeScript types
// - Same exports & structure
// - Dev URL defaults to Astro's port 4321

// Resolve base site URL for dev/prod
const MODE =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.MODE) ||
  process.env.NODE_ENV ||
  "development";
const IS_DEV =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.DEV) ||
  MODE === "development";

// Optional override via PUBLIC_SITE_URL; otherwise use sensible default per mode
const PUBLIC_SITE_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.PUBLIC_SITE_URL) ||
  process.env.PUBLIC_SITE_URL ||
  null;

// ⚠️ If you want to keep Next.js' 3000 in dev, change the dev URL below to http://localhost:3000
const DEFAULT_SITE_URL = IS_DEV ? "http://localhost:4321" : "https://mikesgaragedoorrepaircenter.com";

/**
 * @typedef {Object} SEOConfig
 * @property {string=} title
 * @property {string=} description
 * @property {string[]} keywords
 * @property {string} canonical
 * @property {string} ogImage
 * @property {'website'|'article'} ogType
 * @property {'summary'|'summary_large_image'} twitterCard
 * @property {boolean=} noIndex
 * @property {boolean=} noFollow
 * @property {string=} language
 * @property {string=} geoRegion
 * @property {string=} geoPosition
 * @property {string=} geoPlacename
 * @property {string=} author
 * @property {string=} publishedTime
 * @property {string=} modifiedTime
 * @property {string=} section
 * @property {string[]=} tags
 * @property {string=} linkedinTitle
 * @property {string=} linkedinDescription
 * @property {string=} linkedinImage
 * @property {string=} linkedinAuthor
 * @property {string=} facebookAppId
 * @property {string[]=} facebookAdmins
 * @property {string=} socialImage
 * @property {string=} socialTitle
 * @property {string=} socialDescription
 * @property {string=} articleSection
 * @property {string[]=} articleTag
 * @property {{name:string,url:string}[]=} breadcrumbs
 */

/**
 * @typedef {Object} SiteConfig
 * @property {string} name
 * @property {string} url
 * @property {string} description
 * @property {string} logo
 * @property {string} favicon
 * @property {string} themeColor
 * @property {string} author
 * @property {string} copyright
 * @property {Object} social
 * @property {Object} contact
 * @property {string} businessHours
 * @property {string[]} services
 * @property {{latitude:string,longitude:string}=} coordinates
 */

/*
Note from SEB: When doing the seo config make sure to change the url to match our website url this way the og image will reference the correct image on build
Remember on localhost the url will be http://localhost:3000 but in production it will be another one.
*/

export const siteConfig = {
  name: "Mike's Garage Door Repair Center",
  // Use PUBLIC_SITE_URL if set; otherwise default based on mode (Astro dev is 4321)
  url: PUBLIC_SITE_URL || DEFAULT_SITE_URL,
  description:
    "Top-rated garage door repair, installation, and maintenance services in Bedford, TX and surrounding areas. Fast, reliable service with 7 AM - 11 PM availability. Contact Mike's Garage Door Repair Center today!",
  logo: "/assets/config/logo.png",
  favicon: "/assets/config/favicon.ico",
  themeColor: "#5e86ea",
  author: "Mike's Garage Door Repair Center",
  copyright: "© 2024 Mike's Garage Door Repair Center. All rights reserved.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61572842862995",
    facebookAppId: undefined,
    twitter: "",
    twitterHandle: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    whatsapp: "",
    tiktok: "",
    pinterest: "",
    snapchat: "",
    telegram: "",
    nextdoor: "",
    yelp: "",
  },
  contact: {
    phone: "(817) 859-8877",
    email: "service@mikesgaragedoorrepaircenter.com",
    address: "1300 Airport Fwy",
    city: "Bedford",
    state: "TX",
    zipCode: "76022",
    country: "USA",
  },
  businessHours: "7:00 AM - 11:00 PM",
  services: [
    "Garage Door Installation",
    "Garage Door Repair",
    "Garage Door Maintenance",
    "Garage Door Openers",
    "Garage Door Replacement",
  ],
  coordinates: {
    latitude: "32.8440",
    longitude: "-97.1431",
  },
};

/** @type {Record<string, SEOConfig>} */
export const seoConfigs = {
  "/": {
    title: "Mike's Garage Door Repair Bedford TX | Same-Day Service",
    description:
      "Bedford's trusted garage door experts! Fast repairs, installation & 24/7 service. Serving Dallas-Fort Worth. Call (817) 859-8877 now!",
    keywords: [
      "garage door repair Bedford TX",
      "garage door installation Dallas Fort Worth",
      "emergency garage door service",
      "garage door opener repair",
      "24/7 garage door Bedford",
      "Mike's Garage Door Repair",
    ],
    canonical: `${siteConfig.url}/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Mike's Garage Door Repair Center - Bedford's Trusted Garage Door Experts",
    linkedinDescription:
      "Professional garage door repair, installation, and maintenance throughout Dallas-Fort Worth. Fast response, quality work, competitive pricing.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Mike's Garage Door Repair Center | Bedford TX Garage Door Experts",
    socialDescription:
      "Your garage door emergency? Our expertise. Fast repairs, professional installation, 7 AM - 11 PM service. Bedford's #1 choice!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Garage Door Services",
    breadcrumbs: [{ name: "Home", url: siteConfig.url }],
  },

  "/about/": {
    title: "About Mike's Garage Door Repair Bedford TX | Family-Owned",
    description:
      "Learn about Mike's Garage Door - Bedford's trusted experts since 2010. Family-owned & insured. Quality service you can count on!",
    keywords: [
      "about Mike's Garage Door",
      "Bedford TX garage door",
      "family-owned garage door company",
      "DFW garage door experts",
    ],
    canonical: `${siteConfig.url}/about/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "About Mike's Garage Door Repair Center - Family-Owned Excellence",
    linkedinDescription:
      "Discover our story, values, and commitment to providing exceptional garage door services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Meet the Team Behind Mike's Garage Door Repair Center",
    socialDescription:
      "Family-owned since 2010, serving Dallas-Fort Worth with professional garage door services.",
    socialImage: "/assets/config/logo.png",
    articleSection: "About Company",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "About", url: `${siteConfig.url}/about/` },
    ],
  },

  "/contact/": {
    title: "Contact Mike's Garage Door Repair Bedford TX | (817) 859-8877",
    description:
      "Get in touch with Mike's Garage Door in Bedford, TX. Available 7 AM - 11 PM. Fast quotes & emergency service. Call (817) 859-8877!",
    keywords: [
      "contact Mike's Garage Door",
      "Bedford TX garage door contact",
      "garage door quote",
      "emergency garage door service",
    ],
    canonical: `${siteConfig.url}/contact/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Contact Mike's Garage Door Repair Center - Fast, Reliable Service",
    linkedinDescription:
      "Ready for professional garage door service? Get in touch for a free quote and same-day service availability.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Get Your Free Garage Door Quote Today",
    socialDescription:
      "Expert garage door services in Bedford, TX and Dallas-Fort Worth. Contact us for immediate assistance.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Contact Information",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Contact", url: `${siteConfig.url}/contact/` },
    ],
  },

  "/service-areas/": {
    title: "Service Areas – Premier Garage Door Company Coverage | Mike's",
    description:
      "Leading garage door company serving 20+ Dallas-Fort Worth cities including Southlake, Colleyville, Grapevine, Keller & more. Find expert service in your area today.",
    keywords: [
      "garage door company Dallas Fort Worth",
      "service areas DFW",
      "garage door service cities",
      "Southlake TX",
      "Colleyville TX",
      "Grapevine TX",
    ],
    canonical: `${siteConfig.url}/service-areas/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Service Areas – Trusted Garage Door Company in 20+ DFW Cities",
    linkedinDescription:
      "Expert garage door company providing professional service across Dallas-Fort Worth metroplex. Find reliable installation and repair in your city.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Find Your Local Garage Door Company in DFW",
    socialDescription:
      "Premier garage door company serving 20+ cities across Dallas-Fort Worth with expert installation, repair and maintenance. Locate your area now.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Service Areas",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Service Areas", url: `${siteConfig.url}/service-areas/` },
    ],
  },

  "/services/": {
    title: "Garage Door Services Bedford TX | Mike's Garage Door Repair",
    description:
      "Expert garage door installation, repair, maintenance & replacement services in Bedford & DFW. Licensed technicians, same-day service, 100% satisfaction guarantee. Call (817) 859-8877!",
    keywords: [
      "garage door services Bedford TX",
      "installation",
      "repair",
      "maintenance",
      "replacement",
      "DFW garage door",
    ],
    canonical: `${siteConfig.url}/services/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services/` },
    ],
  },

  "/garage-door-services/": {
    title: "Garage Door Services Bedford TX | Installation & Repair",
    description:
      "Comprehensive garage door services including installation, repair, maintenance, openers, and replacement. Expert service for residential and commercial properties. Contact us today for a free consultation!",
    keywords: ["garage door services", "installation", "repair", "maintenance", "openers", "replacement"],
    canonical: `${siteConfig.url}/garage-door-services/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Our Services - Complete Garage Door Solutions",
    linkedinDescription:
      "Professional garage door installation, repair, maintenance, and replacement services. Expert technicians and quality service.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Professional Garage Door Services",
    socialDescription:
      "Complete garage door solutions for residential and commercial properties. Get expert service today!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
    ],
  },

  "/blog/": {
    title: "Garage Door Blog | Expert Tips & Guides | Mike's Bedford TX",
    description:
      "Expert garage door blog from Mike's Garage Door Repair Center. Maintenance tips, installation guides, repair advice & industry insights for Bedford & Dallas-Fort Worth. Read now!",
    keywords: [
      "garage door blog Bedford TX",
      "maintenance tips",
      "installation guide",
      "garage door advice",
      "DFW garage door tips",
    ],
    canonical: `${siteConfig.url}/blog/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Garage Door Blog - Expert Tips from Mike's Garage Door",
    linkedinDescription:
      "Stay informed with our comprehensive blog featuring garage door maintenance tips, installation guides, and expert advice for Dallas-Fort Worth homeowners.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Expert Tips & Industry Insights",
    socialDescription:
      "Read our latest articles on garage door maintenance, installation tips, and expert advice.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Blog",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog/` },
    ],
  },

  "/portfolio/": {
    title: "Garage Door Portfolio Gallery Bedford TX | Mike's",
    description:
      "View our garage door installation, repair & replacement projects across Dallas-Fort Worth. Real results from Bedford, Arlington & more!",
    keywords: [
      "garage door portfolio",
      "project gallery Bedford TX",
      "before after garage doors",
      "DFW garage door projects",
      "Mike's portfolio",
    ],
    canonical: `${siteConfig.url}/portfolio/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Portfolio - Mike's Garage Door Projects Across DFW",
    linkedinDescription:
      "View our completed garage door projects showcasing professional installation, repair, and replacement services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Our Portfolio - Real Garage Door Projects in DFW",
    socialDescription:
      "Explore our completed garage door projects across Dallas-Fort Worth. Professional installation, repair, and replacement.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Portfolio",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Portfolio", url: `${siteConfig.url}/portfolio/` },
    ],
  },

  "/faq/": {
    title: "Garage Door FAQ Bedford TX | Questions Answered | Mike's",
    description:
      "Get answers to 25+ common garage door questions for Bedford & Dallas-Fort Worth. Installation, repair, maintenance, costs & more. Expert advice from Mike's! Call (817) 859-8877",
    keywords: [
      "garage door FAQ Bedford TX",
      "garage door questions DFW",
      "garage door answers",
      "installation FAQ",
      "repair questions",
    ],
    canonical: `${siteConfig.url}/faq/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "FAQ - Garage Door Questions Answered by Experts",
    linkedinDescription:
      "Get answers to common questions about garage door installation, repair, and maintenance services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "FAQ - Your Garage Door Questions Answered",
    socialDescription:
      "Find answers to 25+ frequently asked questions about garage door services in Bedford and Dallas-Fort Worth.",
    socialImage: "/assets/config/logo.png",
    articleSection: "FAQ",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "FAQ", url: `${siteConfig.url}/faq/` },
    ],
  },

  "/terms/": {
    title: "Terms and Conditions | Mike's Garage Door Repair Center",
    description:
      "Read our terms and conditions for garage door services in Bedford, TX and Dallas-Fort Worth. Service agreements, warranties, and policies.",
    keywords: [
      "terms and conditions",
      "service agreement",
      "garage door terms",
      "warranty Bedford TX",
      "Mike's policies",
    ],
    canonical: `${siteConfig.url}/terms/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Terms & Conditions - Garage Door Services",
    linkedinDescription:
      "Terms and conditions for our professional garage door services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Terms & Conditions - Garage Door Services",
    socialDescription:
      "Service terms and conditions for our garage door services across Dallas-Fort Worth.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Legal",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Terms & Conditions", url: `${siteConfig.url}/terms/` },
    ],
  },

  "/privacy-policy/": {
    title: "Privacy Policy | Mike's Garage Door Bedford TX",
    description:
      "Privacy Policy for Mike's Garage Door. Learn how we protect your personal information in Dallas-Fort Worth. Read our privacy policy today!",
    keywords: [
      "privacy policy",
      "data protection",
      "personal information privacy",
      "Mike's Garage Door privacy",
      "Bedford TX",
    ],
    canonical: `${siteConfig.url}/privacy-policy/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Privacy Policy - Garage Door Services",
    linkedinDescription:
      "Learn how we protect your privacy and personal information when using our garage door services.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Privacy Policy - Data Protection & Privacy Rights",
    socialDescription:
      "Our commitment to protecting your privacy and personal information.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Legal",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy/` },
    ],
  },

  "/about-us/": {
    title: "About Mike's Garage Door Repair Bedford TX | Family-Owned",
    description:
      "Discover Mike's story - Bedford's premier garage door specialists since 2010. Family-owned with expert technicians & commitment to excellence!",
    keywords: [
      "about Mike's Garage Door",
      "Bedford TX garage door",
      "family-owned garage door company",
      "DFW garage door experts",
    ],
    canonical: `${siteConfig.url}/about-us/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle:
      "About Mike's Garage Door Repair Center - Family-Owned Excellence",
    linkedinDescription:
      "Discover our story, values, and commitment to providing exceptional garage door services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Meet the Team Behind Mike's Garage Door Repair Center",
    socialDescription:
      "Family-owned since 2010, serving Dallas-Fort Worth with professional garage door services.",
    socialImage: "/assets/config/logo.png",
    articleSection: "About Company",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "About Us", url: `${siteConfig.url}/about-us/` },
    ],
  },

  "/contact-us/": {
    title:
      "Contact Us Bedford TX | Mike's Garage Door (817) 859-8877",
    description:
      "Reach out to Mike's Garage Door in Bedford, TX. Available 7 AM - 11 PM. Fast quotes & emergency service. Call (817) 859-8877!",
    keywords: [
      "contact Mike's Garage Door",
      "Bedford TX garage door contact",
      "garage door quote",
      "emergency garage door service",
    ],
    canonical: `${siteConfig.url}/contact-us/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle:
      "Contact Mike's Garage Door Repair Center - Fast, Reliable Service",
    linkedinDescription:
      "Ready for professional garage door service? Get in touch for a free quote and same-day service availability.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Get Your Free Garage Door Quote Today",
    socialDescription:
      "Expert garage door services in Bedford, TX and Dallas-Fort Worth. Contact us for immediate assistance.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Contact Information",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Contact Us", url: `${siteConfig.url}/contact-us/` },
    ],
  },

  "/terms-and-conditions/": {
    title: "Terms and Conditions | Mike's Garage Door Repair Center",
    description:
      "View our terms and conditions for garage door services in Bedford, TX and Dallas-Fort Worth. Service agreements, warranties, and policies for Mike's Garage Door Repair Center.",
    keywords: [
      "terms and conditions",
      "service agreement",
      "garage door terms",
      "warranty Bedford TX",
      "Mike's policies",
    ],
    canonical: `${siteConfig.url}/terms-and-conditions/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Terms & Conditions - Mike's Garage Door Services",
    linkedinDescription:
      "Terms and conditions for our professional garage door services across Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Terms & Conditions",
    socialDescription:
      "Service terms and conditions for Mike's Garage Door Repair Center.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Legal",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Terms & Conditions", url: `${siteConfig.url}/terms-and-conditions/` },
    ],
  },

  "/services/garage-door-installation/": {
    title:
      "Garage Door Installation Services | Mike's Garage Door Bedford TX",
    description:
      "Professional garage door installation in Bedford & Dallas-Fort Worth. Residential & commercial. Custom designs, expert installation. Call (817) 859-8877!",
    keywords: [
      "garage door installation",
      "new garage door Bedford TX",
      "residential installation",
      "commercial installation",
    ],
    canonical: `${siteConfig.url}/services/garage-door-installation/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Professional Garage Door Installation Services",
    linkedinDescription:
      "Expert garage door installation for residential and commercial properties in Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Garage Door Installation Services",
    socialDescription:
      "Professional garage door installation in Bedford and Dallas-Fort Worth.",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Installation",
        url: `${siteConfig.url}/services/garage-door-installation/`,
      },
    ],
  },

  "/services/residential-garage-door-repair/": {
    title:
      "Residential Garage Door Repair Dallas-Fort Worth | Mike's Garage Door",
    description:
      "Expert residential garage door repair in Dallas-Fort Worth. Same-day service for broken springs, cables, openers & more. Family-focused, trusted service. Call (817) 859-8877!",
    keywords: [
      "residential garage door repair",
      "home garage door repair DFW",
      "same-day repair",
      "Bedford TX",
    ],
    canonical: `${siteConfig.url}/services/residential-garage-door-repair/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Residential Garage Door Repair Services",
    linkedinDescription:
      "Fast, professional residential garage door repair across Dallas-Fort Worth. Same-day service available.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Residential Garage Door Repair DFW",
    socialDescription:
      "Same-day residential garage door repair in Dallas-Fort Worth. Call now!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Residential Repair",
        url: `${siteConfig.url}/services/residential-garage-door-repair/`,
      },
    ],
  },

  "/services/commercial-garage-door-repair/": {
    title:
      "Commercial Garage Door Repair Dallas-Fort Worth | Mike's Garage Door",
    description:
      "Commercial garage door repair in Dallas-Fort Worth. Industrial doors, loading docks, high-cycle systems. Fast service, minimal downtime. Call (817) 859-8877!",
    keywords: [
      "commercial garage door repair",
      "industrial door repair DFW",
      "loading dock repair",
      "business garage door",
    ],
    canonical: `${siteConfig.url}/services/commercial-garage-door-repair/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Commercial Garage Door Repair Services",
    linkedinDescription:
      "Fast commercial garage door repair minimizing business downtime. Industrial-grade solutions for DFW businesses.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Commercial Garage Door Repair DFW",
    socialDescription:
      "Industrial garage door repair with minimal downtime. Call for fast service!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Commercial Repair",
        url: `${siteConfig.url}/services/commercial-garage-door-repair/`,
      },
    ],
  },

  "/services/emergency-garage-door-repair/": {
    title:
      "Emergency Garage Door Repair Bedford TX | 24/7 Service | Broken Springs",
    description:
      "24/7 emergency garage door repair in Bedford & DFW. Broken springs, cables, tracks, panels & openers. Under 60-min response time. Licensed & insured. Call (817) 859-8877 now!",
    keywords: [
      "emergency garage door repair",
      "24/7 garage door Bedford",
      "broken spring repair",
      "urgent garage door service",
    ],
    canonical: `${siteConfig.url}/services/emergency-garage-door-repair/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "24/7 Emergency Garage Door Repair Service",
    linkedinDescription:
      "Fast emergency garage door repair across Dallas-Fort Worth. Available 24/7 for urgent repairs.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Emergency Garage Door Repair 24/7",
    socialDescription: "Urgent garage door repair available now. Call for immediate service!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Emergency Repair",
        url: `${siteConfig.url}/services/emergency-garage-door-repair/`,
      },
    ],
  },

  "/garage-door-installation/": {
    title: "Garage Door Installation Bedford TX | Mike's Garage Door",
    description:
      "Transform your home with expert garage door installation in Bedford & Dallas-Fort Worth. Steel, wood, glass & custom designs. Free consultation & lifetime warranty. Call (817) 859-8877!",
    keywords: [
      "garage door installation Bedford TX",
      "new garage door DFW",
      "residential installation",
      "commercial installation",
    ],
    canonical: `${siteConfig.url}/garage-door-installation/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Garage Door Installation Services - Mike's Garage Door",
    linkedinDescription:
      "Professional garage door installation for residential and commercial properties in Dallas-Fort Worth.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Expert Garage Door Installation in Bedford TX",
    socialDescription:
      "Steel, wood, glass & custom garage door installations. Free consultation!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Installation", url: `${siteConfig.url}/garage-door-installation/` },
    ],
  },

  "/garage-door-repair/": {
    title: "Garage Door Repair Bedford TX | 24/7 Emergency Service",
    description:
      "24/7 emergency garage door repair in Bedford & DFW. Broken springs, cables, tracks, panels & openers. Under 60-min response time. Licensed & insured. Call (817) 859-8877 now!",
    keywords: [
      "emergency garage door repair Bedford",
      "broken spring repair",
      "24/7 garage door service",
      "same-day repair DFW",
    ],
    canonical: `${siteConfig.url}/garage-door-repair/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle:
      "24/7 Emergency Garage Door Repair - Mike's Garage Door",
    linkedinDescription:
      "Fast emergency garage door repair across Dallas-Fort Worth. Broken springs, cables, and more.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Emergency Garage Door Repair 24/7",
    socialDescription:
      "Broken garage door? Call now for immediate repair service!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Repair", url: `${siteConfig.url}/garage-door-repair/` },
    ],
  },

  "/garage-door-maintenance/": {
    title:
      "Garage Door Maintenance Bedford TX | Tune-Ups & Inspections",
    description:
      "Professional garage door maintenance in Bedford & DFW. Extend door life, prevent breakdowns with our 25-point inspection. Maintenance plans available. Call (817) 859-8877!",
    keywords: [
      "garage door maintenance Bedford",
      "tune-up service",
      "preventive maintenance DFW",
      "garage door inspection",
    ],
    canonical: `${siteConfig.url}/garage-door-maintenance/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle:
      "Garage Door Maintenance Services - Mike's Garage Door",
    linkedinDescription:
      "Professional maintenance services to extend garage door life and prevent costly repairs.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Garage Door Maintenance & Tune-Ups",
    socialDescription:
      "Prevent breakdowns with professional maintenance. 25-point inspection!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Maintenance", url: `${siteConfig.url}/garage-door-maintenance/` },
    ],
  },

  "/garage-door-openers/": {
    title:
      "Garage Door Openers Bedford TX | Smart Openers & Installation",
    description:
      "Professional garage door opener installation & repair in Bedford & DFW. Smart openers, belt drive, chain drive & screw drive. Wi-Fi enabled. Call (817) 859-8877!",
    keywords: [
      "smart garage door opener Bedford",
      "LiftMaster installation",
      "garage door opener repair DFW",
      "Wi-Fi garage door",
    ],
    canonical: `${siteConfig.url}/garage-door-openers/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Garage Door Opener Services - Mike's Garage Door",
    linkedinDescription:
      "Expert garage door opener installation and repair. Smart technology, all major brands.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Smart Garage Door Openers Installation",
    socialDescription:
      "Wi-Fi enabled smart openers. Control your garage from anywhere!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Openers", url: `${siteConfig.url}/garage-door-openers/` },
    ],
  },

  "/garage-door-replacement/": {
    title: "Garage Door Replacement Bedford TX | 94% ROI | Mike's",
    description:
      "Garage door replacement in Bedford & DFW with 94% ROI. Steel, wood, glass & insulated doors. Boost curb appeal & home value. Call (817) 859-8877!",
    keywords: [
      "garage door replacement Bedford",
      "new garage door ROI",
      "door replacement DFW",
      "home improvement",
    ],
    canonical: `${siteConfig.url}/garage-door-replacement/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    linkedinTitle: "Garage Door Replacement Services - Mike's Garage Door",
    linkedinDescription:
      "Professional garage door replacement with 94% ROI. Increase your home's value and curb appeal.",
    linkedinImage: "/assets/config/logo.png",
    linkedinAuthor: "Mike's Garage Door Repair Center",
    facebookAppId: siteConfig.social.facebookAppId,
    socialTitle: "Garage Door Replacement - 94% ROI",
    socialDescription:
      "Replace your garage door and boost home value. Free estimate!",
    socialImage: "/assets/config/logo.png",
    articleSection: "Services",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Replacement", url: `${siteConfig.url}/garage-door-replacement/` },
    ],
  },

  "/emergency-garage-door-service/": {
    title: "Emergency Garage Door Service Bedford TX | 24/7 Repairs",
    description:
      "24/7 emergency garage door service in Bedford & DFW. Fast response, expert repairs, same-day service. Licensed technicians available now. Call (817) 859-8877!",
    keywords: [
      "emergency garage door service",
      "24/7 garage door repair",
      "urgent garage door Bedford TX",
      "same-day garage door service",
    ],
    canonical: `${siteConfig.url}/emergency-garage-door-service/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Emergency Service",
        url: `${siteConfig.url}/emergency-garage-door-service/`,
      },
    ],
  },

  "/tune-up-inspection/": {
    title: "Garage Door Tune-Up & Inspection Bedford TX | Mike's",
    description:
      "Professional garage door tune-up & 21-point inspection in Bedford & DFW. Keep your door running smoothly & safely. Call (817) 859-8877!",
    keywords: [
      "garage door tune-up",
      "garage door inspection",
      "maintenance service Bedford TX",
      "Mike's Garage Door tune-up",
    ],
    canonical: `${siteConfig.url}/tune-up-inspection/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Tune-Up & Inspection", url: `${siteConfig.url}/tune-up-inspection/` },
    ],
  },

  "/lubrication-balancing/": {
    title: "Garage Door Lubrication & Balancing Bedford TX",
    description:
      "Professional lubrication & balancing service in Bedford & DFW. Reduce noise, extend life & improve door performance. Expert service. Call (817) 859-8877!",
    keywords: [
      "garage door lubrication",
      "door balancing Bedford TX",
      "maintenance service DFW",
      "Mike's Garage Door lubrication",
    ],
    canonical: `${siteConfig.url}/lubrication-balancing/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      { name: "Lubrication & Balancing", url: `${siteConfig.url}/lubrication-balancing/` },
    ],
  },

  "/preventive-maintenance/": {
    title: "Preventive Maintenance Plans Bedford TX",
    description:
      "Annual & seasonal preventive maintenance plans in Bedford & DFW. Prevent breakdowns & extend door life. Priority service. Call (817) 859-8877!",
    keywords: [
      "garage door maintenance plans",
      "preventive maintenance Bedford TX",
      "annual service DFW",
      "Mike's maintenance plans",
    ],
    canonical: `${siteConfig.url}/preventive-maintenance/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8440;-97.1431",
    geoPlacename: "Bedford, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/garage-door-services/` },
      {
        name: "Preventive Maintenance Plans",
        url: `${siteConfig.url}/preventive-maintenance/`,
      },
    ],
  },

  "/highland-village-tx/": {
    title: "Garage Door Services Highland Village TX | Mike's Garage Door",
    description:
      "Professional garage door repair, installation, and maintenance in Highland Village, TX. Expert service with same-day repairs available. Call (817) 859-8877!",
    keywords: [
      "garage door Highland Village TX",
      "Highland Village garage door repair",
      "garage door installation Highland Village",
      "Mike's Garage Door Highland Village",
    ],
    canonical: `${siteConfig.url}/highland-village-tx/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "33.1801;-97.0464",
    geoPlacename: "Highland Village, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Service Areas", url: `${siteConfig.url}/service-areas/` },
      { name: "Highland Village, TX", url: `${siteConfig.url}/highland-village-tx/` },
    ],
  },

  "/watauga-tx/": {
    title: "Garage Door Services Watauga TX | Mike's Garage Door Repair",
    description:
      "Expert garage door repair, installation, and maintenance services in Watauga, TX. Fast response times and quality workmanship. Call (817) 859-8877 today!",
    keywords: [
      "garage door Watauga TX",
      "Watauga garage door repair",
      "garage door installation Watauga",
      "Mike's Garage Door Watauga",
    ],
    canonical: `${siteConfig.url}/watauga-tx/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.8579;-97.2548",
    geoPlacename: "Watauga, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Service Areas", url: `${siteConfig.url}/service-areas/` },
      { name: "Watauga, TX", url: `${siteConfig.url}/watauga-tx/` },
    ],
  },

  "/cedar-hill-tx/": {
    title: "Garage Door Services Cedar Hill TX | Mike's Garage Door Repair",
    description:
      "Professional garage door repair, installation, and maintenance in Cedar Hill, TX. Licensed technicians with 24/7 emergency service. Call (817) 859-8877!",
    keywords: [
      "garage door Cedar Hill TX",
      "Cedar Hill garage door repair",
      "garage door installation Cedar Hill",
      "Mike's Garage Door Cedar Hill",
    ],
    canonical: `${siteConfig.url}/cedar-hill-tx/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.5885;-96.9561",
    geoPlacename: "Cedar Hill, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Service Areas", url: `${siteConfig.url}/service-areas/` },
      { name: "Cedar Hill, TX", url: `${siteConfig.url}/cedar-hill-tx/` },
    ],
  },

  "/richardson-tx/": {
    title: "Garage Door Services Richardson TX | Mike's Garage Door Repair",
    description:
      "Expert garage door repair, installation, and maintenance services in Richardson, TX. Fast response times and quality workmanship. Call (817) 859-8877 today!",
    keywords: [
      "garage door Richardson TX",
      "Richardson garage door repair",
      "garage door installation Richardson",
      "Mike's Garage Door Richardson",
    ],
    canonical: `${siteConfig.url}/richardson-tx/`,
    ogImage: "/assets/config/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    language: "en-US",
    geoRegion: "US-TX",
    geoPosition: "32.9482;-96.7297",
    geoPlacename: "Richardson, TX",
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Service Areas", url: `${siteConfig.url}/service-areas/` },
      { name: "Richardson, TX", url: `${siteConfig.url}/richardson-tx/` },
    ],
  },
};

export const defaultSEO = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["garage door repair", "garage door installation", "Bedford TX", "Dallas-Fort Worth"],
  canonical: siteConfig.url,
  ogImage: `${siteConfig.url}/assets/config/logo.png`,
  ogType: "website",
  twitterCard: "summary_large_image",
  language: "en-US",
  linkedinTitle: siteConfig.name,
  linkedinDescription: siteConfig.description,
  linkedinImage: `${siteConfig.url}/assets/config/logo.png`,
  linkedinAuthor: siteConfig.author,
  facebookAppId: siteConfig.social.facebookAppId,
  socialTitle: siteConfig.name,
  socialDescription: siteConfig.description,
  socialImage: `${siteConfig.url}/assets/config/logo.png`,
  articleSection: "General",
  breadcrumbs: [{ name: "Home", url: siteConfig.url }],
};

/**
 * Return SEO config for a given pathname (normalized to trailing slash).
 * @param {string} pathname
 * @returns {SEOConfig}
 */
export function getSEOConfig(pathname) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return seoConfigs[normalizedPath] || defaultSEO;
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Support",
      areaServed: siteConfig.contact.country,
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.zipCode,
      addressCountry: siteConfig.contact.country,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.zipCode,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    openingHours: siteConfig.businessHours,
    areaServed: {
      "@type": "City",
      name: siteConfig.contact.city,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getServiceSchema(pathname) {
  const seoConfig = getSEOConfig(pathname);

  // Map pathnames to service types
  const serviceMap = {
    service1: "Service One",
    service2: "Service Two",
    service3: "Service Three",
    service4: "Service Four",
  };

  const serviceType = serviceMap[pathname];
  if (!serviceType) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceType} Services`,
    description: seoConfig.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.state,
        postalCode: siteConfig.contact.zipCode,
        addressCountry: siteConfig.contact.country,
      },
      areaServed: [
        "Sausalito",
        "Mill Valley",
        "Tiburon",
        "Belvedere",
        "Corte Madera",
        "Larkspur",
        "Kentfield",
        "Ross",
        "San Anselmo",
        "San Rafael",
        "Paradise Cay",
        "Strawberry",
        "Marin City",
        "Greenbrae",
        "Tamalpais Valley",
        "Muir Beach",
        "Golden Gate Heights",
        "Sea Cliff",
        "Presidio Heights",
        "Pacific Heights",
      ],
      url: seoConfig.canonical,
    },
    serviceType: serviceType,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.8591,
        longitude: -122.4853,
      },
      geoRadius: "50000",
    },
    offers: {
      "@type": "Offer",
      description: `Professional ${serviceType.toLowerCase()} services with free consultation`,
      priceCurrency: "USD",
    },
  };
}

/**
 * ONLY for actual business location pages (not generic service areas).
 * @param {{name:string,state:string,description:string,latitude?:string,longitude?:string,servicesOffered?:string[],isBusinessLocation?:boolean}} cityData
 */
export function getCityLocalBusinessSchema(cityData) {
  if (!cityData.isBusinessLocation) return null;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} - ${cityData.name}, ${cityData.state}`,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description:
      cityData.description || `Professional services in ${cityData.name}, ${cityData.state}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressRegion: cityData.state,
      addressCountry: "USA",
    },
    ...(cityData.latitude &&
      cityData.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: cityData.latitude,
          longitude: cityData.longitude,
        },
      }),
    openingHours: siteConfig.businessHours,
    areaServed: {
      "@type": "City",
      name: cityData.name,
      addressRegion: cityData.state,
      addressCountry: "USA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in ${cityData.name}`,
      itemListElement: (cityData.servicesOffered || siteConfig.services).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: {
            "@type": "City",
            name: cityData.name,
          },
        },
      })),
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
    },
  };
}

/**
 * Use this for cities that are service areas (NOT the main business location).
 * @param {{name:string,state:string,description:string,latitude?:string,longitude?:string}} cityData
 */
export function getCityPlaceSchema(cityData) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${cityData.name}, ${cityData.state}`,
    description:
      cityData.description || `${siteConfig.name} serves ${cityData.name}, ${cityData.state}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityData.name,
      addressRegion: cityData.state,
      addressCountry: "USA",
    },
    ...(cityData.latitude &&
      cityData.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: cityData.latitude,
          longitude: cityData.longitude,
        },
      }),
    additionalType: "City",
  };
}

/**
 * Things to do: returns [City/Place schema, ItemList schema].
 * @param {{
 *  cityName:string,state:string,description:string,url:string,
 *  latitude?:number,longitude?:number,
 *  attractions:Array<{name:string,address:string,description:string,type:string,category:string,mapUrl?:string}>,
 *  totalAttractions?:number
 * }} thingsToDoData
 */
export function getThingsToDoSchema(thingsToDoData) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "City",
      name: `${thingsToDoData.cityName}`,
      description: thingsToDoData.description,
      url: thingsToDoData.url,
      address: {
        "@type": "PostalAddress",
        addressLocality: thingsToDoData.cityName,
        addressRegion: thingsToDoData.state,
        addressCountry: "USA",
      },
      ...(thingsToDoData.latitude &&
        thingsToDoData.longitude && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: thingsToDoData.latitude,
            longitude: thingsToDoData.longitude,
          },
        }),
      containedInPlace: {
        "@type": "State",
        name: thingsToDoData.state,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Things to Do in ${thingsToDoData.cityName}, ${thingsToDoData.state}`,
      description: `Top attractions and activities in ${thingsToDoData.cityName}`,
      numberOfItems:
        thingsToDoData.totalAttractions || thingsToDoData.attractions.length,
      itemListElement: thingsToDoData.attractions.map((attraction, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Place",
          name: attraction.name,
          description: attraction.description,
          address: {
            "@type": "PostalAddress",
            streetAddress: attraction.address,
            addressLocality: thingsToDoData.cityName,
            addressRegion: thingsToDoData.state,
            addressCountry: "USA",
          },
          additionalType: attraction.type,
          ...(attraction.mapUrl && {
            hasMap: attraction.mapUrl,
          }),
        },
      })),
    },
  ];
}

/**
 * Flexible Service page schema.
 * @param {{name:string,description:string,url:string,category?:string,price?:string,serviceType?:string,areaServed?:string[]}} serviceData
 */
export function getServicePageSchema(serviceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    url: serviceData.url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.state,
        postalCode: siteConfig.contact.zipCode,
        addressCountry: siteConfig.contact.country,
      },
      areaServed:
        serviceData.areaServed || [
          {
            "@type": "City",
            name: siteConfig.contact.city,
            addressRegion: siteConfig.contact.state,
          },
        ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "100",
      },
    },
    serviceType: serviceData.serviceType || serviceData.category || serviceData.name,
    category: serviceData.category,
    areaServed:
      serviceData.areaServed || [
        {
          "@type": "City",
          name: siteConfig.contact.city,
          addressRegion: siteConfig.contact.state,
        },
      ],
    offers: {
      "@type": "Offer",
      description: `Professional ${serviceData.name.toLowerCase()} with free consultation`,
      priceCurrency: "USD",
      price: serviceData.price || "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        price: serviceData.price || "0",
      },
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().split("T")[0],
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    image: `${siteConfig.url}${siteConfig.logo}`,
  };
}

/**
 * Article schema for blog posts.
 * @param {{
 *  title:string,slug:string,excerpt:string,content:string,
 *  author:{name:string,title:string,avatar:string},
 *  publishedAt:string,updatedAt:string,featuredImage:string,
 *  category:string,tags:string[],readTime:string,
 *  seo:{metaTitle:string,metaDescription:string,keywords:string}
 * }} postData
 */
export function getArticleSchema(postData) {
  const baseUrl = siteConfig.url;
  const articleUrl = `${baseUrl}/${postData.category
    .toLowerCase()
    .replace(/\s+/g, "-")}/${postData.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: postData.seo.metaTitle || postData.title,
    description: postData.seo.metaDescription || postData.excerpt,
    image: postData.featuredImage ? `${baseUrl}${postData.featuredImage}` : undefined,
    author: {
      "@type": "Person",
      name: postData.author.name,
      jobTitle: postData.author.title,
      image: postData.author.avatar ? `${baseUrl}${postData.author.avatar}` : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: postData.publishedAt,
    dateModified: postData.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    articleSection: postData.category,
    keywords: postData.seo.keywords || postData.tags.join(", "),
    wordCount: postData.content.split(" ").length,
    timeRequired: postData.readTime,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: `${baseUrl}/blog`,
    },
  };
}

/**
 * HowTo schema for instructional posts.
 * @param {{
 *  title:string,slug:string,excerpt:string,content:string,category:string,
 *  publishedAt:string,featuredImage?:string,
 *  steps?:Array<{name:string,text:string,image?:string}>
 * }} postData
 */
export function getHowToSchema(postData) {
  const baseUrl = siteConfig.url;
  const articleUrl = `${baseUrl}/${postData.category
    .toLowerCase()
    .replace(/\s+/g, "-")}/${postData.slug}`;

  const steps = postData.steps || [];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: postData.title,
    description: postData.excerpt,
    image: postData.featuredImage ? `${baseUrl}${postData.featuredImage}` : undefined,
    url: articleUrl,
    datePublished: postData.publishedAt,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: `${baseUrl}${step.image}` }),
    })),
    totalTime: "PT30M",
    supply: [],
    tool: [],
  };
}

/**
 * FAQ schema for FAQ pages.
 * @param {{questions:Array<{question:string,answer:string}>}} faqData
 */
export function getFAQSchema(faqData) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Portfolio schema (simple WebPage variant).
 * @param {{name:string,description:string,url:string,projects:Array}} portfolioData
 */
export function getPortfolioSchema(portfolioData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: portfolioData.name,
    description: portfolioData.description,
    url: portfolioData.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.logo}`,
    },
  };
}

/**
 * HomeAndConstructionBusiness schema for homepage.
 */
export function getHomeAndConstructionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      postalCode: siteConfig.contact.zipCode,
      addressCountry: siteConfig.contact.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "34.0522",
      longitude: "-118.2437",
    },
    openingHours: siteConfig.businessHours,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
    },
    areaServed: siteConfig.services.map(() => ({
      "@type": "City",
      name: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: siteConfig.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

/**
 * Breadcrumb schema generator.
 * @param {{name:string,url:string}[]} breadcrumbs
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
