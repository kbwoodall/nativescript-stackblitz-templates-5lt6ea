import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenDmvProps = {
  route: RouteProp<MainStackParamList, 'Dmv'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Dmv'>;
};

export function ScreenDmv{ navigation, route }: ScreenDmvProps) {
  console.log('ok here again');
  const lower = 'Go back';
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>Elon: 800-123-0815 </label>

      <label style={styles.text}>Bill: 800-456-7381 </label>

      <label style={styles.text}>Warren: 800-789-1871 </label>

      <button style={styles.button} onTap={() => navigation.goBack()}>
        {lower}
      </button>
    </flexboxLayout>
  );
}

//Message: {route.params.message} fontSize: 24,

/*
      <label style={styles.text}>Me: 702-521-0815 </label>

      <label style={styles.text}>Wifey: 702-348-7381 </label>

      <label style={styles.text}>Shelley: 815-677-1871 </label>


*/


const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 300,
    backgroundColor: '#FFFACD',
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
