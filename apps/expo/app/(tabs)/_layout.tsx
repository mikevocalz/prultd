//import { Tabs } from 'expo-router';
import { withLayoutContext, Tabs } from 'expo-router'
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation'
import Icon from '@expo/vector-icons/FontAwesome'

//import { Tabs } from '@/components/bottom-tabs'

import TabBarIcon from '@/components/ui/TabBarIcon'
import React from 'react'
import { Platform, useWindowDimensions } from 'react-native'
import { Center } from 'app/components/ui/center'
import { Pressable } from 'app/components/ui/pressable'
import { View } from 'app/components/ui/view'


import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import FabButton from '@/components/ui/FabButton'
import MorpherButton from '@/components/ui/MorpherButton'
import Cutout from '@/components/ui/Cutout'
import Morpher from '@/components/ui/Morpher'


export default function TabLayout() {
  const colorScheme = useColorScheme()

    const fabRoutes:any = [
      {
        id: 1,
        name: 'index',
        icon: 'home',
      },
      {
        id: 2,
        name: 'modal',
        icon: 'add',
      },
      {
        id: 3,
        name: 'explore',
        icon: 'globe',
      },
      {
        id: 4,
        name: 'modal',
        icon: 'apps',
      },
    ]

const { height, width } = useWindowDimensions()

 
  return (
    <Tabs
      screenOptions={{
        tabBarPosition: 'bottom',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'red',
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarButton: HapticTab,
        //tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          backgroundColor: '#AEAD35',
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'android' ? 7 : 0,
          right: 0,
          left: 0,
          paddingHorizontal: 9,
          borderRadius: 10,
          backgroundColor: 'transparent',
          elevation: 4,
          borderTopWidth: 0,
          //backgroundColor: '#AEAD35',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarItemStyle: {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: '#AEAD35',
            paddingRight: 4,
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} library="Feather" />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list" color={color} library="Feather" />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarItemStyle: {
            backgroundColor: 'transparent',
            //overflowX: 'hidden',
            width: '100%',
            height: '90%',
            zIndex: -100,
            pointerEvents: 'auto',
          },
          title: '',
          // tabBarIcon: ({ color }) => (
          //   <TabBarIcon name="plus" color={color} library="FontAwesome5" />
          // ),

          tabBarButton: (props) => (
            <>
              <FabButton
                {...props}
                routes={fabRoutes}
                // onPress={() => console.log('FAB pressed!')}
              >
                <Morpher
                  height={'76%'}
                  width={'76%'}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    right: Platform.OS === 'android' ? '13%' : 12.5,
                    bottom:Platform.OS === 'android' ?  '2%': -4,
                    zIndex: 1000,
                  }}
                />
              </FabButton>
              <Cutout
                width={width / 2.9}
                height={300}
                style={{
                  position: 'absolute',
                  right: '-44%',
                  top: -14,
                  zIndex: -100,
                  alignSelf: 'center',
                }}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="earth-americas"
              color={color}
              library="FontAwesome6"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarItemStyle: {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#AEAD35',
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user" color={color} library="FontAwesome6" />
          ),
        }}
      />
    </Tabs>
  )
}
