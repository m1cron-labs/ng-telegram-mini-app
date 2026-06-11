/**
 * This object provides access to a secure storage on the user’s device for sensitive data.
 * On iOS, it uses the system Keychain; on Android, it uses the Keystore.
 * This ensures that all stored values are encrypted at rest and inaccessible to unauthorized applications.
 *
 * Secure storage is suitable for storing tokens, secrets, authentication state, and other sensitive user-specific information.
 * Each bot can store up to 10 items per user.
 */
export interface SecureStorage {
  /**
   * Bot API 9.0+
   * A method that stores a value in the device's secure storage using the specified key.
   * If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error.
   * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
   * @param key
   * @param value
   * @param callback
   */
  setItem: (key: string, value: string, callback?: ((error: Error | null, stored?: boolean) => void) | Function) => SecureStorage;

  /**
   * Bot API 9.0+
   * A method that receives a value from the device's secure storage using the specified key.
   * In case of an error, the callback function will be called and the first argument will contain the error.
   * In case of success, the first argument will be null and the value will be passed as the second argument.
   * If the key was not found, the second argument will be null, and the third argument will be a boolean indicating whether the key can be restored from the current device.
   * @param key
   * @param callback
   */
  getItem: (key: string, callback: ((error: Error | null, value?: string | null, canBeRestored?: boolean) => void) | Function) => SecureStorage;

  /**
   * Bot API 9.0+
   * Attempts to restore a key that previously existed on the current device.
   * When called, the user will be asked for permission to restore the value.
   * If the user declines or an error occurs, the first argument in the callback will contain the error.
   * If restored successfully, the first argument will be null and the second argument will contain the restored value.
   * @param key
   * @param callback
   */
  restoreItem: (key: string, callback?: ((error: Error | null, value?: string | null) => void) | Function) => SecureStorage;

  /**
   * Bot API 9.0+
   * A method that removes a value from the device's secure storage using the specified key.
   * If an optional callback parameter was passed, the callback function will be called.
   * In case of an error, the first argument will contain the error.
   * In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
   * @param key
   * @param callback
   */
  removeItem: (key: string, callback?: ((error: Error | null, removed?: boolean) => void) | Function) => SecureStorage;

  /**
   * Bot API 9.0+
   * A method that clears all keys previously stored by the bot in the device's secure storage.
   * If an optional callback parameter was passed, the callback function will be called.
   * In case of an error, the first argument will contain the error.
   * In case of success, the first argument will be null and the second argument will be a boolean indicating whether all values were removed.
   * @param callback
   */
  clear: (callback?: ((error: Error | null, cleared?: boolean) => void) | Function) => SecureStorage;
}
