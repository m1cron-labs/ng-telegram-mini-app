import { DeviceOrientationStartParams } from './params/device-orientation.start.params';

/**
 * This object provides access to orientation data on the device.
 */
export interface DeviceOrientation {
  /**
   * Indicates whether device orientation tracking is currently active.
   */
  readonly isStarted: boolean;

  /**
   * A boolean that indicates whether or not the device is providing orientation data in absolute values.
   */
  readonly absolute: boolean;

  /**
   * The rotation around the Z-axis, measured in radians.
   */
  readonly alpha: number;

  /**
   * The rotation around the X-axis, measured in radians.
   */
  readonly beta: number;

  /**
   * The rotation around the Y-axis, measured in radians.
   */
  readonly gamma: number;

  /**
   * Bot API 8.0+
   * Starts tracking device orientation data using params of type DeviceOrientationStartParams.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
   * @param params
   * @param callback
   */
  start(params: DeviceOrientationStartParams, callback?: (response: boolean) => void): DeviceOrientation;

  /**
   * Bot API 8.0+
   * Stops tracking device orientation data.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
   * @param callback
   */
  stop(callback?: (response: boolean) => void): DeviceOrientation;
}
