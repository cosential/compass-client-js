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
