import '../global.css'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {Provider} from 'app/provider'
import {Spinner} from 'app/components/ui/spinner'
import colors  from 'tailwindcss/colors'
import { useColorScheme } from '@/hooks/useColorScheme';
import { ActivityIndicator } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import * as ScreenOrientation from 'expo-screen-orientation'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


type RootLayoutNavProps = {
  mode: 'light' | 'dark'
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])


  // async function changeScreenOrientation() {
  //   await ScreenOrientation.lockAsync(
  //     ScreenOrientation.OrientationLock.LANDSCAPE,
  //   )
  // }

  //  useEffect(() => {
  //  changeScreenOrientation()
  //  }, [])

  if (!loaded) {
    return (
      <Provider mode="dark">
        <Spinner size="large" color={colors.gray[500]} className='mt-[40vh]'/>
      </Provider>
    )
  }

  return (
      <RootLayoutNav  mode={'dark'}/>
  )
}

function RootLayoutNav({ mode }: RootLayoutNavProps) {
  const colorScheme = useColorScheme()

  return (
    <Provider mode={mode}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack  screenOptions={{  gestureEnabled:true, }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'fullScreenModal', headerBackVisible:true,headerBackButtonDisplayMode:'minimal' }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}

