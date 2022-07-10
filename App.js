import { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalsList from './components/GoalsList'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [goalList, setGoalList] = useState([])

  const addGoalHandler = goalText => {
    if (goalText.length === 0) return
    setGoalList(prev => [...prev, { text: goalText, id: Math.random() }])
    setShowModal(false)
  }

  const addNewGoalHandler = () => {
    setShowModal(true)
  }

  const cancelAddHandler = () => {
    setShowModal(false)
  }

  const goalRemoveHandler = id => {
    setGoalList(prev => prev.filter(item => item.id !== id))
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.headerHighlight}>
          <View style={styles.header}>
            <Text style={styles.title}>Goals!</Text>
          </View>
        </View>
        <Button title='add new goal' onPress={addNewGoalHandler} />
        <GoalInput
          onConfirm={addGoalHandler}
          onCancel={cancelAddHandler}
          modalVisible={showModal}
        />
        <GoalsList goalList={goalList} onPress={goalRemoveHandler} />
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
  title: {
    paddingHorizontal: 20,
    fontFamily: 'Bodoni 72',
    fontSize: 42,
    color: 'navy',
    transform: [{ rotate: '2deg' }, { skewX: '-25deg' }]
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'khaki',
    padding: 15,
    transform: [{ rotate: '-7deg' }, { skewX: '10deg' }]
  },
  headerHighlight: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'plum',
    borderRadius: 5,
    marginHorizontal: 80,
    transform: [{ rotate: '5deg' }, { skewX: '5deg' }]
  }
})
