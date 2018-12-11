import React from 'react';
import {View,StyleSheet,Text,Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get("window");
export default class Todo extends React.Component{
  state = {
    isEdit : false,
    isCompleted : false,
  }
  render(){
    const {isCompleted } = this.state;
    return(
      <View style={styles.container2}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
        </TouchableOpacity>
        <Text style={styles.textstyle}>Text123</Text>
      </View>
    );
  }

  _onPressButton = () => {
    this.setState(prevState => {
      return {
        isCompleted : !prevState.isCompleted
      }
    })
  }
}

const styles = StyleSheet.create({
  container2 : {
    width : width-50,
    borderBottomColor : "#bbb",
    borderBottomWidth : StyleSheet.hairlineWidth,
    flexDirection : "row",
    alignItems : "center",
  },
  circle : {
    width: 30,
    height: 30,
    borderRadius : 15,
    backgroundColor : "white",
    borderWidth: 3,
    marginRight : 20,
  },
  completedCircle : {
    borderColor : "#bbb",
  },
  uncompletedCircle : {
    borderColor : "#F23657",
  },
  textstyle : {
    fontWeight : "600",
    fontSize : 18,
    marginVertical : 20
  },
})
