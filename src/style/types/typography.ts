export type ThemeMeasurePixelUnity = `${number}px`;

interface ThemeTypographyProperties {
  fontFamily: string;
  fontSize: ThemeMeasurePixelUnity;
  fontStyle: string;
  fontWeight: number;
  lineHeight: ThemeMeasurePixelUnity;
  letterSpacing: ThemeMeasurePixelUnity;
  textTransform:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "none"
    | "full-width"
    | "full-size-kana";
}

export interface ThemeTypography {
  display1: ThemeTypographyProperties;
  display2: ThemeTypographyProperties;
  display3: ThemeTypographyProperties;

  button1: ThemeTypographyProperties;
  button2: ThemeTypographyProperties;
  button3: ThemeTypographyProperties;

  body1: ThemeTypographyProperties;
  body2: ThemeTypographyProperties;
  body3: ThemeTypographyProperties;

  label1: ThemeTypographyProperties;
  label2: ThemeTypographyProperties;
  label3: ThemeTypographyProperties;
  label4: ThemeTypographyProperties;

  overline: ThemeTypographyProperties;

  h1: ThemeTypographyProperties;
  h2: ThemeTypographyProperties;
  h3: ThemeTypographyProperties;
  h4: ThemeTypographyProperties;
  h5: ThemeTypographyProperties;
  h6: ThemeTypographyProperties;
}
