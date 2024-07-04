import { ButtonType } from '../enums/button.type';

/**
 * This object describes the native popup button.
 */
export interface PopupButton {
  /**
   * Optional. Identifier of the button, 0-64 characters. Set to empty string by default.
   * If the button is pressed, its id is returned in the callback and the popupClosed event.
   */
  id?: string;

  /**
   * Optional. Type of the button. Set to default by default.
   * Can be one of these values:
   * - default, a button with the default style,
   * - ok, a button with the localized text “OK”,
   * - close, a button with the localized text “Close”,
   * - cancel, a button with the localized text “Cancel”,
   * - destructive, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
   */
  type?: ButtonType;

  /**
   * 0-64 characters
   */
  text?: string;
}
