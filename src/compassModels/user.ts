/**
 * 
 * @example
 * ```
 * let client = new compass.Client(...);
 * client.get<Opportunity[]>('/user').then(function(res){ console.log(res.Result.FirstName); });
 * ```
 * 
 */
export class User {
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