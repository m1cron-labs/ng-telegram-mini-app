import { Chat } from './chat';

/**
 * This object represents a story.
 */
export interface Story {
  /**
   * Chat that posted the story
   */
  chat: Chat;

  /**
   * Unique identifier for the story in the chat
   */
  id: number;
}
