import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT!, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
  },
});

export default hygraph;
