export enum ChatFromType {
  /**
   * A private chat with the user opening the link
   */
  Sender = 'sender',

  /**
   * A private chat
   */
  Private = 'private',

  /**
   * A group chat
   */
  Group = 'group',

  /**
   * A supergroup chat
   */
  Supergroup = 'supergroup',

  /**
   * A channel chat
   */
  Channel = 'channel',
}
