import { User } from './telegram/user';

/**
 * This object contains the data of the Mini App user.
 */
export type WebAppUser = Omit<
  User,
  | 'can_join_groups'
  | 'can_read_all_group_messages'
  | 'supports_inline_queries'
  | 'can_connect_to_business'
> & {
  /**
   * Optional. True, if this user is a bot. Returns in the receiver field only.
   */
  is_bot?: boolean;

  /**
   * Optional. True, if this user allowed the bot to message them.
   */
  allows_write_to_pm?: boolean;

  /**
   * Optional. URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu.
   */
  photo_url?: string;
};
