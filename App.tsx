import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import './statusBar'
import { useStickyImmersiveReset } from './statusBar'

export default function App() {
  useStickyImmersiveReset();

  return (
    <View>
      <StatusBar style='dark' hidden={false} />

    </View>
  );
}


