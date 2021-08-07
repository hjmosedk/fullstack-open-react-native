import React from 'react';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const renderingRepository = repository ? repository : [];

  return <RepositoryItem repository={renderingRepository} button />;
};

export default SingleRepository;
