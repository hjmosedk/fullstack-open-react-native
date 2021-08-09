import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, { result, error }] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const numberRating = Number(rating);

    const { data } = await mutate({
      variables: { repositoryName, ownerName, rating: numberRating, text },
    });

    return { data };
  };

  return [createReview, result, error];
};

export default useCreateReview;
