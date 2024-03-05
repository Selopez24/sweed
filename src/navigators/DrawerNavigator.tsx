import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Settings from 'src/screens/Settings'
import { HomeNavigator } from './HomeNavigator'
import Profile from 'src/screens/Profile'

const Drawer = createDrawerNavigator()

const commonOptions = { headerShown: false }

export const DrawerNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen name='HomeTabs' component={HomeNavigator} options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen name='Profile' component={Profile} options={commonOptions} />
      <Drawer.Screen name='Settings' component={Settings} options={commonOptions} />
    </Drawer.Navigator>
  )

