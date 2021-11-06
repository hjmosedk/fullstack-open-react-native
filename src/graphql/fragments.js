import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment repositoryFields on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;

export const REVIEW_FIELDS = gql`
  fragment reviewFields on Review {
    id
    text
    rating
    createdAt
    repositoryId
    user {
      id
      username
    }
  }
`;
