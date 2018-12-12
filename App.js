import React from 'react';
import { StyleSheet, Text, View , StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import Todo from "./todo";

const {height,width} = Dimensions.get("window");
export default class App extends React.Component {
  state = {
    newTodo : "",
  }
  render() {
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>To Do List</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} value={newTodo} onChangeText = {this._controlnewTodo} placeholderTextColor={"#999"} returnKeyType={"done"} autoCorrect = {false}/>
          <ScrollView contentContainerStyle={styles.todos}>
            <Todo text={"To do"}/>
          </ScrollView>
        </View>
      </View>
    );
  }

  _controlnewTodo = text => {
    this.setState({
      newTodo : text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize : 30,
    fontWeight : "500",
    marginTop : 50,
    marginBottom: 30,
  },
  card : {
    backgroundColor : "white",
    flex : 1,
    width : width - 25,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select({
      ios : {
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity : 0.5,
        shadowRadius: 10,
        shadowOffset : {
          height : -1,
          width : 0,
        }
      },
      android : {
        elevation : 5,
      },
    })
  },
  input : {
    padding : 20,
    borderBottomColor: "#bbb",
    borderBottomWidth : 1,
    fontSize : 20,
  },
  todos : {
    alignItems : "center",

  }
});
