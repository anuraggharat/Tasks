import React, { useState } from 'react';

import { StyleSheet, Text, View,Button,TextInput,ScrollView,Modal, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [todo, setTodo] = useState({
    title:"",
    id:""
  })
  const [todoslist,setTodoslist]=useState([])
  const [modalFlag,setModal] = useState(false)


  const handleChange=(text)=>{
    setTodo({
      title:text,
      id:Math.floor(Math.random() * 100).toString()
    })
  }
  const handleModal=(modalFlag)=>{
    setModal(!modalFlag)
  }
  const addTodo=()=>{
    console.log(todo)
    setTodoslist([...todoslist,todo])
    setTodo({
      title:"",
      id:""
    })
    handleModal(modalFlag)
  }
  const onDelete=(id)=>{
    setTodoslist(todoslist.filter(item=>{
      return item.id !== id
    }))
  }

  return (
    <View style={styles.container}>
      
  <ScrollView style={styles.todosList}>
          {todoslist.map((item)=>{
            return(
            <TouchableOpacity key={item.id} onPress={()=>onDelete(item.id)}><View key={item.id} style={styles.todo} ><Text key={item.id} style={styles.todoText}>{item.title}</Text></View></TouchableOpacity>
            )
          })}
      </ScrollView>
      
          <Modal
            animationType="slide"
            visible={modalFlag}
                  >
                  <View style={styles.inputholder} >
                    <TextInput style={styles.input} 
                      placeholder="Add a new Task" 
                      onChangeText={handleChange}
                      value={todo.title}
                    />
                      <View style={{flexDirection:'row',width:'80%', justifyContent:'space-evenly'}}>
                        <View style={styles.btn}>
                          <Button 
                            title="Add"
                            style={styles.btn}
                            onPress={addTodo}
                          />
                        </View>
                        <View  style={styles.btn}>
                            <Button title="cancel"   color="red" onPress={()=>handleModal(modalFlag)} />
                        </View>
                      </View>
                  </View>
          </Modal>
          <View>
            <Button title="Add a new Task"   color="grey" onPress={()=>handleModal(modalFlag)} />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex:1,
    backgroundColor:'#fff'
  },
  input:{
    borderBottomWidth:2,
    width:'90%',
    marginBottom:20,
    color:'black',
    paddingBottom:10,
    fontSize:20,
  },
  btn:{
    width:100
  },
  inputholder:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'white',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  todosList:{
    paddingTop:20,
    textAlign:'center',
    paddingHorizontal:'5%',
  },
  todo:{
    marginBottom:10,
    marginHorizontal:'auto',
    width:'100%',
    padding:20,
    backgroundColor:'#7B8788',
    color:'white',    
  },
  todoText:{
    fontSize:20,
    color:"white"
  }
});
