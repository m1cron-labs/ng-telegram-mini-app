/**
 * This object represents the system-defined safe area insets, providing padding values to ensure content remains within visible boundaries, avoiding overlap with system UI elements like notches or navigation bars.
 */
export interface SafeAreaInset {
  /**
   * The top inset in pixels, representing the space to avoid at the top of the screen.
   * Also available as the CSS variable var(--tg-safe-area-inset-top).
   */
  top: number;

  /**
   * The bottom inset in pixels, representing the space to avoid at the bottom of the screen.
   * Also available as the CSS variable var(--tg-safe-area-inset-bottom).
   */
  bottom: number;

  /**
   * The left inset in pixels, representing the space to avoid on the left side of the screen.
   * Also available as the CSS variable var(--tg-safe-area-inset-left).
   */
  left: number;

  /**
   * The right inset in pixels, representing the space to avoid on the right side of the screen.
   * Also available as the CSS variable var(--tg-safe-area-inset-right).
   */
  right: number;
}
