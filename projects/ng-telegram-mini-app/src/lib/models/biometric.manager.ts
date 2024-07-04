import { BiometricType } from './enums/biometric.type';
import { BiometricAuthenticateParams } from './params/biometric.authenticate.params';
import { BiometricRequestAccessParams } from './params/biometric.request-access.params';

/**
 * This object controls biometrics on the device. Before the first use of this object, it needs to be initialized using the init method.
 */
export interface BiometricManager {
  /**
   * Bot API 7.2+ Shows whether biometrics object is initialized.
   */
  isInited: boolean;

  /**
   * Bot API 7.2+ Shows whether biometrics is available on the current device.
   */
  isBiometricAvailable: boolean;

  /**
   * Bot API 7.2+ The type of biometrics currently available on the device. Can be one of these values:
   * - finger, fingerprint-based biometrics,
   * - face, face-based biometrics,
   * - unknown, biometrics of an unknown type.
   */
  biometricType: BiometricType;

  /**
   * Bot API 7.2+ Shows whether permission to use biometrics has been requested.
   */
  isAccessRequested: boolean;

  /**
   * Bot API 7.2+ Shows whether permission to use biometrics has been granted.
   */
  isAccessGranted: boolean;

  /**
   * Bot API 7.2+ Shows whether the token is saved in secure storage on the device.
   */
  isBiometricTokenSaved: boolean;

  /**
   * Bot API 7.2+ A unique device identifier that can be used to match the token to the device.
   */
  deviceId: string;

  /**
   * Bot API 7.2+ A method that initializes the BiometricManager object. It should be called before the object's first use. If an optional callback parameter was passed, the callback function will be called when the object is initialized.
   * @param callback
   */
  init: (callback?: Function) => BiometricManager;

  /**
   * Bot API 7.2+ A method that requests permission to use biometrics according to the params argument of type BiometricRequestAccessParams. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user granted access.
   * @param params
   * @param callback
   */
  requestAccess: (params: BiometricRequestAccessParams, callback?: Function) => BiometricManager;

  /**
   * Bot API 7.2+ A method that authenticates the user using biometrics according to the params argument of type BiometricAuthenticateParams. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user authenticated successfully. If so, the second argument will be a biometric token.
   * @param params
   * @param callback
   */
  authenticate: (params: BiometricAuthenticateParams, callback?: Function) => BiometricManager;

  /**
   * Bot API 7.2+ A method that updates the biometric token in secure storage on the device. To remove the token, pass an empty string. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the token was updated.
   * @param token
   * @param callback
   */
  updateBiometricToken: (token: string, callback?: Function) => BiometricManager;

  /**
   * Bot API 7.2+ A method that opens the biometric access settings for bots. Useful when you need to request biometrics access to users who haven't granted it yet.
   *
   * Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)
   */
  openSettings: () => BiometricManager;
}
