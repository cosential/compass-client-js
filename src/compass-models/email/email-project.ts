/**
 * @example Read Projects associated to an Email
 * ```
 * client.get<EmailProject[]>('/emails/12345/projects').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.ProjectId); });
 *      }
 * });
 * ```
 * @example Read a Project associated to an Email
 * ```
 * client.get<EmailProject>('/emails/12345/projects/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.ProjectId);
 *      }
 * });
 * ```
 * @example Associate Projects to an Email
 * ```
 * // payload is an array of EmailProject elements to be added
 * client.post<EmailProject[]>('/emails/12345/projects', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProjectId });
 *      }
 * });
 * ```
 * @example Remove Email associated Projects. This removes the association.
 * ```
 * client.delete<EmailProject[]>('/emails/12345/projects').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 */
export interface EmailProject {
  ProjectId: number;
  ProjectName: string;
}
