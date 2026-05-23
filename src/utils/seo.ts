import { companyInfo } from "@data/company";

export function getPageTitle(pageTitle: string, isHome = false): string {
  if (isHome) {
    return pageTitle;
  }
  return `${pageTitle} | ${companyInfo.name}`;
}

export const defaultSEO = {
  title: `${companyInfo.name} - Reforma e Manutenção de Caixas d'Água`,
  description: companyInfo.description,
  canonical: companyInfo.siteUrl,
  openGraph: {
    basic: {
      title: `${companyInfo.name} - Reforma e Manutenção de Caixas d'Água`,
      type: "website",
      image: `${companyInfo.siteUrl}/og-image.jpg`,
      url: companyInfo.siteUrl
    },
    optional: {
      locale: "pt_BR",
      siteName: companyInfo.name
    }
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.name} - Reforma e Manutenção de Caixas d'Água`,
    description: companyInfo.description,
    image: `${companyInfo.siteUrl}/og-image.jpg`
  }
};
