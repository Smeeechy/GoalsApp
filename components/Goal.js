import { Text, View, StyleSheet } from 'react-native'

const Goal = props => {
  return (
    <View style={styles.goal}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
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
