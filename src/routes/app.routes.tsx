import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard/dashboard.screen'
import Register from '../screens/Register/register.screen'

const { Navigator, Screen } = createBottomTabNavigator()

export default function ScreenRoutes() {
  return (
    <Navigator>
      <Screen name="Listagem" component={Dashboard} />
      <Screen name="Cadastrar" component={Register} />
      <Screen name="Resumo" component={Register} />
    </Navigator>
  )
}
