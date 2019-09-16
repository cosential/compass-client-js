import { ContactRoleType } from "./contact-role-type";

export interface ContactRole {
  ContactRoleId: number;
  ContactRoleName: string;
  IsDeleted: boolean;
  ContactRoleType: ContactRoleType;
}
