// Design tokens of the mobile app, taken from the web app's ui/tokens (colors.css, spacing, radius, type).
// Screens and components read these names only: no raw colour or size anywhere else.
export const color = {
  bg: "#FFFFFF",
  surface: "#FFFFFF",
  sunk: "#EFEFF1",
  fg: "#16151A",
  muted: "#6A6872",
  line: "#ECECEE",
  line2: "#DCDCE0",
  inv: "#FFFFFF",
  banner: "#F1E9FF",
  bannerFg: "#22103F",
  tintSun: "#FFF6D6",
  tintSky: "#E6F2FF",
  tintMint: "#E6F7EB",
  good: "#16A34A",
  bad: "#DC2626",
  goodSoft: "#F0FDF4",
  badSoft: "#FEF2F2",
  avSun: "#FFE7A3",
  avSky: "#CFE6FF",
  avMint: "#CFF3DD",
  avRose: "#FFD6DE",
  avLilac: "#E5DBFF",
  shadow: "#000000",
} as const;

export const space = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 14: 56 } as const;
export const radius = { xs: 4, sm: 10, md: 14, lg: 22, xl: 28, pill: 999 } as const;
export const font = { xs: 11, sm: 12, md: 13, base: 14, lg: 16, xl: 18, xxl: 22, d1: 24, d2: 28, d3: 30, d4: 44 } as const;
export const weight = { regular: "400", medium: "500", semibold: "600", bold: "700" } as const;
// Tappable areas are never smaller than this (accessibility).
export const touch = 48;
