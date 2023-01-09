import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, 'Two'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Two'>;
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  console.log('ok here');
  return (
    <flexboxLayout style={styles.container}>

      <label style={styles.text}>Me: 702-521-0815 </label>

      <label style={styles.text}>Wifey: 702-348-7381 </label>

      <label style={styles.text}>Shelley: 815-677-1871 </label>

      <button style={styles.button} onTap={() => navigation.goBack()}>
        Go back
      </button>
    </flexboxLayout>
  );
}

//Message: {route.params.message}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlignment: 'center',
    fontSize: 24,
    color: 'black',
  },
  button: {
    fontSize: 24,
    color: '#2e6ddf',
  },
});
