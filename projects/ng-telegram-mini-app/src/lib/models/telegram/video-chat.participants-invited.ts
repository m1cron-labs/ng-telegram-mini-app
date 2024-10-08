import { User } from './user';

/**
 * This object represents a service message about new members invited to a video chat.
 */
export interface VideoChatParticipantsInvited {
  /**
   * New members that were invited to the video chat
   */
  users: User[];
}
