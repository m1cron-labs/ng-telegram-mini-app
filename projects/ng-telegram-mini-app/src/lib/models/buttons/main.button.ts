/**
 * This object controls the main button, which is displayed at the bottom of the Mini App in the Telegram interface.
 */
export interface MainButton {
  /**
   * Current button text. Set to CONTINUE by default.
   */
  text: string;

  /**
   * Current button color. Set to themeParams.button_color by default.
   */
  color: string;

  /**
   * Current button text color. Set to themeParams.button_text_color by default.
   */
  textColor: string;

  /**
   * Shows whether the button is visible. Set to false by default.
   */
  isVisible: boolean;

  /**
   * Shows whether the button is active. Set to true by default.
   */
  isActive: boolean;

  /**
   * Readonly. Shows whether the button is displaying a loading indicator.
   */
  readonly isProgressVisible: boolean;

  /**
   * A method to set the button text.
   * @param text
   */
  setText: (text: string) => MainButton;

  /**
   * A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
   * @param callback
   */
  onClick: (callback: Function) => MainButton;

  /**
   * A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
   * @param callback
   */
  offClick: (callback: Function) => MainButton;

  /**
   * A method to make the button visible.
   * Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the Mini App interface.
   */
  show: () => MainButton;

  /**
   * A method to hide the button.
   */
  hide: () => MainButton;

  /**
   * A method to enable the button.
   */
  enable: () => MainButton;

  /**
   * A method to disable the button.
   */
  disable: () => MainButton;

  /**
   * A method to show a loading indicator on the button.
   * It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter leaveActive=true is passed, the button remains enabled.
   * @param leaveActive
   */
  showProgress: (leaveActive: number) => MainButton;

  /**
   * A method to hide the loading indicator.
   */
  hideProgress: () => MainButton;

  /**
   * A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
   * text - button text;
   * color - button color;
   * text_color - button text color;
   * is_active - enable the button;
   * is_visible - show the button.
   * @param params
   */
  setParams: (
    params: Partial<{
      text: string;
      color: string;
      text_color: string;
      is_active: boolean;
      is_visible: boolean;
    }>,
  ) => MainButton;
}
