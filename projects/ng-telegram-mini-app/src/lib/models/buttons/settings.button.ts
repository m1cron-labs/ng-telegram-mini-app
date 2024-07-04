/**
 * This object controls the Settings item in the context menu of the Mini App in the Telegram interface.
 */
export interface SettingsButton {
  /**
   * Shows whether the context menu item is visible. Set to false by default.
   */
  isVisible: boolean;

  /**
   * Bot API 7.0+ A method that sets the press event handler for the Settings item in the context menu. An alias for Telegram.WebApp.onEvent('settingsButtonClicked', callback)
   * @param callback
   */
  onClick: (callback: Function) => SettingsButton;

  /**
   * Bot API 7.0+ A method that removes the press event handler from the Settings item in the context menu. An alias for Telegram.WebApp.offEvent('settingsButtonClicked', callback)
   * @param callback
   */
  offClick: (callback: Function) => SettingsButton;

  /**
   * Bot API 7.0+ A method to make the Settings item in the context menu visible.
   */
  show: () => SettingsButton;

  /**
   * Bot API 7.0+ A method to hide the Settings item in the context menu.
   */
  hide: () => SettingsButton;
}
