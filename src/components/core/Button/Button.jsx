import { PropTypes } from 'prop-types'
import { StyleSheet, Pressable, Text } from 'react-native'
import COLORS from '../../../styles/colors'


const CustomButton = ({ title, style, onPress, textStyle }) => {
  return (
    <Pressable style={({ pressed }) => [pressed ? { opacity: 0.8 } : { opacity: 1 }, styles.button, style]} onPress={onPress} >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable >
  )
}

CustomButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  textStyle: PropTypes.object
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    elevation: 5,
    backgroundColor: COLORS.strong_green

  },
  text: {
    color: 'white'
  }
})

export default CustomButton
