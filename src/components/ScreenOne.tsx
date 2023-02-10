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

const Chdg = () => {
  return (
    <label className="text-2xl mb-4 font-bold text-center">me</label>
  );
};

//style={styles.button}

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <Chdg></Chdg>

      <button  className="text-2xl mb-4 font-bold text-center"
       onTap={() => Dialogs.alert('702-521-0815')}>
        Notes
      </button>

      <button
        className="text-2xl mb-4 font-bold text-center"
        onTap={() =>
          navigation.navigate('Two', { message: 'Hello, world!xxxx' })
        }
      >
        Contacts
      </button>

      <button
        className="text-2xl mb-4 font-bold text-center"
        onTap={() =>
          navigation.navigate('Two', { message: 'Hello, world!xxxx' })
        }
      >
        Insurance cards
      </button>
      
      <button
        className="text-2xl mb-4 font-bold text-center"
        onTap={() =>
          navigation.navigate('Two', { message: 'Hello, world!xxxx' })
        }
      >
        DMV
      </button>

    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#FFFACD',
    justifyContent: 'center',
    paddingBottom: 300,
  },
  button: {
    fontSize: 24,
    color: 'black',
  },
});

//   color: "#2e6ddf",
