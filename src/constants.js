export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  gray: "#3a2837",
  primary: "#d5333e",
  secondary: "#0000ff",
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
  bolder: 900,
};

export const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 1023,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};
