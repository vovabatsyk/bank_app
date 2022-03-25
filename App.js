import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from './constants/theme'
import { Balance } from './src/components/Balance'
import { Cards } from './src/components/Cards'
import { Footer } from './src/components/Footer'
import { Header } from './src/components/Header'

export default function App() {
  return (
    <View
      style={{
        padding: 24,
        paddingTop: 55,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
        height: '100%',
      }}
    >
      <Header />
      <Cards />
      <Balance />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
})
