/**
 * Represents a Cosential Feature.
 * @example
 * ```
 * client.get<UserFeature[]>('/user/features').then(function(res){
 *      if (res.success) {
 *          let featurekey = res.result[0].featureKey;
 *          //loop through result to find the desired feature
 *          //featureKey is unique to the feature
 *          console.log("Total features: " + res.result.length);
 *      } else {
 *          console.log("Cound not fetch features. Error Message: " + res.message)
 *      }
 * });
 * ```
 */
export interface UserFeature {
  featureId: number;
  featureName: string;
  featureKey: string;
  isAvailableToUser: number;
  description: string;
  status: string;
  isModule: boolean;
  isAddon: boolean;
  isRequired: boolean;
  createDate: string;
  addonCategory: string;
  addonRibbonLabel: string;
  isPublic: boolean;
  isAdmin: boolean;
  isEnabled: boolean;
  isMetered: boolean;
  lastModifiedDate: string;
  Tags: string;
}
