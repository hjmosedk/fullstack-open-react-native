import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useRepository = (id) => {
  const [reviews, setReviews] = useState();

  const { error, loading } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setReviews(data.repository.reviews);
    },
  });

  return { reviews, loading, error };
};

export default useRepository;
