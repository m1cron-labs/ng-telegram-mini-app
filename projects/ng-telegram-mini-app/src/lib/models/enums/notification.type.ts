export enum NotificationType {
  /**
   * Indicates that a task or action has failed.
   */
  Error = 'error',

  /**
   * Indicates that a task or action has completed successfully.
   */
  Success = 'success',

  /**
   * Indicates that a task or action produced a warning.
   */
  Warning = 'warning',
}
