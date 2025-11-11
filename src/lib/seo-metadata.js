// src/lib/seo-metadata.js
// Astro-compatible version of your Next.js SEO helpers (pure JS).
// - No TypeScript-only syntax
// - Same function names & behavior
// - Safe defaults to avoid runtime errors

import {
  getSEOConfig,
  siteConfig,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebsiteSchema,
  getServiceSchema,
  getArticleSchema,
  getCityLocalBusinessSchema,
  getCityPlaceSchema,
  getServicePageSchema,
  getThingsToDoSchema,
  getFAQSchema,
  getHomeAndConstructionSchema,
  getPortfolioSchema,
} from "./seo-config.js";

/**
 * @typedef {Object} Metadata
 * @property {string=} title
 * @property {string=} description
 * @property {string[]=} keywords
 * @property {{ name: string }[]=} authors
 * @property {string=} creator
 * @property {string=} publisher
 * @property {Object=} icons
 * @property {{ canonical?: string }=} alternates
 * @property {Object=} openGraph
 * @property {('website'|'article'|string)=} openGraph.type
 * @property {string=} openGraph.locale
 * @property {string=} openGraph.url
 * @property {string=} openGraph.title
 * @property {string=} openGraph.description
 * @property {string=} openGraph.siteName
 * @property {{ url: string, width?: number, height?: number, alt?: string }[]=} openGraph.images
 * @property {Object=} twitter
 * @property {('summary'|'summary_large_image'|string)=} twitter.card
 * @property {string=} twitter.title
 * @property {string=} twitter.description
 * @property {string[]=} twitter.images
 * @property {string=} twitter.creator
 * @property {Object=} robots
 * @property {boolean=} robots.index
 * @property {boolean=} robots.follow
 * @property {Object=} robots.googleBot
 * @property {Object<string,string>=} other
 */

/**
 * Truncate meta description to a maximum length (default: 160).
 * @param {string} description
 * @param {number} [maxLength=160]
 * @returns {string}
 */
export function truncateDescription(description, maxLength = 160) {
  if (!description) return "";
  if (description.length <= maxLength) return description;

  const truncated = description.substring(0, maxLength - 3);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > maxLength - 23) {
    return truncated.substring(0, lastSpaceIndex) + "...";
  }
  return truncated + "...";
}

/**
 * Generate absolute OG image URL with fallbacks.
 * Priority: custom > seo config > default
 * @param {string=} customImage
 * @param {string=} seoImage
 * @param {string} [defaultImage='og.png']
 * @returns {string}
 */
export function generateOGImageUrl(customImage, seoImage, defaultImage = "og.png") {
  const base = siteConfig?.url || "";
  const imageUrl = customImage || seoImage || `${base}/${defaultImage}`;

  if (imageUrl.startsWith("/")) return `${base}${imageUrl}`;
  if (imageUrl.startsWith("http")) return imageUrl;
  return `${base}/${imageUrl}`;
}

/**
 * Generate Metadata object from SEO config.
 * Mirrors your Next.js function but works in Astro.
 * @param {string} pathname
 * @returns {Metadata}
 */
export function generateMetadataFromConfig(pathname) {
  try {
    const seo = getSEOConfig(pathname) || {};

    const description = truncateDescription(seo.description || "", 160);

    /** @type {Metadata} */
    const metadata = {
      title: seo.title,
      description,
      keywords: seo.keywords,
      authors: seo.author ? [{ name: seo.author }] : [{ name: siteConfig?.author || siteConfig?.name || "" }],
      creator: siteConfig?.author || siteConfig?.name,
      publisher: siteConfig?.name,

      icons: {
        icon: [
          { url: "/favicon.ico", sizes: "any" },
          { url: "/assets/config/favicon.ico", sizes: "any" },
          { url: "/assets/config/logo.png", sizes: "32x32", type: "image/png" },
          { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/favicon.ico",
      },

      alternates: {
        canonical: seo.canonical,
      },

      openGraph: {
        type: seo.ogType || "website",
        locale: seo.language || "en_US",
        url: seo.canonical,
        title: seo.socialTitle || seo.title,
        description: truncateDescription(seo.socialDescription || seo.description || "", 160),
        siteName: siteConfig?.name,
        images: [
          {
            url: generateOGImageUrl(seo.socialImage, seo.ogImage),
            width: 1200,
            height: 630,
            alt: seo.description || `${siteConfig?.name || ""} - ${seo.title || ""}`,
          },
        ],
      },

      twitter: {
        card: seo.twitterCard || "summary_large_image",
        title: seo.socialTitle || seo.title,
        description: truncateDescription(seo.socialDescription || seo.description || "", 160),
        images: [generateOGImageUrl(seo.socialImage, seo.ogImage)],
        creator: siteConfig?.social?.twitterHandle ? `@${siteConfig.social.twitterHandle}` : undefined,
      },

      robots: {
        index: !seo.noIndex,
        follow: !seo.noFollow,
        googleBot: {
          index: !seo.noIndex,
          follow: !seo.noFollow,
          "max-video-preview": -1,
          "max-image-preview": "large", // (no TS "as const" here)
          "max-snippet": -1,
        },
      },

      other: {
        "meta:title": seo.title || siteConfig?.name || "",
        "geo.region": seo.geoRegion || "US-ST",
        "geo.position": seo.geoPosition || "40.7128;-74.0060",
        "geo.placename": seo.geoPlacename || "Example City, ST",
      },
    };

    // Optional networks
    if (seo.linkedinTitle) {
      metadata.linkedin = {
        title: seo.linkedinTitle,
        description: seo.linkedinDescription,
        image: generateOGImageUrl(seo.linkedinImage, seo.ogImage),
      };
    }

    if (seo.facebookAppId) {
      metadata.facebook = {
        appId: seo.facebookAppId,
      };
    }

    return metadata;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error generating metadata:", error);
    return {
      title: siteConfig?.name,
      description: siteConfig?.description,
      openGraph: {
        title: siteConfig?.name,
        description: siteConfig?.description,
        images: [`${siteConfig?.url || ""}/assets/config/og.png`],
      },
    };
  }
}

/**
 * Generate structured data scripts for a page.
 * @param {string=} pathname
 * @param {{ blogPostData?: any }=} additionalData
 * @returns {{ id: string, type: 'application/ld+json', children: string }[]}
 */
export function generateStructuredData(pathname, additionalData) {
  const schemas = [getWebsiteSchema()];

  if (pathname) {
    const serviceSchema = getServiceSchema(pathname);
    if (serviceSchema) schemas.push(serviceSchema);
  }

  if (additionalData?.blogPostData) {
    const articleSchema = getArticleSchema(additionalData.blogPostData);
    if (articleSchema) schemas.push(articleSchema);
  }

  return schemas.map((schema, index) => ({
    id: `schema-${index}`,
    type: "application/ld+json",
    children: JSON.stringify(schema, null, 2),
  }));
}

/**
 * Generate custom metadata with overrides.
 * @param {string} pathname
 * @param {Partial<Metadata>=} overrides
 * @returns {Metadata}
 */
export function generateCustomMetadata(pathname, overrides = {}) {
  const baseMetadata = generateMetadataFromConfig(pathname) || {};
  return {
    ...baseMetadata,
    ...overrides,
    openGraph: {
      ...(baseMetadata.openGraph || {}),
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...(baseMetadata.twitter || {}),
      ...(overrides.twitter || {}),
    },
  };
}

/**
 * Generate metadata for dynamic routes (blog posts, city pages, etc.).
 * @param {string} pathname
 * @param {{
 *   title: string;
 *   description: string;
 *   content?: string;
 *   publishedTime?: string;
 *   modifiedTime?: string;
 *   author?: string;
 *   tags?: string[];
 *   image?: string;
 *   keywords?: string[];
 * }} dynamicData
 * @returns {Metadata}
 */
export function generateDynamicMetadata(pathname, dynamicData) {
  const seo = getSEOConfig(pathname) || {};

  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const canonicalUrl = `${siteConfig?.url || ""}${normalizedPath}`;

  const keywords = dynamicData.keywords || seo.keywords || [];
  const description = truncateDescription(dynamicData.description || "", 160);

  return {
    title: dynamicData.title,
    description,
    keywords,
    authors: dynamicData.author
      ? [{ name: dynamicData.author }]
      : [{ name: siteConfig?.author || siteConfig?.name || "" }],
    creator: siteConfig?.author || siteConfig?.name,
    publisher: siteConfig?.name,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      locale: seo.language || "en_US",
      url: canonicalUrl,
      title: dynamicData.title,
      description,
      siteName: siteConfig?.name,
      images: [
        {
          url: generateOGImageUrl(dynamicData.image, seo.ogImage),
          width: 1200,
          height: 630,
          alt: dynamicData.description || `${siteConfig?.name || ""} - ${dynamicData.title}`,
        },
      ],
      ...(dynamicData.publishedTime && { publishedTime: dynamicData.publishedTime }),
      ...(dynamicData.modifiedTime && { modifiedTime: dynamicData.modifiedTime }),
      ...(dynamicData.author && { authors: [dynamicData.author] }),
      ...(dynamicData.tags && { tags: dynamicData.tags }),
    },

    twitter: {
      card: "summary_large_image",
      title: dynamicData.title,
      description,
      images: [generateOGImageUrl(dynamicData.image, seo.ogImage)],
      creator: siteConfig?.social?.twitterHandle ? `@${siteConfig.social.twitterHandle}` : undefined,
    },

    robots: {
      index: !seo.noIndex,
      follow: !seo.noFollow,
      googleBot: {
        index: !seo.noIndex,
        follow: !seo.noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    other: {
      "meta:title": dynamicData.title,
    },
  };
}

/**
 * Generate structured data for dynamic pages.
 * @param {string} pathname
 * @param {{
 *   blogPostData?: any;
 *   cityData?: {
 *     name: string;
 *     state: string;
 *     description: string;
 *     latitude?: string;
 *     longitude?: string;
 *     servicesOffered?: string[];
 *     isBusinessLocation?: boolean;
 *   };
 *   serviceData?: {
 *     name: string;
 *     description: string;
 *     url: string;
 *     category?: string;
 *     price?: string;
 *     serviceType?: string;
 *     areaServed?: string[];
 *   };
 *   thingsToDoData?: {
 *     cityName: string;
 *     state: string;
 *     description: string;
 *     url: string;
 *     latitude?: number;
 *     longitude?: number;
 *     attractions: Array<{
 *       name: string;
 *       address: string;
 *       description: string;
 *       type: string;
 *       category: string;
 *       mapUrl?: string;
 *     }>;
 *     totalAttractions?: number;
 *   };
 *   faqData?: {
 *     questions: Array<{ question: string; answer: string }>;
 *   };
 *   portfolioData?: {
 *     name: string;
 *     description: string;
 *     url: string;
 *     projects: Array<{
 *       id: number;
 *       title: string;
 *       category: string;
 *       image: string;
 *       date?: string;
 *       location?: string;
 *       description: string;
 *     }>;
 *   };
 *   isHomepage?: boolean;
 *   breadcrumbs?: Array<{ name: string; url: string }>;
 * }=} pageData
 * @returns {{ id: string, type: 'application/ld+json', children: string }[]}
 */
export function generateDynamicStructuredData(pathname, pageData) {
  const schemas = [];

  if (pageData?.isHomepage) {
    // Homepage: Website + LocalBusiness + HomeAndConstructionBusiness
    schemas.push(getWebsiteSchema());
    schemas.push(getLocalBusinessSchema());
    schemas.push(getHomeAndConstructionSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else if (pageData?.blogPostData) {
    // Blog posts: Article + Organization + Breadcrumbs
    const articleSchema = getArticleSchema(pageData.blogPostData);
    if (articleSchema) schemas.push(articleSchema);

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }

    schemas.push(getOrganizationSchema());
  } else if (pageData?.cityData) {
    // City pages: LocalBusiness OR Place + Website + Breadcrumbs
    if (pageData.cityData.isBusinessLocation) {
      const cityBusinessSchema = getCityLocalBusinessSchema(pageData.cityData);
      if (cityBusinessSchema) schemas.push(cityBusinessSchema);
    } else {
      const cityPlaceSchema = getCityPlaceSchema(pageData.cityData);
      if (cityPlaceSchema) schemas.push(cityPlaceSchema);
    }

    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else if (pageData?.serviceData) {
    // Service pages: Service + Website + Breadcrumbs
    const serviceSchema = getServicePageSchema(pageData.serviceData);
    if (serviceSchema) schemas.push(serviceSchema);

    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else if (pageData?.thingsToDoData) {
    // Things to do: City/Place + ItemList + Website + Breadcrumbs
    const thingsToDoSchemas = getThingsToDoSchema(pageData.thingsToDoData) || [];
    schemas.push(...thingsToDoSchemas);

    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else if (pageData?.faqData) {
    // FAQ
    const faqSchema = getFAQSchema(pageData.faqData);
    if (faqSchema) schemas.push(faqSchema);

    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else if (pageData?.portfolioData) {
    // Portfolio: CollectionPage / ItemList + Website + Breadcrumbs
    const portfolioSchema = getPortfolioSchema(pageData.portfolioData);
    if (portfolioSchema) schemas.push(portfolioSchema);

    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  } else {
    // Default: Website (+ optional breadcrumbs)
    schemas.push(getWebsiteSchema());

    if (pageData?.breadcrumbs?.length) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: pageData.breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      });
    }
  }

  return schemas.map((schema, index) => ({
    id: `schema-${index}`,
    type: "application/ld+json",
    children: JSON.stringify(schema, null, 2),
  }));
}
