

import { View, Text } from 'react-native'
import React from 'react'
import Cutout from './Cutout'
import Morpher from './Morpher'

const MorpherButton = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
      className="absolute left-0 right-0 top-0 items-center"
    >
      <Morpher
        height={'80%'}
        width={'80%'}
     
      />
     
    </View>
  )
}

export default MorpherButton