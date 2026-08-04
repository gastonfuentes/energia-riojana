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
  /** The same chat with the message box pre-filled. Used by every CTA. */
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

const emailAddress = "imartinez@energia-riojana.com.ar";

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
