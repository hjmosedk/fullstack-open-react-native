import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import CardHead from './CardHead';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const cardFooterContainerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    alignContent: 'space-between',
  },
  button: {
    flexGrow: 0,
  },
});

const Card = ({ repository, button }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    url,
  } = repository;
  return (
    <View>
      <CardHead
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
      />
      <CardContent language={language} />
      <View style={cardFooterContainerStyle.container}>
        <CardFooter number={stargazersCount} description='Stars' />
        <CardFooter number={forksCount} description='Forks' />
        <CardFooter number={reviewCount} description='Reviews' />
        <CardFooter number={ratingAverage} description='Rating' />
      </View>
      {button && (
        <Button
          title='Open in Github'
          onPress={() => {
            WebBrowser.openBrowserAsync(url);
          }}
        />
      )}
    </View>
  );
};

export default Card;
