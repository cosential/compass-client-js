/**
 * @example Get current user
 * ```
 * //This api endpoint always returns a single element array
 * client.get<User[]>('/user').then(functionres{ 
 *      if (res.success) {
 *          let user = res.result[0]; 
 *          console.log(user.UserId);      
 *      }
 * });
 * ```
 */
export interface User {
  Title: string;
  FirstName: string;
  MI: string;
  LastName: string;
  NickName: string;
  FirmName: string;
  Gender: string;
  UserId: number;
  UserToken: string;
}
