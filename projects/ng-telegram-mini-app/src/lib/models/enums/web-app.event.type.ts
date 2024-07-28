export type WebAppEventType =
/**
 * Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
 * eventHandler receives no parameters, new theme settings and color scheme can be received via this.themeParams and this.colorScheme respectively.
 */
  | 'themeChanged'

  /**
   * Occurs when the visible section of the Mini App is changed.
   * eventHandler receives an object with the single field isStateStable. If isStateStable is true, the resizing of the Mini App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing). The current value of the visible section’s height is available in this.viewportHeight.
   */
  | 'viewportChanged'

  /**
   * Occurs when the main button is pressed.
   * eventHandler receives no parameters.
   */
  | 'mainButtonClicked'

  /**
   * Bot API 6.1+ Occurrs when the back button is pressed.
   * eventHandler receives no parameters.
   */
  | 'backButtonClicked'

  /**
   * Bot API 6.1+ Occurrs when the Settings item in context menu is pressed.
   * eventHandler receives no parameters.
   */
  | 'settingsButtonClicked'

  /**
   * Bot API 6.1+ Occurrs when the opened invoice is closed.
   * eventHandler receives an object with the two fields: url – invoice link provided and status – one of the invoice statuses:
   * - paid – invoice was paid successfully,
   * - cancelled – user closed this invoice without paying,
   * - failed – user tried to pay, but the payment was failed,
   * - pending – the payment is still processing. The bot will receive a service message about a successful payment when the payment is successfully paid.
   */
  | 'invoiceClosed'

  /**
   * Bot API 6.2+ Occurrs when the opened popup is closed.
   * eventHandler receives an object with the single field button_id – the value of the field id of the pressed button. If no buttons were pressed, the field button_id will be null.
   */
  | 'popupClosed'

  /**
   * Bot API 6.4+ Occurs when the QR code scanner catches a code with text data.
   * eventHandler receives an object with the single field data containing text data from the QR code.
   */
  | 'qrTextReceived'

  /**
   * Bot API 7.7+ Occurs when the QR code scanner popup is closed by the user.
   * eventHandler receives no parameters.
   */
  | 'scanQrPopupClosed'

  /**
   * Bot API 6.4+ Occurrs when the readTextFromClipboard method is called.
   * eventHandler receives an object with the single field data containing text data from the clipboard. If the clipboard contains non-text data, the field data will be an empty string. If the Mini App has no access to the clipboard, the field data will be null.
   */
  | 'clipboardTextReceived'

  /**
   * Bot API 6.9+ Occurs when the write permission was requested.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - allowed – user granted write permission to the bot,
   * - cancelled – user declined this request.
   */
  | 'writeAccessRequested'

  /**
   * Bot API 6.9+ Occurrs when the user's phone number was requested.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - sent – user shared their phone number with the bot,
   * - cancelled – user declined this request.
   */
  | 'contactRequested'

  /**
   * Bot API 7.2+ Occurs whenever BiometricManager object is changed.
   * eventHandler receives no parameters.
   */
  | 'biometricManagerUpdated'

  /**
   * Bot API 7.2+ Occurs whenever biometric authentication was requested.
   * eventHandler receives an object with the field isAuthenticated containing a boolean indicating whether the user was authenticated successfully. If isAuthenticated is true, the field biometricToken will contain the biometric token stored in secure storage on the device.
   */
  | 'biometricAuthRequested'

  /**
   * Bot API 7.2+ Occurs whenever the biometric token was updated.
   * eventHandler receives an object with the single field isUpdated, containing a boolean indicating whether the token was updated.
   */
  | 'biometricTokenUpdated';
