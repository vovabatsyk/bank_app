import React from 'react'
import { Image, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import { useAuth } from '../useAuth'

const cards = [
  {
    id: 'sddsfew',
    number: '3245 3251 9308 2341',
    type: 'Mastercard',
    balance: '8423',
  },
  {
    id: 'kmlc',
    number: '3442 9898 9308 4555',
    type: 'Visa',
    balance: '3685',
  },
  {
    id: 'sdckllk',
    number: '2344 3251 5474 4354',
    type: 'Maestro',
    balance: '4355',
  },
]

export const Cards = () => {
  const { user } = useAuth()
  return (
    <View style={{ position: 'relative' }}>
      {cards.map((card, idx) => (
        <View
          key={card.id}
          style={{
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 20,
            height: 200,
            paddingTop: 30,
            position: idx !== 0 ? 'absolute' : 'relative',
            top: idx === 1 ? 12 : idx === 2 ? 13 : 0,
            left: 0,
            width: '100%',
            zIndex: idx !== 0 ? 1 : 2,
            transform: [{ rotate: idx === 1 ? '13deg' : idx === 2 ? '8deg' : '0deg' }],
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderColor: COLORS.gray,
            borderWidth: 1,
          }}
        >
          <Image
            source={{
              uri: 'https://cdn.imgbin.com/19/18/21/imgbin-chip-pin-solutions-ltd-emv-payment-card-credit-card-chip-rectangular-brown-and-black-sim-card-illustration-BecxwfCimCTSSy8ieXve06qte.jpg',
            }}
            style={{ width: 30, height: 30, marginBottom: 10 }}
          />
          <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>{card.number}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <View>
              <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>Card holder</Text>
              <Text style={{ color: COLORS.white, fontSize: SIZES.h3, fontWeight: 'bold' }}>
                {user.name}
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{
                  uri: 'https://telegraf.design/wp-content/uploads/2021/07/Visa-1976-1992.png',
                }}
                style={{ width: 50, height: 40 }}
              />
              <Text style={{ color: COLORS.white, fontSize: SIZES.h4, fontWeight: 'bold' }}>
                {card.type}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}
