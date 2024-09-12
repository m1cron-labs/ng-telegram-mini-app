/**
 * Mini Apps can adjust the appearance of the interface to match the Telegram user's app in real time. This object contains the user's current theme settings:
 */
export type ThemeParams = Partial<{
  /**
   * Optional.
   * Background color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-bg-color).
   */
  bg_color: string;

  /**
   * Optional.
   * Main text color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-text-color).
   */
  text_color: string;

  /**
   * Optional.
   * Hint text color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-hint-color).
   */
  hint_color: string;

  /**
   * Optional.
   * Link color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-link-color).
   */
  link_color: string;

  /**
   * Optional.
   * Button color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-button-color).
   */
  button_color: string;

  /**
   * Optional.
   * Button text color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-button-text-color).
   */
  button_text_color: string;

  /**
   * Optional.
   * Bot API 6.1+
   * Secondary mine-background color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-secondary-bg-color).
   */
  secondary_bg_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Header mine-background color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-header-bg-color).
   */
  header_bg_color: string;

  /**
   * Optional.
   * Bot API 7.10+
   * Bottom background color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color).
   */
  bottom_bar_bg_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Accent text color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-accent-text-color).
   */
  accent_text_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Background color for the section in the #RRGGBB format. It is recommended to use this in conjunction with secondary_bg_color.
   * Also available as the CSS variable var(--tg-theme-section-bg-color).
   */
  section_bg_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Header text color for the section in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-section-header-text-color).
   */
  section_header_text_color: string;

  /**
   * Optional.
   * Bot API 7.6+
   * Section separator color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-section-separator-color).
   */
  section_separator_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Subtitle text color in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-subtitle-text-color).
   */
  subtitle_text_color: string;

  /**
   * Optional.
   * Bot API 7.0+
   * Text color for destructive actions in the #RRGGBB format.
   * Also available as the CSS variable var(--tg-theme-destructive-text-color).
   */
  destructive_text_color: string;
}>;
