import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Dashboard from './src/screens/Dashboard/dashboard.screen'
import { useStickyImmersiveReset } from './statusBar'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'

export default function App() {
  useStickyImmersiveReset()

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" hidden={false} />

      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </View>
  )
}
