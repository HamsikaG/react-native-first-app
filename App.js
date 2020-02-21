import React, {useState, setState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);
  // const deleteGoals = () => {
  //   setCourseGoals('');
  // }

  const addGoalHandler = (enteredGoal) =>{
    console.log(enteredGoal);
    setCourseGoals(courseGoals => [...courseGoals, {
      id: Math.random().toString(), 
      value: enteredGoal 
    }
  ]);
  setAddMode(false);
  }

  const cancelAddMode = (mode) => {
    setAddMode(mode)
  }
  const onDelete = (goalkey) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(courseGoal => courseGoal.id  !== goalkey)
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setAddMode(true)}/>
      <GoalInput visible={addMode} addGoalHandler={addGoalHandler} cancelAddMode={cancelAddMode}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem goalkey={itemData.item.id} title={itemData.item.value} onDelete={onDelete}/>
      }/>
    </View>    
  );
}


const styles = StyleSheet.create({
  screen: { 
    padding : 50
  }
});


