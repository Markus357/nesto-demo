// Nesto Brand Color Palette
export const colors = {
  deepNavy: '#121327',
  royalBlue: '#3F66AE',
  goldenYellow: '#FECC0B',
  redOrange: '#EB5045',
  whiteCenter: '#FFFEFA',
} as const;

export const colorVariables = `
  --deep-navy: ${colors.deepNavy};
  --royal-blue: ${colors.royalBlue};
  --golden-yellow: ${colors.goldenYellow};
  --red-orange: ${colors.redOrange};
  --white-center: ${colors.whiteCenter};
`;

export type ColorKey = keyof typeof colors;
