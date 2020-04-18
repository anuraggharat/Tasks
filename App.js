import React, { useState } from 'react';

import { StyleSheet, Text, View,Button,TextInput,ScrollView } from 'react-native';

export default function App() {
  
  const [todo, setTodo] = useState("")
  const [todoslist,setTodoslist]=useState([])


  const handleChange=(text)=>{
    setTodo(text)
  }

  const addTodo=()=>{
    
    console.log(todo)

    setTodoslist([...todoslist,todo])
    setTodo('')
  }

  return (
    <View style={styles.container}>
      
  <ScrollView style={styles.todosList}>
          {todoslist.map((item,index)=>{
            return(
            <View style={styles.todo} key={index}><Text style={styles.todoText}>{item}</Text></View>
            )
          })}
      </ScrollView>
      
      <View style={styles.inputholder} >
        <TextInput style={styles.input} 
        placeholder="Add a new Task" 
        onChangeText={handleChange}
        value={todo}
        />
        <Button 
        title="Add"
        style={styles.btn}
        onPress={addTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex:1,
    backgroundColor:'#111'
  },
  input:{
    borderBottomWidth:1,
    width:'80%',
    marginBottom:10,
    color:'grey',
  },
  btn:{
    width:50
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
  todosList:{
    textAlign:'center',
    paddingHorizontal:'5%',
  },
  todo:{
    marginHorizontal:'auto',
    width:'100%',
    padding:20,
    backgroundColor:'#111',
    color:'white',
    
  },
  todoText:{
    fontSize:20,
    color:"white"
  }

});
