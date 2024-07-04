import { InaccessibleMessage } from './inaccessible-message';
import { Message } from './message';

/**
 * This object describes a message that can be inaccessible to the bot. It can be one of:
 * - Message
 * - InaccessibleMessage
 */
export type MaybeInaccessibleMessage = Message | InaccessibleMessage;
