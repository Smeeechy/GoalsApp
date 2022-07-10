import { useState } from 'react'
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
  const [goal, setGoal] = useState('')
  const goalIsValid = goal.length > 0

  const inputChangeHandler = value => {
    setGoal(value)
  }

  const addPressHandler = () => {
    props.onConfirm(goal)
    setGoal('')
  }

  const cancelPressHandler = () => {
    props.onCancel()
    setGoal('')
  }

  return (
    <Modal
      style={styles.modal}
      visible={props.modalVisible}
      animationType='slide'
      transparent
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={goal}
          onChangeText={inputChangeHandler}
          placeholder='new goal'
        />
        <View style={styles.buttons}>
          <Button
            style={styles.add}
            onPress={addPressHandler}
            title='add'
            disabled={!goalIsValid}
          />
          <Button
            color='red'
            style={styles.cancel}
            onPress={cancelPressHandler}
            title='cancel'
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'palegreen',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    margin: 15,
    borderRadius: 10,
    padding: 15,
    transform: [{ rotate: '-2deg' }]
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    transform: [{ rotate: '2deg' }]
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: -5,
    transform: [{ rotate: '2deg' }]
  }
})

export default GoalInput
