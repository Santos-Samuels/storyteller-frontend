export interface ThemeBreakpoints {
  up: (size: string) => string;
  down: (size: string) => string;
  between: (minSize: string, maxSize: string) => string;
  devices: {
    mobile: string;
    portraitTablet: string;
    landscapeTablet: string;
    laptop: string;
    desktop: string;
    largeDesktop: string;
  };
}
