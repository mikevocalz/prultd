'use client'
import { SolitoImage } from 'solito/image';
import { Footer, Div, H2, A, HR, Span, LI, UL, BR } from '@expo/html-elements'
//import GestureLogo from 'app/components/svgs/GestureLogo';
import { Text } from './ui/text';

const WebFooter = () => {
  return (
    <Footer className="relative bottom-0 left-0 right-0 w-full items-center bg-gray-300 drop-shadow-xl sm:p-0">
      <Div className="mx-auto flex w-full max-w-screen-2xl justify-between px-10 py-6 md:flex">
        <Div className="mb-6 md:mb-0">
          <A
            href="https://www.gesture.vip"
            className="items-start justify-start"
          >
            {/* <GestureLogo
                width={200}
                height={250}
                style={{
                  marginTop: 0,
                  marginLeft: -10,
                }}
              /> */}
            <Text>Footer</Text>
          </A>
        </Div>

        <Div className="mt-8 grid grid-cols-1 gap-[50px] sm:mt-0 sm:gap-8 md:grid-cols-3 md:space-x-3">
          {/* Connect Section */}
          <Div>
            <H2 className="mb-6 font-[BebasNeue-Bold] text-2xl font-semibold uppercase tracking-wide text-[#2b089f] md:text-3xl">
              Gesture Business
            </H2>
            <UL className="text-gray-800">
              <LI className="mb-4">
                <A>B2B Gifting</A>
              </LI>
              <LI className="mb-4">
                <A>Gesture Merchants</A>
              </LI>
              <LI className="mb-4">
                <A>Gesture for Business</A>
              </LI>
            </UL>
          </Div>

          {/* Connect Section */}
          <Div>
            <H2 className="mb-6 font-[BebasNeue-Bold] text-2xl font-semibold uppercase tracking-wide text-[#2b089f] md:text-3xl">
              Contact Us
            </H2>
            <UL className="text-gray-800">
              <LI className="mb-4">
                <A
                  href="mailto:info@gesture.vip"
                  className="break-all hover:underline"
                >
                  info@gesture.vip
                </A>
              </LI>
            </UL>
          </Div>

          {/* Socials Section */}
          <Div>
            <H2 className="mb-6 font-[BebasNeue-Bold] text-2xl font-semibold uppercase tracking-wide text-[#2b089f] md:text-3xl">
              Socials
            </H2>
            <UL className="text-gray-800">
              <LI className="mb-4">
                <A
                  href="https://www.linkedin.com/company/gogesture/"
                  className="hover:underline"
                >
                  LinkedIn
                </A>
              </LI>
              <LI className="mb-4">
                <A
                  href="https://www.facebook.com/sendagesture"
                  className="hover:underline"
                >
                  Facebook
                </A>
              </LI>
              <LI className="mb-4">
                <A
                  href="http://www.instagram.com/sendagesture"
                  className="hover:underline"
                >
                  Instagram
                </A>
              </LI>
              <LI className="mb-4">
                <A
                  href="http://www.twitter.com/sendagesture"
                  className="hover:underline"
                >
                  Twitter
                </A>
              </LI>
            </UL>
          </Div>
        </Div>
      </Div>

      <HR className="my-0 border-[#fdbf2e] sm:mx-auto lg:my-8" />

      <Div className="w-full items-center bg-[#2b089f] py-3 text-center">
        <Span className="text-sm font-bold text-gray-300">
          © 2024
          <A href="https://www.gesture.vip" className="mx-2 tracking-wider">
            Gesture US Inc. All Rights Reserved.
          </A>
        </Span>
      </Div>
    </Footer>
  )
}

export default WebFooter