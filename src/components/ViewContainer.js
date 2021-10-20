import React from 'react';
import {View, StyleSheet} from 'react-native';

const ViewContainer = ({children, backgroundColor}) => {
  return <View style={[styles.container, {backgroundColor}]}>{children}</View>;
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default ViewContainer;
