import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource.js';
import { auth } from './auth/resource.js';
import { storage } from './storage/resource';

defineBackend({
  data,
  storage,
  auth
});
