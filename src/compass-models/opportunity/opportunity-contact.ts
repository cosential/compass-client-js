import { Contact } from '../contact/contact';
import { ContactRole } from './../contact/contact-role';

export interface OpportunityContact {
  id: number;
  Association: string;
  PrimaryContact: boolean;
  Notes: string;
  Contact: Contact;
  ContactRole: ContactRole;
}
