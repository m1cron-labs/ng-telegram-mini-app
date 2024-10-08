/**
 * This object represents a service message about a video chat scheduled in the chat.
 */
export interface VideoChatScheduled {
  /**
   * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator
   */
  start_date: number;
}
