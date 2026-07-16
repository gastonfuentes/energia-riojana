/**
 * Impact figures from the client brief "Website ERSA - 2026".
 * Single source for every page that renders a StatsRow.
 */
export interface Stat {
  /** The figure. A number, because it is one — the counter reads it directly. */
  value: number;
  /** Rendered before the figure and kept out of the count-up. */
  prefix?: string;
  /** Sentence explaining what the figure counts. */
  label: string;
  /** File name in src/assets/icons, without extension. */
  icon: string;
}

export const provinceStats: Stat[] = [
  {
    value: 12,
    icon: "icon-product-energy",
    label: "Megawatts instalados en la provincia.",
  },
  {
    value: 70,
    icon: "icon-stat-house",
    label: "Hogares rurales generan su propia energía.",
  },
];

export const communityStats: Stat[] = [
  {
    value: 250,
    icon: "icon-commitment-sustainability",
    label: "Comprometidos con el medio ambiente.",
  },
  {
    value: 180,
    icon: "icon-stat-people",
    label: "Usuarios generadores de energía limpia.",
  },
];

export const allStats: Stat[] = [...provinceStats, ...communityStats];
