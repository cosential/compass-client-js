/**
 * Represents the User that has successfully authenticated into the Compass API.
 * 
 * @example
 * ```
 * client.get<User[]>('/user').then(function(res){ 
 *      if (res.success) { 
 *          //The API call was successful
 * 
 *          //This api endpoint always returns a single element array
 *          let user = res.result[0]; 
 * 
 *          //Because user is an API response object, properties are proper case, not camel case.
 *          document.write('<h2>Hi, ' + user.FirstName + '! You are authenticated</h2>'); *          
 *      } else {
 *          //Something went wrong
 *          document.write('<h2>Error</h2><div>' + res.message + '</div>');
 *      }
 * });
 * ```
 * 
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