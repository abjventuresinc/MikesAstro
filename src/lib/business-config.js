/**
 * Business Configuration - Single Source of Truth
 * Astro-compatible (plain JS) version
 */

// ==========================================
// BUSINESS INFORMATION
// ==========================================
export const BUSINESS_INFO = {
  name: "Mike's Garage Door Repair Center",
  websiteUrl: "https://mikesgaragedoorrepaircenter.com",
  tone: "Professional",
  logo: "/assets/config/logo.png",
  logoUrl: "",
  primaryKeyword: "Garage Door Repair Bedford TX",
  ctaText: "Contact us today for fast and reliable garage door repair services!",
};

// ==========================================
// BUSINESS CATEGORIES
// ==========================================
export const BUSINESS_CATEGORIES = {
  primary: "Garage Door Service",
  secondary: [
    "Garage Door Repair",
    "Garage Door Installation",
    "Home Services",
    "Contractor"
  ],
};

// ==========================================
// CORE SERVICES
// ==========================================
export const CORE_SERVICES = [
  {
    name: "Garage Door Installation",
    url: "/garage-door-installation/",
    subServices: [
      { name: "Residential Garage Door Installation", url: "/residential-garage-door-installation/" },
      { name: "Commercial Garage Door Installation", url: "/commercial-garage-door-installation/" },
      { name: "Custom Garage Door Design", url: "/custom-garage-doors/" }
    ],
  },
  {
    name: "Garage Door Repair",
    url: "/garage-door-repair/",
    subServices: [
      { name: "Broken Spring Repair", url: "/broken-spring-replacement/" },
      { name: "Cable Replacement", url: "/garage-door-cable-repair/" },
      { name: "Track Alignment", url: "/track-alignment/" },
      { name: "Panel Replacement", url: "/panel-replacement/" },
      { name: "Emergency Garage Door Repair", url: "/emergency-garage-door-service/" }
    ],
  },
  {
    name: "Garage Door Maintenance",
    url: "/garage-door-maintenance/",
    subServices: [
      { name: "Tune-Up and Inspection", url: "/tune-up-inspection/" },
      { name: "Lubrication and Balancing", url: "/lubrication-balancing/" },
      { name: "Preventive Maintenance Plans", url: "/preventive-maintenance/" }
    ],
  },
  {
    name: "Garage Door Openers",
    url: "/garage-door-openers/",
    subServices: [
      { name: "Opener Installation", url: "/opener-installation/" },
      { name: "Opener Repair", url: "/garage-door-opener-repair/" },
      { name: "Smart Garage Door Openers", url: "/smart-garage-door-openers/" }
    ],
  },
  {
    name: "Garage Door Replacement",
    url: "/garage-door-replacement/",
    subServices: [
      { name: "Steel Garage Doors", url: "/steel-garage-doors/" },
      { name: "Wooden Garage Doors", url: "/wooden-garage-doors/" },
      { name: "Glass & Aluminum Garage Doors", url: "/glass-aluminum-garage-doors/" },
      { name: "Insulated Garage Doors", url: "/insulated-garage-doors/" }
    ],
  }
];

// Flattened arrays for quick access
export const CORE_SERVICE_NAMES = CORE_SERVICES.map(s => s.name);
export const CORE_SERVICE_URLS = CORE_SERVICES.map(s => s.url);

// All services including sub-services
export const ALL_SERVICES = CORE_SERVICES.flatMap(service => [
  { name: service.name, url: service.url },
  ...(service.subServices || []),
]);

// ==========================================
// SERVICE AREAS / LOCATIONS
// ==========================================
export const LOCATIONS = [
  { city: "Southlake", state: "TX", url: "/southlake-tx/" },
  { city: "Colleyville", state: "TX", url: "/colleyville-tx/" },
  { city: "Grapevine", state: "TX", url: "/grapevine-tx/" },
  { city: "Keller", state: "TX", url: "/keller-tx/" },
  { city: "Flower Mound", state: "TX", url: "/flower-mound-tx/" },
  { city: "Coppell", state: "TX", url: "/coppell-tx/" },
  { city: "Trophy Club", state: "TX", url: "/trophy-club-tx/" },
  { city: "Westlake", state: "TX", url: "/westlake-tx/" },
  { city: "North Richland Hills", state: "TX", url: "/north-richland-hills-tx/" },
  { city: "Hurst", state: "TX", url: "/hurst-tx/" },
  { city: "Euless", state: "TX", url: "/euless-tx/" },
  { city: "Arlington", state: "TX", url: "/arlington-tx/" },
  { city: "Mansfield", state: "TX", url: "/mansfield-tx/" },
  { city: "Irving", state: "TX", url: "/irving-tx/" },
  { city: "Carrollton", state: "TX", url: "/carrollton-tx/" },
  { city: "Lewisville", state: "TX", url: "/lewisville-tx/" },
  { city: "Plano", state: "TX", url: "/plano-tx/" },
  { city: "Frisco", state: "TX", url: "/frisco-tx/" },
  { city: "McKinney", state: "TX", url: "/mckinney-tx/" },
  { city: "Fort Worth", state: "TX", url: "/fort-worth-tx/" }
];

// Helper to get top locations (first 4)
export const TOP_LOCATIONS = LOCATIONS.slice(0, 4);

// Helper to format location string
export const formatLocation = (location) => 
  `${location.city}, ${location.state}`;

// ==========================================
// CONTACT INFORMATION
// ==========================================
export const CONTACT = {
  address: "1300 Airport Fwy, Bedford, TX 76022",
  street: "1300 Airport Fwy",
  city: "Bedford",
  state: "TX",
  zip: "76022",
  areaCode: "817",
  phone: "817-859-8877",
  email: "service@mikesgaragedoorrepaircenter.com",
  addressVisibility: "VISIBLE",
};

// ==========================================
// BUSINESS HOURS
// ==========================================
export const BUSINESS_HOURS = {
  monday: "7:00 AM - 11:00 PM",
  tuesday: "7:00 AM - 11:00 PM",
  wednesday: "7:00 AM - 11:00 PM",
  thursday: "7:00 AM - 11:00 PM",
  friday: "7:00 AM - 11:00 PM",
  saturday: "7:00 AM - 11:00 PM",
  sunday: "7:00 AM - 11:00 PM",
};

// Helper to format business hours for schema
export const BUSINESS_HOURS_SCHEMA = "Mo-Su 07:00-23:00";

// ==========================================
// GOOGLE MAPS
// ==========================================
export const GOOGLE_MAPS = {
  shortLink: "https://maps.app.goo.gl/example",
  fullUrl: "https://www.google.com/maps/place/1300+Airport+Fwy,+Bedford,+TX+76022/@32.8352205,-97.14944,17z/data=!3m1!4b1!4m6!3m5!1s0x864e7f1bb951d05f:0xef405454645052dd!8m2!3d32.8352205!4d-97.14944!16s%2Fg%2F11c0k8x8x8",
  embedCode: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9873.244186054428!2d-97.14943995754501!3d32.83522051758718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7f1bb951d05f%3A0xef405454645052dd!2s1300%20Airport%20Fwy%2C%20Bedford%2C%20TX%2076022!5e1!3m2!1sen!2sus!4v1761588852083!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  latitude: "32.8352205",
  longitude: "-97.14944",
};

// ==========================================
// SOCIAL MEDIA
// ==========================================
export const SOCIAL_MEDIA = {
  facebook: "https://www.facebook.com/profile.php?id=61572842862995",
  twitter: "",
  linkedin: "",
  instagram: ""
};

// Filter out undefined social media links
export const ACTIVE_SOCIAL_MEDIA = Object.entries(SOCIAL_MEDIA)
  .filter(([, url]) => url)
  .reduce((acc, [key, url]) => ({ ...acc, [key]: url }), {});

// ==========================================
// BLOG TOPICS
// ==========================================
export const BLOG_TOPICS = [
  "Garage Door Maintenance Tips",
  "Choosing the Right Garage Door",
  "Emergency Garage Door Repair Advice",
  "Benefits of Custom Garage Doors",
  "Smart Garage Door Openers Guide"
];

// ==========================================
// META INFORMATION
// ==========================================
export const META = {
  title: "Mike's Garage Door Repair Center - Garage Door Services in Bedford, TX",
  description: "Top-rated garage door repair, installation, and maintenance services in Bedford, TX and surrounding areas. Contact Mike's Garage Door Repair Center today!",
  keywords: "garage door repair, garage door installation, emergency garage door repair, custom garage doors, Bedford TX garage services",
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get services formatted for navigation/footer
 */
export const getServicesForNavigation = () => {
  return CORE_SERVICES.map(service => ({
    name: service.name,
    href: service.url,
  }));
};

/**
 * Get locations formatted for navigation/footer
 */
export const getLocationsForNavigation = (limit) => {
  const locs = limit ? LOCATIONS.slice(0, limit) : LOCATIONS;
  return locs.map(location => ({
    name: formatLocation(location),
    href: location.url || `/${location.city.toLowerCase().replace(/\s+/g, '-')}-${location.state.toLowerCase()}/`,
  }));
};

/**
 * Get company links for footer/navigation
 */
export const getCompanyLinks = () => [
  { name: "About Us", href: "/about/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact/" },
  { name: "Portfolio", href: "/portfolio/" },
  { name: "Service Areas", href: "/service-areas/" },
];

/**
 * Get legal links for footer
 */
export const getLegalLinks = () => [
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms & Conditions", href: "/terms/" },
];

