import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../../constants/theme'

export const Footer = () => {
  return (
    <View style={{ paddingTop: 320 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <Icon
          name='home'
          size={30}
          color={COLORS.gray}
          style={{ padding: 10, backgroundColor: COLORS.accent, borderRadius: 50 }}
        />
        <Icon name='user' size={30} color={COLORS.gray} style={{ padding: 10 }} />
        <Icon name='bolt' size={30} color={COLORS.gray} style={{ padding: 10 }} />
        <Icon name='bell' size={30} color={COLORS.gray} style={{ padding: 10 }} />
      </View>
    </View>
  )
}
