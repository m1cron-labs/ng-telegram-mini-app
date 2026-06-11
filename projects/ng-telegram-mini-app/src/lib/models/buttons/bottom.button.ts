import { BottomButtonPosition } from '../enums/bottom-button.position';
import { BottomButtonType } from '../enums/bottom-button.type';

/**
 * This object controls the button that is displayed at the bottom of the Mini App in the Telegram interface.
 */
export interface BottomButton {
  /**
   * Readonly. Type of the button. It can be either main for the main button or secondary for the secondary button.
   */
  readonly type: `${BottomButtonType}`;

  /**
   * Bot API 9.5+
   * Unique identifier of the custom emoji shown before the text of the button.
   */
  iconCustomEmojiId: string;

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
   * Bot API 7.10+
   * Shows whether the button has a shine effect. Set to false by default.
   */
  hasShineEffect: boolean;

  /**
   * Bot API 7.10+
   * Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to left by default.
   * Supported values: left, right, top, bottom.
   */
  position: `${BottomButtonPosition}`;

  /**
   * Readonly. Shows whether the button is displaying a loading indicator.
   */
  readonly isProgressVisible: boolean;

  /**
   * A method to set the button text.
   * @param text
   */
  setText: (text: string) => BottomButton;

  /**
   * A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
   * @param callback
   */
  onClick: (callback: (() => void) | Function) => BottomButton;

  /**
   * A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
   * @param callback
   */
  offClick: (callback: (() => void) | Function) => BottomButton;

  /**
   * A method to make the button visible.
   * Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the Mini App interface.
   */
  show: () => BottomButton;

  /**
   * A method to hide the button.
   */
  hide: () => BottomButton;

  /**
   * A method to enable the button.
   */
  enable: () => BottomButton;

  /**
   * A method to disable the button.
   */
  disable: () => BottomButton;

  /**
   * A method to show a loading indicator on the button.
   * It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter leaveActive=true is passed, the button remains enabled.
   * @param leaveActive boolean preferred; number is accepted for backward compatibility (evaluated by truthiness)
   */
  showProgress: (leaveActive?: boolean | number) => BottomButton;

  /**
   * A method to hide the loading indicator.
   */
  hideProgress: () => BottomButton;

  /**
   * A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
   * icon_custom_emoji_id - Bot API 9.5+ button icon emoji id;
   * text - button text;
   * color - button color;
   * text_color - button text color;
   * has_shine_effect - Bot API 7.10+ enable shine effect;
   * position - position of the secondary button;
   * is_active - enable the button;
   * is_visible - show the button.
   * @param params
   */
  setParams: (
    params: Partial<{
      icon_custom_emoji_id: string;
      text: string;
      color: string;
      text_color: string;
      has_shine_effect: boolean;
      position: `${BottomButtonPosition}`;
      is_active: boolean;
      is_visible: boolean;
    }>,
  ) => BottomButton;
}
