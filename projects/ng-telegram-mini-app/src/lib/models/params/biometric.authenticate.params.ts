/**
 * This object describes the native popup for authenticating the user using biometrics.
 */
export interface BiometricAuthenticateParams {
  /**
   * Optional. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.
   */
  reason?: string;
}
