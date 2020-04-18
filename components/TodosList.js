import React from 'react'
import { StyleSheet, Text, View,Button,TextInput,ScrollView, FlatList } from 'react-native';

const TodosList = (key) => {
    console.log(props)
    return (
        <View style={styles.todo}>
            <Text style={styles.todoText}>{props.title}
            </Text>
            <Icon 
            name="delete" 
            color="#00aced" 
            onPress={()=>props.onDelete(props.id)} />
            
            </View>
    )
}
export default TodosList

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
      borderBottomWidth:2,
      borderBottomColor:'white',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignContent:'center',
      alignItems:'center',
      color:'white',
      
    },
    todoText:{
      fontSize:20,
      color:"#00aced"
    }
  
  });
  