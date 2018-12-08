import React from 'react';
import {View,StyleSheet,Text,Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get("window");
export default class Todo extends React.Component{
  state = {
    isEdit : false,
  }
  render(){
    return(
      <View style={styles.container2}>
        <TouchableOpacity>
          <View style={styles.circle}>

          </View>
          <Text style={styles.textstyle}>Text123</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2 : {
    width : width-50,
    borderBottomColor : "#bbb",
    borderBottomWidth : StyleSheet.hairlineWidth,
    flexDirection : "row",
  },
  circle : {

  },
  textstyle : {
    fontWeight : "600",
    fontSize : 18,
    marginVertical : 20
  },
})
