import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource.js';
import { storage } from './storage/resource';

defineBackend({
  data,
  storage
});
