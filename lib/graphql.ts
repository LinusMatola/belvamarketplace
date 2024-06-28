// lib/graphql.ts
import { GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT!, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
  },
});

export default graphQLClient;
