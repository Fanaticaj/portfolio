import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  ContactRequests: a
    .model({
      email: a.string(),
      content: a.string(),
    })
    .authorization((allow) => [allow.authenticated()]), // or add allow.apiKey() here if needed
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

export type Schema = ClientSchema<typeof schema>;