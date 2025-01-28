interface ThemePalleteColor {
  "050": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}

interface ThemePalleteButton {
  background: string;
  text: string;
}

export interface ThemePallete {
  colors: {
    primary: {
      yellow: ThemePalleteColor;
      magenta: ThemePalleteColor;
      purple: ThemePalleteColor;
      blue: ThemePalleteColor;
      ocean: ThemePalleteColor;
      greenWater: ThemePalleteColor;
      markGreen: ThemePalleteColor;
    };
    secondary: {
      lightBlue: ThemePalleteColor;
      green: ThemePalleteColor;
    };
    neutral: {
      gray: ThemePalleteColor;
    };
  };

  button: {
    disabled: ThemePalleteButton;

    tertiary: ThemePalleteButton;
    tertiaryActive: ThemePalleteButton;

    neutral: ThemePalleteButton;
    neutralActive: ThemePalleteButton;

    neutralTertiary: ThemePalleteButton;
    neutralTertiaryActive: ThemePalleteButton;

    danger: ThemePalleteButton;
    dangerHover: ThemePalleteButton;
    dangerActive: ThemePalleteButton;

    dangerTertiary: ThemePalleteButton;
    dangerTertiaryHover: ThemePalleteButton;
    dangerTertiaryActive: ThemePalleteButton;

    primary: ThemePalleteButton;
    primaryHover: ThemePalleteButton;
    primaryActive: ThemePalleteButton;

    secondary: ThemePalleteButton;
    secondaryActive: ThemePalleteButton;

    transparent: ThemePalleteButton;
    transparentActive: ThemePalleteButton;
    transparentTertiary: ThemePalleteButton;
    transparentTertiaryActive: ThemePalleteButton;
  };

  background: {
    primary: string;
    secondary: string;
  };

  typography: {
    primary: string;
    secondary: string;
    danger: string;
    title: string;
    invert: string;
  };

  toast: {
    info: ThemePalleteButton;
    success: ThemePalleteButton;
    warning: ThemePalleteButton;
    error: ThemePalleteButton;
  };

  tags: {
    gray: ThemePalleteButton;
    ocean: ThemePalleteButton;
    red: ThemePalleteButton;
    yellow: ThemePalleteButton;
    alternativeYellow: ThemePalleteButton;
    orange: ThemePalleteButton; // yellow2
    blue: ThemePalleteButton;
    alternativeBlue: ThemePalleteButton;
    purple: ThemePalleteButton;
    greenWater: ThemePalleteButton;
    green: ThemePalleteButton;
    teal: ThemePalleteButton; // greenWater2
    various1: ThemePalleteButton;
    various2: ThemePalleteButton;
  };
}
