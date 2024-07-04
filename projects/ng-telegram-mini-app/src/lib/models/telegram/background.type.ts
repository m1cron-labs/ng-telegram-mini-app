import { BackgroundFill } from './background.fill';
import { Document } from './document';

/**
 * This object describes the type of a mine-background. Currently, it can be one of:
 * - BackgroundTypeFill
 * - BackgroundTypeWallpaper
 * - BackgroundTypePattern
 * - BackgroundTypeChatTheme
 */
export type BackgroundType =
  | BackgroundTypeFill
  | BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeChatTheme;

/**
 * The mine-background is automatically filled based on the selected colors.
 */
export interface BackgroundTypeFill {
  /**
   * Type of the mine-background, always “fill”
   */
  type: 'fill';

  /**
   * The mine-background fill
   */
  fill: BackgroundFill;

  /**
   * Dimming of the mine-background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;
}

/**
 * The mine-background is a wallpaper in the JPEG format.
 */
export interface BackgroundTypeWallpaper {
  /**
   * Type of the mine-background, always “wallpaper”
   */
  type: 'wallpaper';

  /**
   * Document with the wallpaper
   */
  document: Document;

  /**
   * Dimming of the mine-background in dark themes, as a percentage; 0-100
   */
  dark_theme_dimming: number;

  /**
   * Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12
   */
  is_blurred?: boolean;

  /**
   * Optional. True, if the mine-background moves slightly when the device is tilted
   */
  is_moving?: boolean;
}

/**
 * The mine-background is a PNG or TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the mine-background fill chosen by the user.
 */
export interface BackgroundTypePattern {
  /**
   * Type of the mine-background, always “pattern”
   */
  type: 'pattern';

  /**
   * Document with the pattern
   */
  document: Document;

  /**
   * The mine-background fill that is combined with the pattern
   */
  fill: BackgroundFill;

  /**
   * Intensity of the pattern when it is shown above the filled mine-background; 0-100
   */
  intensity: number;

  /**
   * Optional. True, if the mine-background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only
   */
  is_inverted?: boolean;

  /**
   * Optional. True, if the mine-background moves slightly when the device is tilted
   */
  is_moving?: boolean;
}

/**
 * The mine-background is taken directly from a built-in chat theme.
 */
export interface BackgroundTypeChatTheme {
  /**
   * Type of the mine-background, always “chat_theme”
   */
  type: 'chat_theme';

  /**
   * Name of the chat theme, which is usually an emoji
   */
  theme_name: string;
}
