export type WebAppEventType =
  /**
   * Bot API 8.0+
   * Occurs when the Mini App becomes active (e.g., opened from minimized state or selected among tabs).
   * eventHandler receives no parameters.
   */
  | 'activated'

  /**
   * Bot API 8.0+
   * Occurs when the Mini App becomes inactive (e.g., minimized or moved to an inactive tab).
   * eventHandler receives no parameters.
   */
  | 'deactivated'

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
   * Bot API 8.0+
   * Occurs when the device's safe area insets change (e.g., due to orientation change or screen adjustments).
   * eventHandler receives no parameters.
   * The current inset values can be accessed via this.safeAreaInset.
   */
  | 'safeAreaChanged'

  /**
   * Bot API 8.0+
   * Occurs when the safe area for content changes (e.g., due to orientation change or screen adjustments).
   * eventHandler receives no parameters.
   * The current inset values can be accessed via this.contentSafeAreaInset.
   */
  | 'contentSafeAreaChanged'

  /**
   * Occurs when the main button is pressed.
   * eventHandler receives no parameters.
   */
  | 'mainButtonClicked'

  /**
   * Bot API 7.10+
   * Occurs when the secondary button is pressed.
   * eventHandler receives no parameters.
   */
  | 'secondaryButtonClicked'

  /**
   * Bot API 6.1+
   * Occurrs when the back button is pressed.
   * eventHandler receives no parameters.
   */
  | 'backButtonClicked'

  /**
   * Bot API 6.1+
   * Occurrs when the Settings item in context menu is pressed.
   * eventHandler receives no parameters.
   */
  | 'settingsButtonClicked'

  /**
   * Bot API 6.1+
   * Occurrs when the opened invoice is closed.
   * eventHandler receives an object with the two fields: url – invoice link provided and status – one of the invoice statuses:
   * - paid – invoice was paid successfully,
   * - cancelled – user closed this invoice without paying,
   * - failed – user tried to pay, but the payment was failed,
   * - pending – the payment is still processing. The bot will receive a service message about a successful payment when the payment is successfully paid.
   */
  | 'invoiceClosed'

  /**
   * Bot API 6.2+
   * Occurrs when the opened popup is closed.
   * eventHandler receives an object with the single field button_id – the value of the field id of the pressed button. If no buttons were pressed, the field button_id will be null.
   */
  | 'popupClosed'

  /**
   * Bot API 6.4+
   * Occurs when the QR code scanner catches a code with text data.
   * eventHandler receives an object with the single field data containing text data from the QR code.
   */
  | 'qrTextReceived'

  /**
   * Bot API 7.7+
   * Occurs when the QR code scanner popup is closed by the user.
   * eventHandler receives no parameters.
   */
  | 'scanQrPopupClosed'

  /**
   * Bot API 6.4+
   * Occurrs when the readTextFromClipboard method is called.
   * eventHandler receives an object with the single field data containing text data from the clipboard. If the clipboard contains non-text data, the field data will be an empty string. If the Mini App has no access to the clipboard, the field data will be null.
   */
  | 'clipboardTextReceived'

  /**
   * Bot API 6.9+
   * Occurs when the write permission was requested.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - allowed – user granted write permission to the bot,
   * - cancelled – user declined this request.
   */
  | 'writeAccessRequested'

  /**
   * Bot API 6.9+
   * Occurrs when the user's phone number was requested.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - sent – user shared their phone number with the bot,
   * - cancelled – user declined this request.
   */
  | 'contactRequested'

  /**
   * Bot API 7.2+
   * Occurs whenever BiometricManager object is changed.
   * eventHandler receives no parameters.
   */
  | 'biometricManagerUpdated'

  /**
   * Bot API 7.2+
   * Occurs whenever biometric authentication was requested.
   * eventHandler receives an object with the field isAuthenticated containing a boolean indicating whether the user was authenticated successfully. If isAuthenticated is true, the field biometricToken will contain the biometric token stored in secure storage on the device.
   */
  | 'biometricAuthRequested'

  /**
   * Bot API 7.2+
   * Occurs whenever the biometric token was updated.
   * eventHandler receives an object with the single field isUpdated, containing a boolean indicating whether the token was updated.
   */
  | 'biometricTokenUpdated'

  /**
   * Bot API 8.0+
   * Occurs whenever the Mini App enters or exits fullscreen mode.
   * eventHandler receives no parameters.
   * The current fullscreen state can be checked via this.isFullscreen.
   */
  | 'fullscreenChanged'

  /**
   * Bot API 8.0+
   * Occurs if a request to enter fullscreen mode fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – Fullscreen mode is not supported on this device or platform.
   * ALREADY_FULLSCREEN – The Mini App is already in fullscreen mode.
   */
  | 'fullscreenFailed'

  /**
   * Bot API 8.0+
   * Occurs when the Mini App is successfully added to the home screen.
   * eventHandler receives no parameters.
   */
  | 'homeScreenAdded'

  /**
   * Bot API 8.0+
   * Occurs after checking the home screen status.
   * eventHandler receives an object with the field status, which is a string indicating the current home screen status. Possible values for status are:
   * - unsupported – the feature is not supported, and it is not possible to add the icon to the home screen,
   * - unknown – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
   * - added – the icon has already been added to the home screen,
   * - missed – the icon has not been added to the home screen.
   */
  | 'homeScreenChecked'

  /**
   * Bot API 8.0+
   * Occurs when accelerometer tracking has started successfully.
   * eventHandler receives no parameters.
   */
  | 'accelerometerStarted'

  /**
   * Bot API 8.0+
   * Occurs when accelerometer tracking has stopped.
   * eventHandler receives no parameters.
   */
  | 'accelerometerStopped'

  /**
   * Bot API 8.0+
   * Occurs with the specified frequency after calling the start method, sending the current accelerometer data.
   * eventHandler receives no parameters, the current acceleration values can be received via this.x, this.y and this.z respectively.
   */
  | 'accelerometerChanged'

  /**
   * Bot API 8.0+
   * Occurs if a request to start accelerometer tracking fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – Accelerometer tracking is not supported on this device or platform.
   */
  | 'accelerometerFailed'

  /**
   * Bot API 8.0+
   * Occurs when device orientation tracking has started successfully.
   * eventHandler receives no parameters.
   */
  | 'deviceOrientationStarted'

  /**
   * Bot API 8.0+
   * Occurs when device orientation tracking has stopped.
   * eventHandler receives no parameters.
   */
  | 'deviceOrientationStopped'

  /**
   * Bot API 8.0+
   * Occurs with the specified frequency after calling the start method, sending the current orientation data.
   * eventHandler receives no parameters, the current device orientation values can be received via this.alpha, this.beta and this.gamma respectively.
   */
  | 'deviceOrientationChanged'

  /**
   * Bot API 8.0+
   * Occurs if a request to start device orientation tracking fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – Device orientation tracking is not supported on this device or platform.
   */
  | 'deviceOrientationFailed'

  /**
   * Bot API 8.0+
   * Occurs when gyroscope tracking has started successfully.
   * eventHandler receives no parameters.
   */
  | 'gyroscopeStarted'

  /**
   * Bot API 8.0+
   * Occurs when gyroscope tracking has stopped.
   * eventHandler receives no parameters.
   */
  | 'gyroscopeStopped'

  /**
   * Bot API 8.0+
   * Occurs with the specified frequency after calling the start method, sending the current gyroscope data.
   * eventHandler receives no parameters, the current rotation rates can be received via this.x, this.y and this.z respectively.
   */
  | 'gyroscopeChanged'

  /**
   * Bot API 8.0+
   * Occurs if a request to start gyroscope tracking fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – Gyroscope tracking is not supported on this device or platform.
   */
  | 'gyroscopeFailed'

  /**
   * Bot API 8.0+
   * Occurs whenever LocationManager object is changed.
   * eventHandler receives no parameters.
   */
  | 'locationManagerUpdated'

  /**
   * Bot API 8.0+
   * Occurs when location data is requested.
   * eventHandler receives an object with the single field locationData of type LocationData, containing the current location information.
   */
  | 'locationRequested'

  /**
   * Bot API 8.0+
   * Occurs when the message is successfully shared by the user.
   * eventHandler receives no parameters.
   */
  | 'shareMessageSent'

  /**
   * Bot API 8.0+
   * Occurs if sharing the message fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – The feature is not supported by the client.
   * MESSAGE_EXPIRED – The message could not be retrieved because it has expired.
   * MESSAGE_SEND_FAILED – An error occurred while attempting to send the message.
   * USER_DECLINED – The user closed the dialog without sharing the message.
   * UNKNOWN_ERROR – An unknown error occurred.
   */
  | 'shareMessageFailed'

  /**
   * Bot API 8.0+
   * Occurs when the emoji status is successfully set.
   * eventHandler receives no parameters.
   */
  | 'emojiStatusSet'

  /**
   * Bot API 8.0+
   * Occurs if setting the emoji status fails.
   * eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
   * UNSUPPORTED – The feature is not supported by the client.
   * SUGGESTED_EMOJI_INVALID – One or more emoji identifiers are invalid.
   * DURATION_INVALID – The specified duration is invalid.
   * USER_DECLINED – The user closed the dialog without setting a status.
   * SERVER_ERROR – A server error occurred when attempting to set the status.
   * UNKNOWN_ERROR – An unknown error occurred.
   */
  | 'emojiStatusFailed'

  /**
   * Bot API 8.0+
   * Occurs when the write permission was requested.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - allowed – user granted emoji status permission to the bot,
   * - cancelled – user declined this request.
   */
  | 'emojiStatusAccessRequested'

  /**
   * Bot API 8.0+
   * Occurs when the user responds to the file download request.
   * eventHandler receives an object with the single field status containing one of the statuses:
   * - downloading – the file download has started,
   * - cancelled – user declined this request.
   */
  | 'fileDownloadRequested';
