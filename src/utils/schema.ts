import { companyInfo } from "@data/company";

/**
 * Generates JSON-LD for LocalBusiness
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyInfo.siteUrl}/#organization`,
    "name": companyInfo.name,
    "legalName": companyInfo.legalName,
    "alternateName": companyInfo.alternateName,
    "url": companyInfo.siteUrl,
    "logo": companyInfo.logoUrl,
    "image": companyInfo.logoUrl,
    "telephone": companyInfo.phone,
    "email": companyInfo.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyInfo.address.street}, ${companyInfo.address.number}`,
      "addressLocality": companyInfo.address.city,
      "addressRegion": companyInfo.address.state,
      "postalCode": companyInfo.address.zipCode,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyInfo.geo.latitude,
      "longitude": companyInfo.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      companyInfo.facebook,
      companyInfo.instagram,
      companyInfo.twitter
    ]
  };
}

/**
 * Generates JSON-LD for a specific Service
 */
export function getServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": companyInfo.name,
      "telephone": companyInfo.phone,
      "url": companyInfo.siteUrl,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": companyInfo.address.city,
        "addressRegion": companyInfo.address.state,
        "addressCountry": "BR"
      }
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Belo Horizonte"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Contagem"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Betim"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Nova Lima"
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

/**
 * Generates JSON-LD for Breadcrumbs
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generates JSON-LD for FAQ Page
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
