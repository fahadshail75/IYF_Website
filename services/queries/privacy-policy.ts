import { gql } from "@apollo/client";

export const GET_PRIVACY_POLICY = gql`
  query MyQuery {
    pageBy(uri: "privacy-policy") {
        id
        title
        content
    }
  }
`;
