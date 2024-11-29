/**
 * This object contains data about the current location.
 */
export interface LocationData {
  /**
   * Latitude in degrees.
   */
  latitude: number;

  /**
   * Longitude in degrees.
   */
  longitude: number;

  /**
   * Altitude above sea level in meters.
   * null if altitude data is not available on the device.
   */
  altitude: number | null;

  /**
   * The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West).
   * null if course data is not available on the device.
   */
  course: number | null;

  /**
   * The speed of the device in m/s.
   * null if speed data is not available on the device.
   */
  speed: number | null;

  /**
   * Accuracy of the latitude and longitude values in meters.
   * null if horizontal accuracy data is not available on the device.
   */
  horizontal_accuracy: number | null;

  /**
   * Accuracy of the altitude value in meters.
   * null if vertical accuracy data is not available on the device.
   */
  vertical_accuracy: number | null;

  /**
   * Accuracy of the course value in degrees.
   * null if course accuracy data is not available on the device.
   */
  course_accuracy: number | null;

  /**
   * Accuracy of the speed value in m/s.
   * null if speed accuracy data is not available on the device.
   */
  speed_accuracy: number | null;
}
