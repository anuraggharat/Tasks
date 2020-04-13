import React, { useState } from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      <View>

      </View>
      
      <View>
        <TextInput style={styles.input} placeholder="Add a new Task" />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:50
  },
  input:{
    borderBottomColor:"blue",
    borderBottomWidth:1,
    marginBottom:10
  }
});
