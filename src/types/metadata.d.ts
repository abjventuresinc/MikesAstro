export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string }>;
    creator?: string;
    publisher?: string;
    icons?: Record<string, unknown>;
    alternates?: { canonical?: string };
    openGraph?: {
      type?: string;
      locale?: string;
      url?: string;
      title?: string;
      description?: string;
      siteName?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      images?: string[];
      creator?: string;
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      googleBot?: Record<string, unknown>;
    };
    other?: Record<string, string>;
    [key: string]: any;
  }
  