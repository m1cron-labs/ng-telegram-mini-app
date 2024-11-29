/**
 * This object represents the content-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with Telegram UI elements.
 */
export interface ContentSafeAreaInset {
  /**
   * The top inset in pixels, representing the space to avoid at the top of the content area.
   * Also available as the CSS variable var(--tg-content-safe-area-inset-top).
   */
  top: number;

  /**
   * The bottom inset in pixels, representing the space to avoid at the bottom of the content area.
   * Also available as the CSS variable var(--tg-content-safe-area-inset-bottom).
   */
  bottom: number;

  /**
   * The left inset in pixels, representing the space to avoid on the left side of the content area.
   * Also available as the CSS variable var(--tg-content-safe-area-inset-left).
   */
  left: number;

  /**
   * The right inset in pixels, representing the space to avoid on the right side of the content area.
   * Also available as the CSS variable var(--tg-content-safe-area-inset-right).
   */
  right: number;
}
