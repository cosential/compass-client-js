/**
 * Represents a Project associated to an Email.
 * @example Read projects associated to an email
 * ```
 * client.get<EmailProject[]>('/emails/5556666/projects').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.ProjectId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a project associated to an Email
 * ```
 * client.get<EmailProject>('/emails/5556666/projects/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.ProjectId + ' ' + res.result.ProjectName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate projects to an Email
 * ```
 * //payload is an array of ProjectId's to be added
 * client.post<EmailProject[]>('/emails/5556666/projects', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Project with id as " + index.ProjectId) + "." } );
 *      } else { //something went wrong
 *          console.log("Project association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated projects. This removes the association.
 * ```
 * client.delete<EmailProject[]>('/emails/5556666/projects').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated project. This removes the association.
 * ```
 * client.delete<EmailProject>('/emails/5556666/projects/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailProject {
  ProjectId: number;
  ProjectName: string;
}
