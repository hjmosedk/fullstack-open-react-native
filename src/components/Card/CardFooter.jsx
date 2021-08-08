import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const transformedNumber = (value) => {
  if (NaN) {
    return value;
  }

  if (value >= 1000) {
    let returnValue = (value / 1000).toFixed(1).toString();

    return returnValue.concat('k');
  }
  return value;
};

const cardFooterStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    alignContent: 'space-between',
  },
  text: {
    flexGrow: 1,
    alignItems: 'center',
    paddingLeft: 45,
  },
});

const CardFooter = ({ number, description }) => {
  return (
    <View style={cardFooterStyle.container}>
      <View style={cardFooterStyle.text}>
        <Text testID='footerValue' fontSize='Heading' fontWeight='bold'>
          {transformedNumber(number)}
        </Text>
        <Text color='textSecondary'>{description}</Text>
      </View>
    </View>
  );
};

export default CardFooter;
