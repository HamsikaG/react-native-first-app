import React, {useState, setState} from 'react'
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Button, ScrollView} from 'react-native';

const GoalItem = props => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this,props.goalkey)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>     
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  });
  
  export default GoalItem; 