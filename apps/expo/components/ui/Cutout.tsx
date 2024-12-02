import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Cutout = (props: SvgProps) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 2"
    viewBox={`0 0 130 ${props.height}`}
    //"0 0 130 80"

    width={props.width}
    height={props.height}
    style={props.style}
  >
    <Path
      d="M99.75.17v15.46c0 1.73-.61 3.4-1.71 4.69l-8.11 9.51c-1.67 1.95-4.05 3.07-6.57 3.07H44.44c-2.48 0-4.85-1.09-6.52-3.01l-8.3-9.55a7.227 7.227 0 0 1-1.75-4.74V.12s1.63-.27 0 0C18.17 1.74 6.58 9.7 0 17.41v40.23s15 6.48 66.02 6.48S130 57.64 130 57.64V17.17c-7.51-10.49-23.19-15.71-30.25-17-1.23-.22-.07 0 0 0Z"
      style={{
        fill: '#AEAD35',
        //fill:'orange'
      }}
    />
  </Svg>
)
export default Cutout
