import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortBy) => {
  const [repositories, setRepositories] = useState();

  const orderBy = sortBy[0];
  const orderDirection = sortBy[1];
  // not original code - solution found on the internet
  const { error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
    // The following part of the code is original
    variables: { orderBy, orderDirection },
    // End of original code
  });

  return { repositories, loading, error };
};
// end of unoriginal code

export default useRepositories;
