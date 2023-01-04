import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: FrameNavigationProp<MainStackParamList, 'One'>;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">
        Kerry Woodall
      </label>
      <button style={styles.button} onTap={() => Dialogs.alert('702-521-0815')}>
        Home phone
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate('Two', { message: 'Hello, world!' })}>
         More Numbers

      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    fontSize: 24,
    color: 'black',
  },
});

//   color: "#2e6ddf",
