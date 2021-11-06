import { useQuery } from '@apollo/client';

import { GET_AUTH_USER } from '../graphql/queries';

const useMyReviews = (includeReviews) => {
  const variablesInUse = {
    includeReviews,
  };

  const { data, error, loading, ...result } = useQuery(GET_AUTH_USER, {
    variables: variablesInUse,
    fetchPolicy: 'cache-and-network',
  });

  return {
    reviews: data?.authorizedUser.reviews,
    loading,
    error,
    result,
  };
};

export default useMyReviews;
