import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query MyQuery {
    books {
      nodes {
        books {
          fieldGroupName
          title
          description
          level
          url
          format
          image {
            node {
              altText
              link
            }
          }
        }
      }
    }
  }
`;
