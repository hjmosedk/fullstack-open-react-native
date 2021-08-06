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
