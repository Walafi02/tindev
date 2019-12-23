import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './app';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
      <Routes />
    </>
  );
}
