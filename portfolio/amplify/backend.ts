import { defineBackend } from '@aws-amplify/backend';
import { sayHello } from './functions/send-sns/resource';

defineBackend({

  sayHello
});