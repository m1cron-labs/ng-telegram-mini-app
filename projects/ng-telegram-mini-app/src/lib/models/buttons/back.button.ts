/**
 * This object controls the back button, which can be displayed in the header of the Mini App in the Telegram interface.
 */
export interface BackButton {
  /**
   * Shows whether the button is visible. Set to false by default.
   */
  isVisible: boolean;

  /**
   * Bot API 6.1+ A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
   * @param callback
   */
  onClick: (callback: Function) => BackButton;

  /**
   * Bot API 6.1+ A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
   * @param callback
   */
  offClick: (callback: Function) => BackButton;

  /**
   * Bot API 6.1+ A method to make the button active and visible.
   */
  show: () => BackButton;

  /**
   * Bot API 6.1+ A method to hide the button.
   */
  hide: () => BackButton;
}
