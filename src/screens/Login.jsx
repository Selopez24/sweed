import Button from 'components/core/Button'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Logo from '../../assets/logo.svg'

export default function Login({ navigation }) {

  const handleLogin = () => { navigation.navigate('HomeNavigator') }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} width={250} height={40} />
      <Button style={styles.button} title='LOG IN' onPress={handleLogin} />

      <Text style={styles.or} >Or</Text>

      <Button style={styles.button} title='SIGN UP' />

      <Text style={styles.forgotPassword}>Forgot Password</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  button:
    { width: '100%' },
  logo: {
    margin: 50
  },
  or: {
    margin: 20,
    color: '#767676'
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginTop: 20

  },
})
