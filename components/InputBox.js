import React from 'react'
import { StyleSheet, Text, View,Button,TextInput,ScrollView, FlatList } from 'react-native';
import { Modal } from 'react-native';



const InputBox = (props) => {


  return (
      <Modal        
      animationType="slide"
      visible={props.modal} >
        <View style={styles.inputcontainer} >
          <TextInput style={styles.input} 
          placeholder="Add a new Task" 
          onChangeText={props.handleChange}
          value={props.todo.title}
          />
            <Button 
            title="Add"
            style={styles.btn}
            onPress={props.addTodo}
            color="#00aced"
            />
      </View>
      </Modal>
        
    )
}

const styles = StyleSheet.create({
  inputcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    display:"flex"
  },
  input:{
    borderBottomWidth:1,
    width:'80%',
    marginBottom:10,
    color:'grey',
  },
  inputholder:{
    width:'90%',
    marginLeft:'5%',
    marginBottom:25,
    borderRadius:20,
    marginTop:'auto',
    flexDirection:'row',
    paddingVertical:10,
    paddingHorizontal:30,
    backgroundColor:'white',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center'
  },

});

export default InputBox