import { Text, View, StyleSheet, Pressable } from 'react-native'

const Goal = props => {
  const pressHandler = () => {
    props.onPress(props.id)
  }

  return (
    <View style={styles.goal}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => {
          pressed && styles.pressedItem
        }}
      >
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    backgroundColor: 'beige',
    margin: 5,
    borderRadius: 5,
    transform: [{ rotate: '-2deg' }]
  },
  text: {
    padding: 10,
    paddingHorizontal: 15,
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  pressedItem: {
    opacity: 0.5
  }
})

export default Goal
