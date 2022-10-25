/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Dashboard from './src/screens/Dashboard/dashboard.screen'
import { useStickyImmersiveReset } from './statusBar'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
// FONTS
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  useStickyImmersiveReset()
  const [appIsReady, setAppIsReady] = useState(false)

  // FONTS PROMISES
  useEffect(() => {
    async function prepare() {
      try {
        const fonts = {
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        }
        await Font.loadAsync(fonts)

        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="dark" hidden={false} />

      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </View>
  )
}
