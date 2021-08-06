import { useMutation, useApolloClient } from '@apollo/client';
import useAuthStorage from './useAuthStorage';

import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { username, password },
    });

    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
