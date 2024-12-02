'use client'
import { useWindowDimensions } from 'react-native'
import Image from "next/image";
import { Link } from 'solito/link';
import { SolitoImage } from 'solito/image';
import { Footer, Header, Nav, Div } from '@expo/html-elements'
import { MotiLink } from 'solito/moti/app'
import { usePathname } from 'solito/navigation'
import { Pressable } from './ui/pressable';
import { Text } from './ui/text';


//import GestureLogo from './svgs/GestureLogo';
//import SideBar from './SideBar';



const headerLinks: Array<{
  pathname: string
  isActive(pathname: string): boolean
  name: string
  protected?: boolean
}> = [
  {
    pathname: '/',
    isActive: (pathname) => pathname === '/',
    name: 'Home',
  },
  {
    pathname: '/feed',
    isActive: (pathname) => pathname.startsWith('/feed'),
    name: 'Feed',
    protected: false,
  },
  {
    pathname: '/orders',
    isActive: (pathname) => pathname.startsWith('/orders'),
    name: 'Orders',
  }
]

 function WebHeader() {
  let session
  let comments
  const items: number = 10

  const { width, height } = useWindowDimensions();
  const pathname = usePathname()


  return (
    <Header className="headingNav  inset-x-0  fixed left-0 right-0 top-0  z-30 flex h-[70px] w-full flex-1 items-center justify-center bg-gray-100  drop-shadow-xl ">
        <Div className="sticky w-full max-w-screen-2xl flex-row justify-between pr-0">
          <Div className="ml-1 flex items-center justify-center ">
            <Link href="/">
              <Pressable className="relative justify-center ml-2  cursor-pointer transition hover:opacity-90">
                {/* <GestureLogo width={160} height={60} /> */}
                <Text>Logo</Text>
              </Pressable>
            </Link>
          </Div>
          <Nav
            className="hiddenNav"
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8
            }}
          >
            {headerLinks.map((headerLink: any, idx: number) => {
              const active = headerLink.isActive(pathname)

              return (
              
                  <MotiLink
                    key={ idx.toString() + headerLink.name }
                    href={headerLink.pathname}
                    animate={({ hovered, pressed }) => {
                      'worklet'
                      return {
                        scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                      }
                    }}
                    transition={{
                      type: 'timing',
                      duration: 150,
                    }}
                    style={{ marginHorizontal: 8 }}
                  >
                    <Text
                      className={`hidden text-[16px] font-bold leading-10 tracking-wide lg:flex  ${active ? 'text-[#2c09a1] ' : 'text-black'}`}
                    >
                      {headerLink.name}
                    </Text>
                  </MotiLink>
              
              )
            })}

            <Pressable href='/studio'
            className="h-[50px] w-[50px] rounded-full overflow-hidden hover:opacity-[80%] border-[1px] border-neutral-950 ">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Avatar"
                style={{ aspectRatio: 4/4, width: 50, height: 50, }}
              />
            </Pressable>
          </Nav>
          {/* {width <= 800 && (
            <Div className="flex flex-row items-center justify-center ">
              <SideBar />
            </Div>
          )} */}
        </Div>
  
    </Header>
  )
}


export default WebHeader