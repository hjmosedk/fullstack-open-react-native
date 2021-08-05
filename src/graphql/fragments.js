import { gql } from '@apollo/client';

export const EDGE_NODE_REPO = gql`
fragment edgeNode on RepositoryEdge {
    edge: {
        node: {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
        }
    }
}`;
