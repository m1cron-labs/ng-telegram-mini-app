import { MessageEntity } from './message.entity';

/**
 * This object contains information about one answer option in a poll.
 */
export interface PollOption {
  /**
   * Option text, 1-100 characters
   */
  text: string;

  /**
   * Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts
   */
  text_entities?: MessageEntity[];

  /**
   * Number of users that voted for this option
   */
  voter_count: number;
}
