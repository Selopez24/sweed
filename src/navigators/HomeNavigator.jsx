import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from 'screens/Home'


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
