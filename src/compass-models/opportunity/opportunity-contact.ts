import { Contact } from '../contact/contact';
import { OpportunityContactRole } from './opportunity-contact-role';

/**
 * @example Read a Opportunities contacts
 * ```
 * client.get<OpportunityContact[]>('/opportunities/2178463/contacts').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add contact to a opportunity
 * ```
 * // payload is an array of OpportunityContact elements to be added
 * client.post<OpportunityContact[]>('/opportunities/2178463/contacts', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
  ContactRole: OpportunityContactRole;
}
