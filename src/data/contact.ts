/**
 * Contact details from the client brief "Website ERSA - 2026".
 * Single source for every page or component that publishes a way to reach the
 * company. These used to be hand-written in four files and drifted: the footer
 * offered a .com address while /contacto offered .com.ar, and the footer's
 * WhatsApp href was missing both the // and the 9.
 *
 * Every href is derived from the value above it, so a number or a domain can
 * only ever be changed in one place.
 */

/**
 * Company WhatsApp. Digits only: country code, the 9 that wa.me requires for
 * Argentine mobiles, then the number. No leading + — wa.me rejects it.
 */
const whatsappDigits = "5493804331153";

export const whatsapp = {
  label: "3804331153",
  href: `https://wa.me/${whatsappDigits}`,
  /** The same chat with the message box pre-filled. CTAs reach it through
   * `inquiry.href`, only while `inquiryChannel` is "whatsapp". */
  link: (message: string) =>
    `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`,
};

/**
 * The operations director's LANDLINE. It is NOT on WhatsApp — never wire it to
 * a wa.me link. La Rioja's area code is 380, and the 9 that follows +54 marks a
 * mobile, so neither of those belongs in this number.
 */
export const phone = {
  label: "+54 380 448-1523",
  href: "tel:+543804481523",
};

/**
 * Inquiry inbox. Replaces the brief's imartinez@ at the company's request
 * (2026-11), when email became the only inquiry channel. The Netlify form
 * notification (set in the Netlify dashboard, not in this repo) must point at
 * this same address, or form submissions reach nobody.
 */
const emailAddress = "anates@energia-riojana.com.ar";

export const email = {
  address: emailAddress,
  href: `mailto:${emailAddress}`,
};

export const address = {
  /** Just the street, for tight spots like the footer column. */
  street: "Buenos Aires 264",
  full: "Buenos Aires 264, La Rioja, Prov. de La Rioja",
  href: "https://maps.app.goo.gl/GuEY43sCcK93r7268",
};

export const instagram = {
  handle: "@ersa.lr",
  label: "@ersa.lr en Instagram",
  href: "https://www.instagram.com/ersa.lr/",
};

/**
 * The contact form (src/components/Contact.astro). A CTA can link to it with
 * the topic in the query string so the Asunto field arrives already filled.
 */
export const inquiryForm = {
  /** Page whose form a CTA sends visitors to. Trailing slash avoids a redirect. */
  page: "/contacto/",
  /** Fragment id of the <form>, so the visitor lands on it, not on the hero. */
  id: "formulario",
  /** Query parameter the form reads to pre-fill its Asunto field. */
  subjectParam: "asunto",
};

/**
 * Where every inquiry CTA ("Pedí tu kit", "Pedí tu presupuesto"...) sends the
 * visitor:
 * - "form": the contact form on /contacto, Asunto pre-filled. Netlify Forms
 *   delivers each submission to the company by email.
 * - "whatsapp": the company chat above, message pre-filled.
 *
 * WhatsApp is paused since 2026-11 at the company's request, until it has an
 * institutional number. To bring it back, put the new number in
 * `whatsappDigits` and switch this to "whatsapp": every CTA, its new-tab
 * behavior, its label and the SEO schema follow.
 */
export type InquiryChannel = "form" | "whatsapp";
// `as` keeps the full union type, so code comparing against "whatsapp" still
// type-checks while the switch is set to "form".
export const inquiryChannel = "form" as InquiryChannel;

/**
 * What a visitor can ask about, one entry per CTA topic. `subject` pre-fills
 * the contact form; `message` pre-fills the WhatsApp chat.
 */
export const inquiryTopics = {
  hogar: {
    subject: "Kit solar para el hogar",
    message:
      "Hola, me comunico solicitando más información sobre el kit de energía solar para el hogar.",
  },
  empresas: {
    subject: "Presupuesto para empresas",
    message:
      "Hola, me comunico solicitando más información sobre productos y planes para empresas.",
  },
  industria: {
    subject: "Presupuesto para industrias y agro",
    message:
      "Hola, me comunico solicitando más información sobre productos y planes para industrias y agro.",
  },
  adaptado: {
    subject: "Sistema solar adaptado a medida",
    message:
      "Hola, me comunico solicitando más información sobre sistemas de energía solar adaptados a medida.",
  },
  asesoramiento: {
    subject: "Asesoramiento para elegir un sistema solar",
    message:
      "Hola, quiero asesoramiento para elegir un sistema de energía solar.",
  },
} as const;

export type InquiryTopic = keyof typeof inquiryTopics;

/** The single entry point every inquiry CTA uses. */
export const inquiry = {
  /** WhatsApp leaves the site, so it gets a new tab; the form does not. */
  opensNewTab: inquiryChannel === "whatsapp",
  /** For a CTA that names the channel rather than a product. */
  directLabel:
    inquiryChannel === "whatsapp"
      ? "Escribinos por WhatsApp"
      : "Hacé tu consulta",
  href: (topic: InquiryTopic) => {
    const { subject, message } = inquiryTopics[topic];
    if (inquiryChannel === "whatsapp") return whatsapp.link(message);
    const query = new URLSearchParams({ [inquiryForm.subjectParam]: subject });
    return `${inquiryForm.page}?${query}#${inquiryForm.id}`;
  },
};
