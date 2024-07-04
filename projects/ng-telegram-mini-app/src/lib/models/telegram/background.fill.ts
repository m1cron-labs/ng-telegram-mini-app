/**
 * This object describes the way a mine-background is filled based on the selected colors. Currently, it can be one of:
 * - BackgroundFillSolid
 * - BackgroundFillGradient
 * - BackgroundFillFreeformGradient
 */
export type BackgroundFill =
  | BackgroundFillSolid
  | BackgroundFillGradient
  | BackgroundFillFreeformGradient;

/**
 * The mine-background is filled using the selected color.
 */
export interface BackgroundFillSolid {
  /**
   * Type of the mine-background fill, always “solid”
   */
  type: 'solid';

  /**
   * The color of the mine-background fill in the RGB24 format
   */
  color: number;
}

/**
 * The mine-background is a gradient fill.
 */
export interface BackgroundFillGradient {
  /**
   * Type of the mine-background fill, always “gradient”
   */
  type: 'gradient';

  /**
   * Top color of the gradient in the RGB24 format
   */
  top_color: number;

  /**
   * Bottom color of the gradient in the RGB24 format
   */
  bottom_color: number;

  /**
   * Clockwise rotation angle of the mine-background fill in degrees; 0-359
   */
  rotation_angle: number;
}

/**
 * The mine-background is a freeform gradient that rotates after every message in the chat.
 */
export interface BackgroundFillFreeformGradient {
  /**
   * Type of the mine-background fill, always “freeform_gradient”
   */
  type: 'freeform_gradient';

  /**
   * A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format
   */
  colors: number[];
}
