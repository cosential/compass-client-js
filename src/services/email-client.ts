import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { EmailAttachmentMetadata } from '../compass-models/email/email-attachment-metadata';
import { EmailAttachment } from '../compass-models/email/email-attachment';
import { Client } from './client';

/**
 * Represents the client service for Emails.
 */
export class EmailClient extends Client {

    /**
     * Associate an attachment to an Email.
     * @param emailId - Cosential email id
     * @param attachments - An array of attachments (Octet string preferred)
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async addAttachment<T>(emailId: number, attachments: T[], opts: RequestOptions = { showErrors: true }): Promise<ResponseData<T>> {
        let createMetadataUrl: string = '/emails/' + emailId + '/attachments';
        let payload: EmailAttachmentMetadata[] = [];
        let attachmentNumber: number = 0;

        if (attachments.length > 0) {
            attachments.forEach(attachment => {
              attachmentNumber++;
              payload.push({
                Id: 0,
                FileName: "AttachmentViaAddIn " + attachmentNumber,
                DeleteRecord: false,
                AttachmentEndpoint: null
              });
            });

            let metadataUrls: ResponseData<EmailAttachmentMetadata[]> = await this.post<EmailAttachmentMetadata[]>(createMetadataUrl, payload);

            if (metadataUrls.result != null && metadataUrls.result.length > 0) {
                let index: number = 0;

                for (let idx = 0; idx < metadataUrls.result.length; idx++) {
                    let endpoint: string = metadataUrls.result[idx].AttachmentEndpoint;

                    let attachment: EmailAttachment = {
                        data: attachments[index]
                    }

                    await this.put<EmailAttachment>(endpoint.substring(endpoint.indexOf('/emails')), attachment);
                    index++;
                }
                return { success: true, status: 200, error: null, message: 'Attachments created successfully.', result: null }
            } else {
                return { success: false, status: metadataUrls.status, error: null, message: 'Metadata creation failed. No attachments created.', result: null }
            }
        } else {
            return { success: true, status: 204, error: null, message: 'No attachments found.', result: null }
        }
    }
}