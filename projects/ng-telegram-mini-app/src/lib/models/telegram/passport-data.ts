import { EncryptedCredentials } from './encrypted-credentials';
import { EncryptedPassportElement } from './encrypted-passport-element';

/**
 * Describes Telegram Passport data shared with the bot by the user.
 */
export interface PassportData {
  /**
   * Array with information about documents and other Telegram Passport elements that was shared with the bot
   */
  data: EncryptedPassportElement[];

  /**
   * Encrypted credentials required to decrypt the data
   */
  credentials: EncryptedCredentials;
}
