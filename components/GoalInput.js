import React, {useState, setState} from 'react';
import { Modal, Text, View, StyleSheet, TextInput, Button, ScrollView} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
      console.log("inside addGoalHandler");
      props.addGoalHandler(enteredGoal);
      setEnteredGoal('');

    }

    const cancelAddMode = () => {
      console.log("inside cancelAddMode");
      props.cancelAddMode(false);
    }


    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Course Goal" 
            style={styles.textInput} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="ADD" onPress={addGoalHandler}/>
            <Button title="CANCEL" onPress={cancelAddMode} color="red" />
        </View> 
      </Modal>    
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center', //main axis
      alignItems: 'center' // cross axis
    },
    textInput:{
      width: '80%', borderColor:'black', borderWidth : 1, padding : 10, marginBottom: 10
     }
  });
  
  export default GoalInput;