/**
 * Every SEO string the site publishes, in one place.
 *
 * Titles and descriptions are the only copy Google is guaranteed to show, so
 * they are treated as content — reviewable here without opening five pages.
 *
 * The keywords the client supplied per page are NOT emitted as a
 * `<meta name="keywords">` tag: Google dropped that signal in 2009 and Bing
 * treats a stuffed one as spam. They are woven into the title and description
 * below instead, which is where they actually carry weight.
 */

import { address, email, instagram, phone, whatsapp } from "./contact";

/** Canonical origin. No trailing slash — every URL is built by joining onto it. */
export const siteUrl = "https://www.energia-riojana.com.ar";

export const siteName = "Energía Riojana S.A.";

/** Used when a page forgets to declare its own. Should never be the one shown. */
export const defaultDescription =
  "Energía Riojana S.A. desarrolla energía solar y renovable en La Rioja: kits para el hogar, sistemas para pymes e industria, y obras de infraestructura eléctrica.";

/**
 * Titles stay under ~60 characters — past that Google truncates and the brand
 * at the end is the first thing to disappear.
 */
interface PageSeo {
  title: string;
  description: string;
  /** Client-supplied focus terms. Documentation for whoever edits the copy. */
  keywords: string[];
}

export const pageSeo = {
  home: {
    title: "Energía solar y renovable en La Rioja | Energía Riojana",
    description:
      "Aprovechamos el sol riojano para llevar energía renovable y sustentable a cada rincón de La Rioja. Sistemas on grid y off grid con autonomía y garantía.",
    keywords: [
      "Energía Renovable",
      "Sustentable",
      "Sol riojano",
      "La Rioja",
      "Autonomía",
      "Garantía",
    ],
  },
  institucional: {
    title: "Quiénes somos | Energía Riojana S.A.",
    description:
      "Somos una empresa riojana que lidera la transición energética de la provincia. Capacidad técnica, actitud, compromiso social y calidad en cada proyecto.",
    keywords: ["Capacidad", "Actitud", "Compromiso", "Calidad"],
  },
  productos: {
    title: "Kits solares para hogar, pymes e industria | Energía Riojana",
    description:
      "Kits solares fotovoltaicos para el hogar, sistemas on grid para comercios y parques solares para industria y agro. Instalación, garantía y asesoramiento.",
    keywords: [
      "Kits solares",
      "Paneles solares",
      "Sistemas on grid",
      "Sistemas off grid",
      "Energía solar para empresas",
      "Autonomía",
      "Garantía",
    ],
  },
  proyectos: {
    title: "Obras y proyectos solares en La Rioja | Energía Riojana",
    description:
      "Parques solares, líneas de alta y media tensión, iluminación pública y sistemas aislados. Capacidad, compromiso, calidad y garantía en cada obra.",
    keywords: ["Capacidad", "Compromiso", "Calidad", "Garantía"],
  },
  contacto: {
    title: "Contacto y presupuestos | Energía Riojana S.A.",
    description:
      "Escribinos para tu proyecto de energía renovable en La Rioja. Convertí el sol riojano en autonomía energética: pedí tu presupuesto sin cargo.",
    keywords: ["Energía Renovable", "Sol riojano", "La Rioja", "Autonomía"],
  },
} satisfies Record<string, PageSeo>;

/**
 * Organization + LocalBusiness in a single node.
 *
 * ERSA has a street address, a landline and public hours of operation, so it
 * qualifies as a LocalBusiness — that is what feeds the Google panel for
 * "energía solar La Rioja". Every value is read from the contact module so the
 * schema can never drift from what the footer renders.
 */
export function organizationSchema(logoUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    alternateName: "ERSA",
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    description: defaultDescription,
    telephone: phone.label,
    email: email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: "La Rioja",
      addressRegion: "La Rioja",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "State",
      name: "La Rioja, Argentina",
    },
    sameAs: [instagram.href, whatsapp.href],
    knowsAbout: [
      "Energía solar fotovoltaica",
      "Sistemas on grid",
      "Sistemas off grid",
      "Parques solares",
      "Infraestructura eléctrica",
    ],
  };
}
