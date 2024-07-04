/**
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu,
 * launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 */
export interface WriteAccessAllowed {
  /**
   * Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess
   */
  from_request?: boolean;

  /**
   * Optional. Name of the Web App, if the access was granted when the Web App was launched from a link
   */
  web_app_name?: string;

  /**
   * Optional. True, if the access was granted when the bot was added to the attachment or side menu
   */
  from_attachment_menu?: boolean;
}
