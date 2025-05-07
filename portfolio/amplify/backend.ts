import { defineBackend } from '@aws-amplify/backend';
import { sayHello } from './functions/send-sns/resource';
import { data } from './data/resource';

export const backend = defineBackend({
  sayHello,
  data,
});
