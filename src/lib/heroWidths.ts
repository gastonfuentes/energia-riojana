/**
 * Breakpoints for a photo that spans the full viewport width.
 *
 * Paired with `sizes="100vw"`, these become the srcset the browser picks from,
 * so a phone downloads ~640px instead of the 2600px original. The largest step
 * covers a 2x retina laptop.
 */
const FULL_BLEED_WIDTHS = [640, 960, 1280, 1600, 1920, 2560];

/**
 * Astro cannot upscale, so any breakpoint wider than the source file is
 * dropped. The source width itself is kept as the top step — otherwise a
 * 1919px photo would top out at the 1600px variant and look soft on a desktop.
 */
export function heroWidths(sourceWidth: number): number[] {
  const usable = FULL_BLEED_WIDTHS.filter((w) => w < sourceWidth);
  return [...usable, sourceWidth];
}
