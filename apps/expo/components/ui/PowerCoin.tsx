import * as React from 'react'
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
} from 'react-native-svg'

interface SvgProps extends React.SVGProps<SVGSVGElement> {
 children: React.ReactNode
}


const PowerCoin = (props: SvgProps) => {
    const { name, children, ...svgProps } = props;

return(
  <Svg
    {...svgProps}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 154.47 154.46"
    width={50}
    height={50}
    style={props.style}
  >
    <Defs>
      <LinearGradient
        id="e"
        x1={-360.42}
        x2={-19.35}
        y1={-464.08}
        y2={-170.23}
        gradientTransform="rotate(-180 -79.285 -139.745)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fccf61" />
        <Stop offset={0.08} stopColor="#fff" />
        <Stop offset={0.19} stopColor="#f4d271" />
        <Stop offset={0.26} stopColor="#d8a73b" />
        <Stop offset={0.32} stopColor="#bf8628" />
        <Stop offset={0.36} stopColor="#b2761f" />
        <Stop offset={0.38} stopColor="#b0741e" />
        <Stop offset={0.47} stopColor="#ad701d" />
        <Stop offset={0.51} stopColor="#b77d25" />
        <Stop offset={0.56} stopColor="#c69133" />
        <Stop offset={0.68} stopColor="#f4d15e" />
        <Stop offset={0.7} stopColor="#f1cd5c" />
        <Stop offset={0.72} stopColor="#e9c355" />
        <Stop offset={0.74} stopColor="#dbb24b" />
        <Stop offset={0.75} stopColor="#c79a3c" />
        <Stop offset={0.77} stopColor="#ae7b29" />
        <Stop offset={0.79} stopColor="#905613" />
        <Stop offset={0.81} stopColor="#965d17" />
        <Stop offset={0.84} stopColor="#a87325" />
        <Stop offset={0.88} stopColor="#c4973b" />
        <Stop offset={0.92} stopColor="#ecc859" />
        <Stop offset={0.94} stopColor="#fad964" />
      </LinearGradient>
      <LinearGradient
        id="a"
        x1={-23.21}
        x2={141.43}
        y1={-50.83}
        y2={159.06}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#d8a73b" />
        <Stop offset={0.08} stopColor="#bf8628" />
        <Stop offset={0.14} stopColor="#b2761f" />
        <Stop offset={0.15} stopColor="#b0741e" />
        <Stop offset={0.22} stopColor="#ad701d" />
        <Stop offset={0.3} stopColor="#b77d25" />
        <Stop offset={0.39} stopColor="#c69133" />
        <Stop offset={0.66} stopColor="#905613" />
        <Stop offset={0.88} stopColor="#905613" />
        <Stop offset={1} stopColor="#3f1400" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={112.16}
        x2={86.29}
        y1={-427.94}
        y2={-365.19}
        gradientTransform="matrix(1 0 0 -1 -7.21 -279.49)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={0.29} stopColor="#fad964" />
        <Stop offset={0.56} stopColor="#f4d15e" />
        <Stop offset={0.59} stopColor="#baa049" />
        <Stop offset={0.63} stopColor="#847235" />
        <Stop offset={0.66} stopColor="#574b24" />
        <Stop offset={0.7} stopColor="#342d17" />
        <Stop offset={0.73} stopColor="#1b180e" />
        <Stop offset={0.76} stopColor="#0c0b08" />
        <Stop offset={0.79} stopColor="#070707" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={-3.4}
        x2={73.12}
        y1={24.9}
        y2={74.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.02} stopColor="#fff" />
        <Stop offset={0.29} stopColor="#fad964" />
        <Stop offset={0.59} stopColor="#f4d15e" />
        <Stop offset={0.65} stopColor="#baa049" />
        <Stop offset={0.72} stopColor="#847235" />
        <Stop offset={0.78} stopColor="#574b24" />
        <Stop offset={0.84} stopColor="#342d17" />
        <Stop offset={0.9} stopColor="#1b180e" />
        <Stop offset={0.96} stopColor="#0c0b08" />
        <Stop offset={1} stopColor="#070707" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={-298.84}
        x2={-197.17}
        y1={-435.61}
        y2={-308.36}
        gradientTransform="rotate(-180 -79.285 -139.745)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fccf61" />
        <Stop offset={0.06} stopColor="#fff" />
        <Stop offset={0.19} stopColor="#f4d271" />
        <Stop offset={0.37} stopColor="#fff" />
        <Stop offset={0.49} stopColor="#fad964" />
        <Stop offset={0.65} stopColor="#f4d15e" />
        <Stop offset={0.76} stopColor="#c5973a" />
        <Stop offset={0.87} stopColor="#9e681e" />
        <Stop offset={0.92} stopColor="#905613" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#a"
        id="i"
        x1={89.56}
        x2={68.13}
        y1={165.97}
        y2={11.61}
      />
      <LinearGradient
        id="j"
        x1={-201.16}
        x2={-233.13}
        y1={-366.42}
        y2={-333.43}
        gradientTransform="rotate(176.1 -65.976 -144.967)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.08} stopColor="#ead8b6" />
        <Stop offset={0.17} stopColor="#d7b270" />
        <Stop offset={0.23} stopColor="#ca9a43" />
        <Stop offset={0.26} stopColor="#c69133" />
        <Stop offset={0.66} stopColor="#905613" />
        <Stop offset={0.73} stopColor="#884f11" />
        <Stop offset={0.83} stopColor="#723d0c" />
        <Stop offset={0.95} stopColor="#4e2003" />
        <Stop offset={1} stopColor="#3f1400" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={4.65}
        x2={125.34}
        y1={-4.83}
        y2={131.6}
        gradientTransform="rotate(45 77.242 77.225)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fccf61" />
        <Stop offset={0.34} stopColor="#d8a73b" />
        <Stop offset={0.49} stopColor="#ba8026" />
        <Stop offset={0.58} stopColor="#ad701d" />
        <Stop offset={0.67} stopColor="#c28d30" />
        <Stop offset={0.86} stopColor="#f4d15e" />
        <Stop offset={0.88} stopColor="#efcb5a" />
        <Stop offset={0.91} stopColor="#e1ba50" />
        <Stop offset={0.94} stopColor="#ca9e3f" />
        <Stop offset={0.98} stopColor="#ab7727" />
        <Stop offset={1} stopColor="#905613" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={155.33}
        x2={56.64}
        y1={127.46}
        y2={-13.81}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#fccf61" />
        <Stop offset={0.28} stopColor="#905613" />
        <Stop offset={0.37} stopColor="#965d17" />
        <Stop offset={0.51} stopColor="#a87325" />
        <Stop offset={0.68} stopColor="#c4973b" />
        <Stop offset={0.88} stopColor="#ecc859" />
        <Stop offset={0.94} stopColor="#fad964" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#b"
        id="l"
        x1={90.14}
        x2={-7.26}
        y1={175.68}
        y2={36.26}
      />
      <LinearGradient
        id="c"
        x1={128.61}
        x2={128.61}
        y1={84.62}
        y2={105.29}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.08} stopColor="#fff" />
        <Stop offset={0.36} stopColor="#a77224" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#c"
        id="m"
        x1={22.12}
        x2={22.12}
        y1={84.62}
        y2={105.29}
      />
      <LinearGradient
        id="d"
        x1={35.72}
        x2={118.18}
        y1={77.23}
        y2={77.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#4c2b0e" />
        <Stop offset={0.77} stopColor="#905613" />
      </LinearGradient>
      <LinearGradient
        xlinkHref="#d"
        id="n"
        x1={98.73}
        x2={118.09}
        y1={96.7}
        y2={96.7}
      />
      <LinearGradient
        xlinkHref="#d"
        id="o"
        x1={98.73}
        x2={118.18}
        y1={57.83}
        y2={57.83}
      />
      <LinearGradient
        xlinkHref="#d"
        id="p"
        x1={60.02}
        x2={93.88}
        y1={112.26}
        y2={112.26}
      />
      <LinearGradient
        xlinkHref="#d"
        id="q"
        x1={60.27}
        x2={93.87}
        y1={42.25}
        y2={42.25}
      />
      <LinearGradient xlinkHref="#d" id="r" x2={55.1} y1={57.83} y2={57.83} />
      <LinearGradient
        xlinkHref="#d"
        id="s"
        x1={35.73}
        x2={55.1}
        y1={96.65}
        y2={96.65}
      />
      <LinearGradient
        xlinkHref="#d"
        id="t"
        x1={59.98}
        x2={93.87}
        y1={76.03}
        y2={76.03}
      />
    </Defs>
    <G
      style={{
        isolation: 'isolate',
      }}
    >
      <G data-name="Power Coin">
        <Path
          d="M0 77.23C0 34.58 34.59 0 77.24 0s77.23 34.58 77.23 77.23-34.58 77.23-77.23 77.23S0 119.88 0 77.23Z"
          style={{
            fill: 'url(#e)',
          }}
        />
        <Path
          d="M77.24 154.46c42.65 0 77.23-34.58 77.23-77.23S119.89 0 77.24 0 0 34.58 0 77.23s34.59 77.23 77.24 77.23Zm0-153.31c41.95 0 76.08 34.13 76.08 76.08s-34.13 76.08-76.08 76.08S1.16 119.18 1.16 77.23 35.29 1.15 77.24 1.15Z"
          style={{
            fill: 'url(#a)',
          }}
        />
        <Path
          d="M23.15 102.64c11.31 20.36 28.07 33.4 52.96 33.4 36.52 0 60.05-28.12 60.05-64.64 0-4.12 12.62-7.43 13.37-7.53a75.9 75.9 0 0 1 1.17 13.24c0 41.2-33.41 74.61-74.6 74.61-27.61 0-51.72-15.01-64.63-37.32-3.47-6.55 9.39-14.58 11.67-11.76Z"
          style={{
            fill: 'url(#f)',
            opacity: 0.7,
            mixBlendMode: 'screen',
          }}
        />
        <Path
          d="M37.62 121.29c-16.65-16.3-24.79-35.9-18.21-59.91 9.66-35.22 43.01-50.48 78.23-40.82 3.98 1.09 10.5-10.21 10.8-10.91-3.94-1.87-8.1-3.44-12.46-4.63C56.24-5.88 15.19 17.51 4.3 57.23c-7.3 26.63.8 53.85 18.9 72.2 5.4 5.08 16.54-5.2 14.43-8.14Z"
          style={{
            fill: 'url(#g)',
            opacity: 0.9,
            mixBlendMode: 'screen',
          }}
        />
        <Path
          d="M3.23 63.88c-12.12 81.57 97.22 118.52 139.15 50.93C102.1 187.97-13.3 145.88 3.23 63.88Z"
          style={{
            fill: '#fff',
          }}
        />
        <Path
          d="M3.23 63.88c-12.12 81.57 97.22 118.52 139.15 50.93C102.1 187.97-13.3 145.88 3.23 63.88Z"
          style={{
            fill: '#c93',
            mixBlendMode: 'color-dodge',
            opacity: 0.84,
          }}
        />
        <Path
          d="M26.78 21.74c36.14-31.01 78.97-23.03 107.37 7.79 18.88 20.5 24.57 52.67 9.82 82.88C184.45 39.37 87.39-35.9 26.78 21.74Z"
          style={{
            fill: '#ff3',
          }}
        />
        <Path
          d="M19.32 77.23c0-31.99 25.93-57.93 57.93-57.93s57.93 25.94 57.93 57.93-25.94 57.93-57.93 57.93-57.93-25.93-57.93-57.93Z"
          style={{
            mixBlendMode: 'screen',
            fill: 'url(#h)',
          }}
        />
        <Path
          d="M77.24 135.16c31.99 0 57.93-25.93 57.93-57.93S109.23 19.3 77.24 19.3 19.31 45.24 19.31 77.23s25.93 57.93 57.93 57.93Zm0-114.71c31.3 0 56.78 25.48 56.78 56.78s-25.47 56.78-56.78 56.78-56.78-25.48-56.78-56.78 25.47-56.78 56.78-56.78Z"
          style={{
            fill: 'url(#i)',
          }}
        />
        <Path
          d="M36.98 38.45c43.26-42.54 112.59 6.47 90.56 60.68C153.59 43.49 78.59-6.89 36.98 38.45Z"
          style={{
            fill: 'url(#j)',
            opacity: 0.8,
            mixBlendMode: 'multiply',
          }}
        />
        <Circle
          cx={77.24}
          cy={77.23}
          r={55.63}
          style={{
            fill: 'url(#k)',
          }}
          transform="rotate(-45 77.242 77.235)"
        />
        <G
          style={{
            mixBlendMode: 'multiply',
          }}
        >
          <Path
            d="M118.69 128.89c-.52 0-1.04-.23-1.41-.68-.67-.82-.59-2.06.19-2.78 13.62-12.49 21.43-30.56 21.43-49.58 0-10.93-2.59-21.75-7.49-31.29-.49-.96-.16-2.15.74-2.67.9-.51 2.03-.16 2.52.79 5.2 10.12 7.95 21.59 7.95 33.17 0 20.16-8.28 39.32-22.71 52.56-.35.32-.78.48-1.22.48Z"
            style={{
              fill: 'url(#b)',
            }}
          />
          <Path
            d="M35.12 128.89c-.43 0-.86-.16-1.21-.48-14.43-13.24-22.72-32.39-22.72-52.56 0-11.58 2.75-23.05 7.95-33.17.49-.96 1.62-1.3 2.52-.79.9.52 1.24 1.72.75 2.67-4.91 9.54-7.5 20.36-7.5 31.29 0 19.02 7.81 37.09 21.43 49.58.78.71.86 1.95.19 2.78-.37.45-.89.68-1.41.68Z"
            style={{
              fill: 'url(#l)',
            }}
          />
        </G>
        <Path
          d="m117.47 125.44 2.53-2.72c.75-.92 1.74-1.95 2.73-3.27.5-.66 1.04-1.34 1.59-2.09.53-.75 1.09-1.55 1.68-2.38.56-.84 1.11-1.74 1.71-2.66.58-.93 1.11-1.94 1.69-2.94.57-1.02 1.06-2.11 1.62-3.2.5-1.12 1.01-2.26 1.54-3.42.45-1.19.95-2.39 1.38-3.62.39-1.26.88-2.49 1.21-3.79.37-1.29.75-2.58 1.02-3.91.33-1.32.58-2.66.8-4.01.49-2.69.76-5.41.95-8.09.02-1.34.11-2.7.1-3.98-.03-1.33-.02-2.67-.09-3.95-.1-1.27-.19-2.52-.29-3.75-.15-1.23-.3-2.43-.45-3.6-.4-2.32-.79-4.52-1.33-6.51-.23-1-.49-1.96-.77-2.85-.26-.9-.51-1.76-.75-2.56-.56-1.57-1.04-2.95-1.48-4.08-.93-2.22-1.46-3.49-1.46-3.49s.65 1.21 1.78 3.33c.52 1.09 1.11 2.43 1.8 3.97.57 1.59 1.35 3.34 1.88 5.37.64 1.99 1.14 4.2 1.66 6.56.2 1.19.42 2.4.63 3.65.17 1.26.27 2.56.41 3.88.1 1.31.12 2.62.19 3.96.05 1.4-.02 2.74-.04 4.14-.17 2.77-.42 5.58-.91 8.35-.24 1.38-.51 2.77-.86 4.12-.3 1.37-.7 2.7-1.09 4.02-.78 2.65-1.8 5.16-2.82 7.56-.57 1.17-1.09 2.35-1.68 3.45-.62 1.09-1.18 2.18-1.81 3.19-.64 1-1.22 2-1.86 2.91-.64.91-1.25 1.8-1.86 2.62-.63.81-1.24 1.58-1.82 2.31-.6.71-1.21 1.35-1.76 1.97-1.09 1.25-2.17 2.21-2.99 3.06-.86.81-1.58 1.39-2.04 1.81-.48.41-.73.63-.73.63Z"
          style={{
            fill: 'url(#c)',
            mixBlendMode: 'screen',
          }}
        />
        <Path
          d="M33.9 128.41s-.27-.23-.77-.68c-.5-.45-1.26-1.07-2.16-1.93-.87-.91-2.01-1.93-3.17-3.25-.58-.66-1.22-1.34-1.86-2.1-.61-.78-1.25-1.6-1.93-2.45-.65-.87-1.28-1.82-1.97-2.78-.67-.97-1.29-2.03-1.96-3.09-.66-1.07-1.26-2.22-1.91-3.38-.62-1.17-1.17-2.41-1.78-3.66-1.09-2.54-2.16-5.2-2.98-8.01-.42-1.4-.84-2.81-1.15-4.26-.37-1.44-.65-2.9-.9-4.37-.52-2.94-.79-5.91-.97-8.84-.02-1.48-.09-2.9-.05-4.38.07-1.42.09-2.81.2-4.21.15-1.4.26-2.77.43-4.11.23-1.32.44-2.61.66-3.87.54-2.49 1.07-4.84 1.75-6.95.56-2.15 1.39-4 1.99-5.69.73-1.63 1.34-3.06 1.89-4.21 1.2-2.25 1.88-3.53 1.88-3.53l-1.56 3.7c-.46 1.19-.97 2.65-1.58 4.32l-.8 2.71c-.3.95-.58 1.95-.82 3.02-.57 2.11-.99 4.44-1.42 6.9-.15 1.24-.31 2.52-.48 3.82-.1 1.3-.2 2.63-.31 3.98-.08 1.36-.06 2.78-.1 4.19 0 1.36.08 2.8.11 4.22.2 2.85.48 5.74 1 8.59.24 1.43.5 2.85.85 4.25.3 1.41.69 2.79 1.09 4.16.36 1.38.88 2.69 1.29 4.02.46 1.31.99 2.58 1.47 3.85.55 1.23 1.1 2.44 1.63 3.62.59 1.15 1.12 2.31 1.72 3.39.62 1.07 1.17 2.14 1.79 3.12.63.97 1.21 1.93 1.81 2.82.62.88 1.22 1.72 1.78 2.52.58.79 1.16 1.52 1.69 2.21 1.05 1.4 2.1 2.49 2.9 3.46l2.69 2.88Z"
          style={{
            fill: 'url(#m)',
            mixBlendMode: 'screen',
          }}
        />
        <Path
          d="m37.43 19.14-2.57-3.89c-3.77 2.59-7.3 5.53-10.53 8.76l3.28 3.32c3.06-3.05 6.35-5.79 9.82-8.18Zm-10.48 8.84-3.28-3.32c-3.19 3.27-6.1 6.84-8.66 10.66l3.85 2.6c2.37-3.52 5.07-6.85 8.09-9.94Zm-8.6 10.72-3.84-2.6c-2.5 3.82-4.66 7.89-6.44 12.16l4.27 1.79C13.99 46.1 16 42.3 18.35 38.7Zm.52 78.25-3.85 2.6c2.56 3.82 5.46 7.38 8.66 10.66l3.28-3.32a70.738 70.738 0 0 1-8.09-9.94ZM76.03 7.03V2.34c-4.64.03-9.17.49-13.57 1.34l.9 4.59c4.13-.79 8.37-1.21 12.67-1.24ZM62.45 8.46l-.9-4.6c-4.51.93-8.87 2.28-13.05 4l1.77 4.32c3.93-1.61 8-2.86 12.19-3.72Zm-13.03 4.08-1.77-4.32c-4.22 1.8-8.24 3.99-12.02 6.52l2.57 3.89c3.56-2.38 7.31-4.42 11.22-6.08ZM11.98 50.91l-4.27-1.79a74.84 74.84 0 0 0-3.96 13.2l4.54.91a70.85 70.85 0 0 1 3.68-12.33Zm.36 53.91-4.27 1.79c1.78 4.27 3.94 8.33 6.44 12.16l3.84-2.6c-2.35-3.6-4.36-7.4-6.01-11.35ZM8.3 91.63l-4.54.91a74.84 74.84 0 0 0 3.96 13.2l4.27-1.79c-1.6-3.97-2.83-8.1-3.68-12.33ZM6.9 77.9H2.26c.03 4.69.48 9.28 1.32 13.73l4.54-.91a72.6 72.6 0 0 1-1.23-12.81Zm1.23-13.74-4.54-.91c-.84 4.45-1.3 9.04-1.32 13.73h4.64c.03-4.35.44-8.63 1.23-12.81Zm125.98-26.24 3.85-2.6a74.613 74.613 0 0 0-8.66-10.65l-3.28 3.32c3.02 3.09 5.72 6.42 8.09 9.94Zm10.56 25.32 4.54-.91a74.84 74.84 0 0 0-3.96-13.2l-4.27 1.79c1.6 3.97 2.83 8.1 3.68 12.33Zm-29.89-44.62 2.57-3.89c-3.78-2.53-7.8-4.71-12.02-6.52l-1.77 4.32c3.9 1.67 7.66 3.7 11.22 6.08Zm10.59 8.7 3.28-3.32a74.844 74.844 0 0 0-10.53-8.76l-2.57 3.89c3.48 2.4 6.77 5.13 9.82 8.18Zm15.27 22.73 4.27-1.79a75.095 75.095 0 0 0-6.44-12.16l-3.84 2.6c2.36 3.6 4.36 7.4 6.01 11.35ZM90.52 3.68c-4.4-.85-8.93-1.31-13.57-1.34v4.69c4.3.03 8.53.45 12.66 1.24l.9-4.59ZM27.61 127.55l-3.28 3.32c3.23 3.23 6.76 6.17 10.53 8.76l2.57-3.89c-3.48-2.4-6.77-5.13-9.82-8.18ZM104.47 7.86a72.547 72.547 0 0 0-13.05-4l-.9 4.6c4.18.86 8.26 2.11 12.18 3.72l1.77-4.32ZM62.46 151.19c4.4.85 8.93 1.31 13.57 1.34v-4.69c-4.3-.03-8.53-.45-12.67-1.24l-.9 4.59Zm28.06-4.77.9 4.6a73.87 73.87 0 0 0 13.05-4l-1.77-4.32c-3.93 1.61-8 2.86-12.19 3.72Zm-13.57 1.42v4.69c4.64-.03 9.17-.49 13.57-1.34l-.9-4.59c-4.13.79-8.37 1.21-12.66 1.24Zm38.59-12.11 2.57 3.89c3.77-2.59 7.3-5.53 10.53-8.76l-3.28-3.32a70.897 70.897 0 0 1-9.82 8.18Zm30.54-58.76h4.64c-.03-4.69-.48-9.28-1.32-13.73l-4.54.91c.79 4.18 1.2 8.47 1.23 12.81Zm-1.23 13.75 4.54.91c.84-4.45 1.3-9.04 1.32-13.73h-4.64c-.03 4.35-.44 8.63-1.23 12.81Zm-3.86 13.24 4.27 1.79a74.84 74.84 0 0 0 3.96-13.2l-4.54-.91c-.85 4.23-2.08 8.35-3.68 12.33Zm-6.36 12.21 3.84 2.6c2.5-3.82 4.66-7.89 6.44-12.16l-4.27-1.79a70.418 70.418 0 0 1-6.01 11.35Zm-8.61 10.72 3.28 3.32c3.19-3.27 6.1-6.84 8.66-10.66l-3.85-2.6a71.316 71.316 0 0 1-8.09 9.94Zm-22.46 15.45 1.77 4.32c4.22-1.8 8.24-3.99 12.02-6.52l-2.57-3.89a68.024 68.024 0 0 1-11.22 6.08Zm-65.36-6.09-2.57 3.89c3.78 2.53 7.8 4.71 12.02 6.52l1.77-4.32c-3.91-1.67-7.66-3.7-11.22-6.08Zm10.3 10.76c4.17 1.72 8.53 3.07 13.05 4l.9-4.6c-4.18-.86-8.26-2.11-12.18-3.72l-1.77 4.32Z"
          style={{
            fill: '#ffc700',
          }}
        />
      </G>
     {/* Insert Icon Here */}

     {children}
    </G>
  </Svg>
)
}


export default PowerCoin