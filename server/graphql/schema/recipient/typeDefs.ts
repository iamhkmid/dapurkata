import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    recipient(recipientId: ID!): Recipient @auth(requires: AUTH)
    recipients(userId: ID!): [Recipient] @auth(requires: AUTH)
  }
  type Mutation {
    createRecipient(data: cRcptData!): Recipient @auth(requires: USER)
    updateRecipient(data: uRcptData!): Recipient @auth(requires: USER)
    deleteRecipient(recipientId: ID!): Recipient @auth(requires: USER)
  }

  type Recipient {
    id: ID
    firstName: String
    lastName: String
    email: String
    phone: String
    provinceId: String
    provinceName: String
    cityId: String
    cityName: String
    postalCode: String
    address: String
    userId: String
    User: User
    createdAt: Date
    updatedAt: Date
  }

  input cRcptData {
    firstName: String!
    lastName: String
    email: String!
    phone: String!
    cityId: String!
    address: String!
  }

  input uRcptData {
    recipientId: String!
    firstName: String!
    lastName: String
    email: String!
    phone: String!
    cityId: String!
    address: String!
  }
`;

export default typeDefs;
