import { GyroscopeStartParams } from './params/gyroscope.start.params';

/**
 * This object provides access to gyroscope data on the device.
 */
export interface Gyroscope {
  /**
   * Indicates whether gyroscope tracking is currently active.
   */
  readonly isStarted: boolean;

  /**
   * The current rotation rate around the X-axis, measured in rad/s.
   */
  readonly x: number;

  /**
   * The current rotation rate around the Y-axis, measured in rad/s.
   */
  readonly y: number;

  /**
   * The current rotation rate around the Z-axis, measured in rad/s.
   */
  readonly z: number;

  /**
   * Bot API 8.0+
   * Starts tracking gyroscope data using params of type GyroscopeStartParams.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
   * @param params
   * @param callback
   */
  start: (params: GyroscopeStartParams, callback?: (response: boolean) => void) => Gyroscope;

  /**
   * Bot API 8.0+
   * Stops tracking gyroscope data.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
   */
  stop: (callback?: (response: boolean) => void) => Gyroscope;
}
