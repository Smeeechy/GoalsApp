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

  const goalRemoveHandler = goal => {
    setGoalList(prev => prev.filter(item => item !== goal))
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerHighlight}>
          <View style={styles.header}>
            <Text style={styles.title}>Goals!</Text>
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
        <View style={styles.goalList}>
          <ScrollView>
            {goalList.map(item => (
              <Goal
                key={Math.random()}
                text={item}
                onPress={goalRemoveHandler}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'honeydew'
  },
  container: {
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20
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
    marginTop: 10,
    transform: [{ rotate: '2deg' }]
  },
  title: {
    paddingHorizontal: 20,
    fontFamily: 'Bodoni 72 Smallcaps',
    fontSize: 42,
    color: 'navy',
    transform: [{ rotate: '3deg' }, { skewX: '15deg' }]
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'khaki',
    padding: 15,
    transform: [{ skewX: '-30deg' }, { skewY: 'deg' }, { rotate: '-10deg' }]
  },
  headerHighlight: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'plum',
    borderRadius: 10,
    marginHorizontal: 80,
    transform: [{ rotate: '5deg' }, { skewX: '10deg' }]
  }
})
