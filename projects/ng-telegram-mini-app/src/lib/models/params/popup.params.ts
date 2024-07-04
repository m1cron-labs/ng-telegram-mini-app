import { PopupButton } from '../buttons/popup.button';

/**
 * This object describes the native popup.
 */
export interface PopupParams {
  /**
   * Optional. The text to be displayed in the popup title, 0-64 characters.
   */
  title?: string;

  /**
   * The message to be displayed in the body of the popup, 1-256 characters.
   */
  message: string;

  /**
   * Optional. List of buttons to be displayed in the popup, 1-3 buttons. Set to [{“type”:“close”}] by default.
   */
  buttons?: PopupButton[];
}
