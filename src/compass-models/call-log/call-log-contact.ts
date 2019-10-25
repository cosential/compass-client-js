import { Contact } from "../contact/contact";
import { CallLogRole } from "./call-log";

export interface CallLogContact{
    Contact: Contact;
    role: CallLogRole;
}
