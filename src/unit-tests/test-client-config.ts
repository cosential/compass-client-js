import { ClientConfig } from '../service-models/client-config';

const config = new ClientConfig(
  1,
  'sprintuser',
  'Devaccount123!',
  '33c594ca-b5eb-4cea-8173-25d0aef83b6b',
  'https://compass-int.cosentialdev.com/api'
);

export { config as TestClientConfig };
