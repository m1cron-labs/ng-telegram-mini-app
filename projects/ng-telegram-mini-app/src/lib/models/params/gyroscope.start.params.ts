/**
 * This object defines the parameters for starting gyroscope tracking.
 */
export interface GyroscopeStartParams {
  /**
   * Optional.
   * The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default.
   * Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
   */
  refresh_rate?: number;
}
