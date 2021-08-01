import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const transformedNumber = (value) => {
  if (value >= 1000) {
    let returnValue = (value / 1000).toFixed(1).toString();

    return returnValue.concat('k');
  }
  return value;
};

const cardHeadStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  imageContainer: {
    flexGrow: 0,
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainText: {
    paddingTop: 20,
    flexGrow: 1,
  },
});

const cardContentStyle = StyleSheet.create({
  container: {
    marginLeft: 85,
    flexDirection: 'row',
  },
  text: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexGrow: 0,
  },
});

const cardFooterStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    flexGrow: 0,
    alignItems: 'center',
    paddingLeft: 25,
  },
});

const CardHead = ({ ownerAvatarUrl, fullName, description }) => {
  return (
    <View style={cardHeadStyles.container}>
      <View style={cardHeadStyles.imageContainer}>
        <Image
          style={cardHeadStyles.image}
          source={{ uri: `${ownerAvatarUrl}` }}
        />
      </View>
      <View style={cardHeadStyles.mainText}>
        <Text fontSize='Heading' fontWeight='bold'>
          {fullName}
        </Text>
        <Text color='textSecondary'>{description}</Text>
      </View>
    </View>
  );
};

const CardContent = ({ language }) => {
  return (
    <View style={cardContentStyle.container}>
      <Text
        style={cardContentStyle.text}
        color='white'
        background='blue'
        fontWeight='bold'
      >
        {language}
      </Text>
    </View>
  );
};

const CardFooter = ({ number, description }) => {
  return (
    <View style={cardFooterStyle.container}>
      <View style={cardFooterStyle.text}>
        <Text fontSize='Heading' fontWeight='bold'>
          {transformedNumber(Number(number))}
        </Text>
        <Text color='textSecondary'>{description}</Text>
      </View>
    </View>
  );
};

const Card = ({ repository }) => {
  const {
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
  } = repository;
  return (
    <View style={{ alignItems: 'stretch' }}>
      <CardHead
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
      />
      <CardContent language={language} />
      <View style={cardFooterStyle.container}>
        <CardFooter number={stargazersCount} description='Stars' />
        <CardFooter number={forksCount} description='Forks' />
        <CardFooter number={reviewCount} description='Reviews' />
        <CardFooter number={ratingAverage} description='Rating' />
      </View>
    </View>
  );
};

export default Card;
