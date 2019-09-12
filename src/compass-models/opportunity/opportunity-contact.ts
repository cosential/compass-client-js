import { Contact } from '../contact/contact';
import { ContactRole } from '../contact-role';

/**
 * @example Read an Opportunity's Contacts
 * ```
 * client.get<OpportunityContact[]>('/opportunities/12345/contacts').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id); });
 *      }
 * });
 * ```
 * @example Add Contact to an Opportunity
 * ```
 * // payload is an array of OpportunityContact elements to be added
 * client.post<OpportunityContact[]>('/opportunities/12345/contacts', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id); });
 *      }
 * });
 * ```
 */
export interface OpportunityContact {
  id: number;
  Association: string;
  PrimaryContact: boolean;
  Notes: string;
  Contact: Contact;
  ContactRole: ContactRole;
}
