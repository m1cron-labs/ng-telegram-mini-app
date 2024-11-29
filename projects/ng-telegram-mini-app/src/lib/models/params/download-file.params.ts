/**
 * This object describes the parameters for the file download request.
 */
export interface DownloadFileParams {
  /**
   * The HTTPS URL of the file to be downloaded.
   */
  url: string;

  /**
   * The suggested name for the downloaded file.
   */
  file_name: string;
}
