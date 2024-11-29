import { LocationData } from './location.data';

/**
 * This object controls location access on the device.
 * Before the first use of this object, it needs to be initialized using the init method.
 */
export interface LocationManager {
  /**
   * Shows whether the LocationManager object has been initialized.
   */
  readonly isInited: boolean;

  /**
   * Shows whether location services are available on the current device.
   */
  readonly isLocationAvailable: boolean;

  /**
   * Shows whether permission to use location has been requested.
   */
  readonly isAccessRequested: boolean;

  /**
   * Shows whether permission to use location has been granted.
   */
  readonly isAccessGranted: boolean;

  /**
   * Bot API 8.0+
   * A method that initializes the LocationManager object.
   * It should be called before the object's first use.
   * If an optional callback parameter is provided, the callback function will be called when the object is initialized.
   * @param callback
   */
  init(callback?: () => void): LocationManager;

  /**
   * Bot API 8.0+
   * A method that requests location data.
   * The callback function will be called with null as the first argument if access to location was not granted, or an object of type LocationData as the first argument if access was successful.
   * @param callback
   */
  getLocation(callback: (data: null | LocationData) => void): LocationManager;

  /**
   * Bot API 8.0+
   * A method that opens the location access settings for bots.
   * Useful when you need to request location access from users who haven't granted it yet.
   *
   * Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button).
   */
  openSettings(): LocationManager;
}
