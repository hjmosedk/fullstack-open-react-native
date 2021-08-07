import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';

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
    paddingTop: 5,
    flexShrink: 1,
    paddingBottom: 10,
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
        <Text testID='cardTitle' fontSize='Heading' fontWeight='bold'>
          {fullName}
        </Text>
        <Text testID='cardDescription' color='textSecondary'>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default CardHead;
