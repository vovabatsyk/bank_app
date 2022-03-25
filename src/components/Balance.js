import React from 'react'
import { Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'

const card = { balance: 2344 }

export const Balance = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ color: COLORS.lightGray, fontSize: SIZES.h4, marginBottom: 6 }}>Balance</Text>
      <Text style={{ color: COLORS.white, fontSize: SIZES.h2, fontWeight: 'bold' }}>
        ${card.balance}
      </Text>
    </View>
  )
}
