/**
 * Represents a Company associated to an Email.
 * @example Read companies associated to an Email
 * ```
 * client.get<EmailCompany[]>('/emails/5556666/companies').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.CompanyId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a company associated to an Email
 * ```
 * client.get<EmailCompany>('/emails/5556666/companies/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.Name);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate companies to an Email
 * ```
 * //payload is an array of CompanyId's to be added
 * client.post<EmailCompany[]>('/emails/5556666/companies', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Company with id as " + index.CompanyId) + "." } );
 *      } else { //something went wrong
 *          console.log("Company association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated companies. This removes the association.
 * ```
 * client.delete<EmailCompany[]>('/emails/5556666/companies').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ``` 
 * @example Remove Email associated company. This removes the association.
 * ```
 * client.delete<EmailCompany>('/emails/5556666/companies/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailCompany {
  CompanyId: number;
  Name: string;
}
