import { HomeScreenStatus } from './enums/home-screen.status';
import { WebAppEventType } from './enums/web-app.event.type';
import { LocationData } from './location.data';
import type { WebApp } from './web-app';

/**
 * Status of an invoice.
 * - paid – invoice was paid successfully,
 * - cancelled – user closed this invoice without paying,
 * - failed – user tried to pay, but the payment was failed,
 * - pending – the payment is still processing.
 */
export type InvoiceStatus = 'paid' | 'cancelled' | 'failed' | 'pending';

/**
 * Payload of the viewportChanged event.
 */
export interface ViewportChangedEventData {
  /**
   * If true, the resizing of the Mini App is finished. If false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing).
   */
  isStateStable: boolean;
}

/**
 * Bot API 6.1+
 * Payload of the invoiceClosed event.
 */
export interface InvoiceClosedEventData {
  /**
   * Invoice link provided.
   */
  url: string;

  /**
   * One of the invoice statuses.
   */
  status: InvoiceStatus;
}

/**
 * Bot API 6.2+
 * Payload of the popupClosed event.
 */
export interface PopupClosedEventData {
  /**
   * The value of the field id of the pressed button. If no buttons were pressed, the field will be null.
   */
  button_id: string | null;
}

/**
 * Bot API 6.4+
 * Payload of the qrTextReceived event.
 */
export interface QrTextReceivedEventData {
  /**
   * Text data from the QR code.
   */
  data: string;
}

/**
 * Bot API 6.4+
 * Payload of the clipboardTextReceived event.
 */
export interface ClipboardTextReceivedEventData {
  /**
   * Text data from the clipboard. If the clipboard contains non-text data, the field will be an empty string. If the Mini App has no access to the clipboard, the field will be null.
   */
  data: string | null;
}

/**
 * Bot API 6.9+
 * Payload of the writeAccessRequested event.
 */
export interface WriteAccessRequestedEventData {
  /**
   * allowed – user granted write permission to the bot, cancelled – user declined this request.
   */
  status: 'allowed' | 'cancelled';
}

/**
 * Bot API 6.9+
 * Payload of the contactRequested event.
 */
export interface ContactRequestedEventData {
  /**
   * sent – user shared their phone number with the bot, cancelled – user declined this request.
   */
  status: 'sent' | 'cancelled';
}

/**
 * Bot API 7.2+
 * Payload of the biometricAuthRequested event.
 */
export interface BiometricAuthRequestedEventData {
  /**
   * Whether the user was authenticated successfully.
   */
  isAuthenticated: boolean;

  /**
   * The biometric token stored in secure storage on the device. Present only if isAuthenticated is true.
   */
  biometricToken?: string;
}

/**
 * Bot API 7.2+
 * Payload of the biometricTokenUpdated event.
 */
export interface BiometricTokenUpdatedEventData {
  /**
   * Whether the token was updated.
   */
  isUpdated: boolean;
}

/**
 * Bot API 8.0+
 * Payload of the fullscreenFailed event.
 */
export interface FullscreenFailedEventData {
  /**
   * UNSUPPORTED – fullscreen mode is not supported on this device or platform, ALREADY_FULLSCREEN – the Mini App is already in fullscreen mode.
   */
  error: 'UNSUPPORTED' | 'ALREADY_FULLSCREEN';
}

/**
 * Bot API 8.0+
 * Payload of the homeScreenChecked event.
 */
export interface HomeScreenCheckedEventData {
  /**
   * The current home screen status.
   */
  status: `${HomeScreenStatus}`;
}

/**
 * Bot API 8.0+
 * Payload of the accelerometerFailed event.
 */
export interface AccelerometerFailedEventData {
  /**
   * UNSUPPORTED – accelerometer tracking is not supported on this device or platform.
   */
  error: 'UNSUPPORTED';
}

/**
 * Bot API 8.0+
 * Payload of the deviceOrientationFailed event.
 */
export interface DeviceOrientationFailedEventData {
  /**
   * UNSUPPORTED – device orientation tracking is not supported on this device or platform.
   */
  error: 'UNSUPPORTED';
}

/**
 * Bot API 8.0+
 * Payload of the gyroscopeFailed event.
 */
export interface GyroscopeFailedEventData {
  /**
   * UNSUPPORTED – gyroscope tracking is not supported on this device or platform.
   */
  error: 'UNSUPPORTED';
}

/**
 * Bot API 8.0+
 * Payload of the locationRequested event.
 */
export interface LocationRequestedEventData {
  /**
   * The current location information.
   */
  locationData: LocationData;
}

/**
 * Bot API 8.0+
 * Payload of the shareMessageFailed event.
 */
export interface ShareMessageFailedEventData {
  /**
   * UNSUPPORTED – the feature is not supported by the client.
   * MESSAGE_EXPIRED – the message could not be retrieved because it has expired.
   * MESSAGE_SEND_FAILED – an error occurred while attempting to send the message.
   * USER_DECLINED – the user closed the dialog without sharing the message.
   * UNKNOWN_ERROR – an unknown error occurred.
   */
  error: 'UNSUPPORTED' | 'MESSAGE_EXPIRED' | 'MESSAGE_SEND_FAILED' | 'USER_DECLINED' | 'UNKNOWN_ERROR';
}

/**
 * Bot API 8.0+
 * Payload of the emojiStatusFailed event.
 */
export interface EmojiStatusFailedEventData {
  /**
   * UNSUPPORTED – the feature is not supported by the client.
   * SUGGESTED_EMOJI_INVALID – one or more emoji identifiers are invalid.
   * DURATION_INVALID – the specified duration is invalid.
   * USER_DECLINED – the user closed the dialog without setting a status.
   * SERVER_ERROR – a server error occurred when attempting to set the status.
   * UNKNOWN_ERROR – an unknown error occurred.
   */
  error: 'UNSUPPORTED' | 'SUGGESTED_EMOJI_INVALID' | 'DURATION_INVALID' | 'USER_DECLINED' | 'SERVER_ERROR' | 'UNKNOWN_ERROR';
}

/**
 * Bot API 8.0+
 * Payload of the emojiStatusAccessRequested event.
 */
export interface EmojiStatusAccessRequestedEventData {
  /**
   * allowed – user granted emoji status permission to the bot, cancelled – user declined this request.
   */
  status: 'allowed' | 'cancelled';
}

/**
 * Bot API 8.0+
 * Payload of the fileDownloadRequested event.
 */
export interface FileDownloadRequestedEventData {
  /**
   * downloading – the file download has started, cancelled – user declined this request.
   */
  status: 'downloading' | 'cancelled';
}

/**
 * Maps every WebApp event type to the payload its handler receives (void for events whose handlers receive no parameters).
 */
export interface WebAppEventDataMap {
  activated: void;
  deactivated: void;
  /**
   * No payload. New theme settings and color scheme can be received via this.themeParams and this.colorScheme.
   */
  themeChanged: void;
  viewportChanged: ViewportChangedEventData;
  /**
   * No payload. The current inset values can be accessed via this.safeAreaInset.
   */
  safeAreaChanged: void;
  /**
   * No payload. The current inset values can be accessed via this.contentSafeAreaInset.
   */
  contentSafeAreaChanged: void;
  mainButtonClicked: void;
  secondaryButtonClicked: void;
  backButtonClicked: void;
  settingsButtonClicked: void;
  invoiceClosed: InvoiceClosedEventData;
  popupClosed: PopupClosedEventData;
  qrTextReceived: QrTextReceivedEventData;
  scanQrPopupClosed: void;
  clipboardTextReceived: ClipboardTextReceivedEventData;
  writeAccessRequested: WriteAccessRequestedEventData;
  contactRequested: ContactRequestedEventData;
  biometricManagerUpdated: void;
  biometricAuthRequested: BiometricAuthRequestedEventData;
  biometricTokenUpdated: BiometricTokenUpdatedEventData;
  /**
   * No payload. The current fullscreen state can be checked via this.isFullscreen.
   */
  fullscreenChanged: void;
  fullscreenFailed: FullscreenFailedEventData;
  homeScreenAdded: void;
  homeScreenChecked: HomeScreenCheckedEventData;
  accelerometerStarted: void;
  accelerometerStopped: void;
  /**
   * No payload. The current acceleration values can be received via this.Accelerometer.x, this.Accelerometer.y and this.Accelerometer.z.
   */
  accelerometerChanged: void;
  accelerometerFailed: AccelerometerFailedEventData;
  deviceOrientationStarted: void;
  deviceOrientationStopped: void;
  /**
   * No payload. The current device orientation values can be received via this.DeviceOrientation.alpha, this.DeviceOrientation.beta and this.DeviceOrientation.gamma.
   */
  deviceOrientationChanged: void;
  deviceOrientationFailed: DeviceOrientationFailedEventData;
  gyroscopeStarted: void;
  gyroscopeStopped: void;
  /**
   * No payload. The current rotation rates can be received via this.Gyroscope.x, this.Gyroscope.y and this.Gyroscope.z.
   */
  gyroscopeChanged: void;
  gyroscopeFailed: GyroscopeFailedEventData;
  locationManagerUpdated: void;
  locationRequested: LocationRequestedEventData;
  shareMessageSent: void;
  shareMessageFailed: ShareMessageFailedEventData;
  emojiStatusSet: void;
  emojiStatusFailed: EmojiStatusFailedEventData;
  emojiStatusAccessRequested: EmojiStatusAccessRequestedEventData;
  fileDownloadRequested: FileDownloadRequestedEventData;
}

/**
 * Typed handler for a WebApp event. Handlers are invoked with this bound to window.Telegram.WebApp, so state-only events can read the current values via this (e.g. this.themeParams, this.Accelerometer.x).
 */
export type WebAppEventHandler<T extends WebAppEventType> = WebAppEventDataMap[T] extends void
  ? (this: WebApp) => void
  : (this: WebApp, eventData: WebAppEventDataMap[T]) => void;
