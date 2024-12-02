import {ReactNode} from 'react'
import { GluestackUIProvider } from 'app/components/ui/gluestack-ui-provider'
import { SafeArea } from './safe-area'



type ProviderProps = {
  children: ReactNode
  mode: 'light' | 'dark' // If mode is limited to 'light' or 'dark'
}

export function Provider({ children, mode }: ProviderProps) {
  return(
    <GluestackUIProvider mode={mode}>
       <SafeArea>
        {children}
        </SafeArea>
    </GluestackUIProvider>
  )
}
