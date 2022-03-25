import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS, SIZES } from '../../constants/theme'

export const QuickActions = () => {
  return (
    <View>
      <Text style={{ color: COLORS.lightGray, fontSize: SIZES.h4, marginBottom: 6, marginTop: 10 }}>
        Upcoming payments
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.gray,
            padding: 15,
            borderRadius: 20,
            width: '48%',
          }}
        >
          <Icon name='money' size={35} color={COLORS.lightGray} style={{ padding: 10 }} />
          <Text
            style={{
              fontSize: SIZES.body3,
              color: COLORS.white,
              fontWeight: 'bold',
              marginBottom: 6,
            }}
          >
            Salary
          </Text>
          <Text style={{ fontSize: SIZES.body4, color: COLORS.white, marginBottom: 6 }}>
            Billing information
          </Text>
          <Text style={{ fontSize: SIZES.body3, color: COLORS.white, fontWeight: 'bold' }}>
            + $2000
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.gray,
            padding: 15,
            borderRadius: 20,
            width: '48%',
          }}
        >
          <Icon name='paypal' size={35} color={COLORS.lightGray} style={{ padding: 10 }} />
          <Text
            style={{
              fontSize: SIZES.body3,
              color: COLORS.white,
              fontWeight: 'bold',
              marginBottom: 6,
            }}
          >
            Paypal
          </Text>
          <Text style={{ fontSize: SIZES.body4, color: COLORS.white, marginBottom: 6 }}>
            Payment information
          </Text>
          <Text style={{ fontSize: SIZES.body3, color: COLORS.white, fontWeight: 'bold' }}>
            + $1828
          </Text>
        </View>
      </View>
    </View>
  )
}
