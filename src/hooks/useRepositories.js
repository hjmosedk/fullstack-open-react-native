import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  // not original code - solution found on the internet
  const { error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
  });

  return { repositories, loading, error };
};
// end of unoriginal code

export default useRepositories;
