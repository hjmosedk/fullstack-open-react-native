import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS, REVIEW_FIELDS } from './fragments';

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

export const GET_ONE_REPOSITORY = gql`
  ${REPOSITORY_FIELDS}
  query getOneRepository($id: ID!) {
    repository(id: $id) {
      ...repositoryFields
      url
    }
  }
`;

export const GET_REVIEWS = gql`
  ${REVIEW_FIELDS}
  query getReviews($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            ...reviewFields
          }
        }
      }
    }
  }
`;
