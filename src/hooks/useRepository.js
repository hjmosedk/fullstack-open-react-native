import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ONE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const [repository, setRepository] = useState();

  // not original code - solution found on the internet
  const { error, loading } = useQuery(GET_ONE_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setRepository(data.repository);
    },
  });

  return { repository, loading, error };
};
// end of unoriginal code

export default useRepository;
