import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useRepository = (id) => {
  const variablesInUse = {
    id,
    first: 5,
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, {
    variables: variablesInUse,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        variablesInUse,
      },
    });
  };

  return {
    reviews: data?.repository.reviews,
    fetchMore: handleFetchMore,
    loading,
    error,
    result,
  };
};

export default useRepository;
