import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import { useAuth } from '../useAuth'

export const Header = () => {
  const { user } = useAuth()
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      <View>
        <Text
          style={{ fontSize: SIZES.h2, fontWeight: 'bold', color: COLORS.white, marginBottom: 5 }}
        >
          Hi {user?.name}
        </Text>
        <Text style={{ fontSize: SIZES.h3, color: COLORS.white }}>Welcome back</Text>
      </View>
      <View>
        <TouchableHighlight>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png',
            }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </TouchableHighlight>
      </View>
    </View>
  )
}
