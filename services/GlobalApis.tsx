import request, { gql } from "graphql-request"

const getFreelanceList = async () => {
    const query = gql`
    query Freelancers {
        portofolios {
        description
        createdAt
        id
        from
        rating
        reviews
        slug
        category {
        categoryName
        id
        }
        projectImages {
        url
        }
    }
    }`
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxt3mk2501s307usqzcl9h4e/master', query);
    return result;
}

const getSingleFreelanceItem = async (profileSlug:any) => {
    const query = gql`
    query Freelancer {
        portofolios(where: {slug: "`+profileSlug+`"}) {
        description
        createdAt
        id
        from
        rating
        reviews
        slug
        category {
        categoryName
        id
        }
        projectImages {
        url
        id
        }

    }
    }`
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxt3mk2501s307usqzcl9h4e/master', query);
    return result;
}

const getCategory = async () => {
    const query = gql`
    query Categories {
    categories {
        categoryName
        id
    }
    }
    `
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxt3mk2501s307usqzcl9h4e/master', query);
    return result;
}

const getPricing = async (profileId:any) => {
    const query = gql`
      query MyQuery {
        pricings(where: {portofolio: {id: "`+profileId+`"}}) {
          basicPricing {
            ... on PricingTier {
              id
              cost
              deliveryTime
              features
              revisions
            }
          }
          premiumPricing {
            ... on PricingTier {
              id
              cost
              deliveryTime
              features
              revisions
            }
          }
          standardPricing {
            ... on PricingTier {
              id
              cost
              deliveryTime
              features
              revisions
            }
          }
        }
      }
    `;
    const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxt3mk2501s307usqzcl9h4e/master', query);
    return result;
  }


export default {
    getSingleFreelanceItem,
    getCategory,
    getFreelanceList,
    getPricing
}

