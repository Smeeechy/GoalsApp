import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Goal = props => {
    const pressHandler = () => {
        props.onPress(props.text)
    }

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.goal}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goal: {
    backgroundColor: 'beige',
    padding: 10,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 5,
    transform: [{ rotate: '-2deg' }]
  },
  text: {
      fontFamily: 'Avenir',
      fontWeight: 'bold'
  }
})

export default Goal
