import { View, FlatList, StyleSheet } from 'react-native'
import Goal from './Goal'

const GoalsList = props => {
  return (
    <View style={styles.goalList}>
      <FlatList
        data={props.goalList}
        renderItem={itemData => (
          <Goal
            id={itemData.item.id}
            text={itemData.item.text}
            onPress={props.onPress}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  goalList: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    marginTop: 10,
    transform: [{ rotate: '2deg' }]
  },
  empty: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 24,
    color: '#aaa',
    marginTop: 25,
    transform: [{ rotate: '-2deg' }]
  }
})

export default GoalsList
