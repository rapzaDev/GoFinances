import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Dashboard from './src/screens/Dashboard/dashboard.screen';
import './statusBar'
import { useStickyImmersiveReset } from './statusBar'

export default function App() {
  useStickyImmersiveReset();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='dark' hidden={false} />

      <Dashboard />
    </View>
  );
}


