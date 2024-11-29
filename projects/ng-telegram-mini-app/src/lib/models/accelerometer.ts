import { AccelerometerStartParams } from './params/accelerometer.start.params';

/**
 * This object provides access to accelerometer data on the device.
 */
export interface Accelerometer {
  /**
   * Indicates whether accelerometer tracking is currently active.
   */
  readonly isStarted: boolean;

  /**
   * The current acceleration in the X-axis, measured in m/s².
   */
  readonly x: number;

  /**
   * The current acceleration in the Y-axis, measured in m/s².
   */
  readonly y: number;

  /**
   * The current acceleration in the Z-axis, measured in m/s².
   */
  readonly z: number;

  /**
   * Bot API 8.0+ Starts tracking accelerometer data using params of type AccelerometerStartParams.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
   * @param params
   * @param callback
   */
  start: (params: AccelerometerStartParams, callback?: (response: boolean) => void) => Accelerometer;

  /**
   * Bot API 8.0+
   * Stops tracking accelerometer data.
   * If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
   */
  stop: (callback?: (response: boolean) => void) => Accelerometer;
}
