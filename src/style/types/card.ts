interface ThemeCardDropshadowItem {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ThemeCardDropshadow {
  sm: ThemeCardDropshadowItem;
  md: ThemeCardDropshadowItem;
  lg: ThemeCardDropshadowItem;
  fab: ThemeCardDropshadowItem;
}

interface ThemeCardBorderRadius {
  sm: string;
  md: string;
  lg: string;
  helf: string;
  full: string;
}

export interface ThemeCard {
  borderRadius: ThemeCardBorderRadius;
  dropshadow: ThemeCardDropshadow;
}
