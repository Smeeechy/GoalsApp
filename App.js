import { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Button
} from 'react-native'
import Goal from './components/Goal'

export default function App() {
  const [goal, setGoal] = useState('')
  const [goalList, setGoalList] = useState([])

  const inputChangeHandler = value => {
    setGoal(value)
  }

  const buttonPressHandler = event => {
    if (goal.length === 0) return
    setGoalList(prev => [...prev, goal])
    setGoal('')
  }

  const goalRemoveHandler = goal => {}

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerHighlight}>
          <View style={styles.header}>
            <Text style={styles.title}>goals!</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={goal}
            onChangeText={inputChangeHandler}
            placeholder='goal go here'
          />
          <Button
            style={styles.button}
            onPress={buttonPressHandler}
            title='add goal'
          />
        </View>
        <ScrollView style={styles.goalList}>
          {goalList.map(item => (
            <Goal text={item} onPress={goalRemoveHandler} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'honeydew',
  },
  container: {
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    backgroundColor: 'white',
    flex: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 8,
    padding: 8
  },
  button: {
    flex: 1
  },
  goalList: {
    flex: 11,
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    marginTop: 20,
    transform: [{ rotate: '2deg' }]
  },
  title: {
    paddingHorizontal: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'navy',
    transform: [
      {
        rotate: '3deg'
      },
      {
        skewX: '15deg'
      }
    ]
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'khaki',
    padding: 15,
    transform: [
      {
        skewX: '-30deg'
      },
      {
        skewY: 'deg'
      },
      {
        rotate: '-10deg'
      }
    ]
  },
  headerHighlight: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'plum',
    borderRadius: 10,
    marginHorizontal: 80,
    transform: [
      {
        rotate: '5deg'
      },
      {
        skewX: '10deg'
      }
    ]
  }
})
