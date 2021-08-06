import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query getAllRepositories {
    repositories {
      edges {
        node {
          ...repositoryFields
        }
      }
    }
  }
`;

export const GET_AUTH_USER = gql`
  query getAuthUser {
    authorizedUser {
      id
      username
    }
  }
`;
