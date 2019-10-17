import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { EmailAttachment } from '../compass-models/email/email-attachment';
import { EmailAttachmentMetadata } from '../compass-models/email/email-attachment-metadata';
import { Client } from './client';

/**
 * The client service for any Email-specific requests with special logic.
 */
export class EmailClient extends Client {

  /**
   * @param emailId - Cosential email id
   * @param attachments - An array of attachments (Octet string preferred)
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async addAttachment(
    emailId: number,
    attachments: EmailAttachment[],
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < EmailAttachment > > {
    let createMetadataUrl: string = '/emails/' + emailId + '/attachments';
    let payload: EmailAttachmentMetadata[] = [];

    if (attachments.length > 0) {
      attachments.forEach(attachment => {
        payload.push({
          Id: 0,
          FileName: attachment.filename,
          DeleteRecord: false,
          AttachmentEndpoint: null
        });
      });

      let metadataUrls: ResponseData < EmailAttachmentMetadata[] > = await this.post < EmailAttachmentMetadata[] > (createMetadataUrl, payload, opts);

      if (metadataUrls.result != null && metadataUrls.result.length > 0) {
        metadataUrls.result.forEach(async (metadataResult, index) => {
          let endpoint: string = metadataResult.AttachmentEndpoint;

          let attachment: EmailAttachment = attachments[index];

          let response: ResponseData < EmailAttachment > = await this.put < EmailAttachment > (endpoint.substring(endpoint.indexOf('/emails')), attachment);
          if (!response.success) {
            return response;
          }
        })
        return {
          success: true,
          status: 200,
          error: null,
          message: 'Attachments created successfully.',
          result: null
        }
      } else {
        return {
          success: false,
          status: metadataUrls.status,
          error: metadataUrls.error,
          message: 'Metadata creation failed. No attachments added.',
          result: null
        }
      }
    } else {
      return {
        success: true,
        status: 204,
        error: null,
        message: 'No attachments found.',
        result: null
      }
    }
  }
}
