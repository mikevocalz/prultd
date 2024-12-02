'use client'
import { ReactNode, ReactElement, useState } from 'react'
import { View, Text, useWindowDimensions, Platform } from 'react-native'
import  WebHeader  from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";
import { useRouter } from 'solito/router';
import { usePathname } from 'solito/navigation';
import { Main, Div }from '@expo/html-elements'


const WebLayout = ({ children }: { children: ReactNode }) => {
 

  return (
    <Div className="h-full w-screen flex-1 bg-gray-100 pt-[70px]">
      <WebHeader />

      <Main className="no-scrollbar container -z-40 h-full min-h-[100vh] mx-auto self-center max-w-screen-2xl">
        {children}
      </Main>
      <WebFooter />
    </Div>
  )
}



export default WebLayout
