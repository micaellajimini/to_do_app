import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");
export default class Todo extends React.Component {
  state = {
    isEdit: false,
    isCompleted: false,
    toDoValue: ""
  };
  render() {
    const { isCompleted, isEdit, toDoValue } = this.state;
    const { text } = this.props;
    return (
      <View style={styles.container2}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._finishButton}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle
              ]}
            />
          </TouchableOpacity>
          {isEdit ? (
            <TextInput
              onChangeText={this._controlInput}
              returnKeyType={"done"}
              style={[
                styles.textstyle,
                styles.input,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
              value={toDoValue}
              multiline={true}
              onBlur = {this._finishEditButton}
            />
          ) : (
            <Text
              style={[
                styles.textstyle,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
            >
              {text}
            </Text>
          )}
        </View>
        {isCompleted ? null : isEdit ? (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._finishEditButton}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✔️</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actions}>
            <TouchableOpacity onPressOut={this._editButton}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  _finishButton = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
  _editButton = () => {
    const { text } = this.props;
    this.setState({
      isEdit: true,
      toDoValue: text
    });
  };
  _finishEditButton = () => {
    this.setState({
      isEdit: false
    });
  };
  _controlInput = text => {
    this.setState({
      toDoValue: text
    });
  };
}

const styles = StyleSheet.create({
  container2: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 3,
    marginRight: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  textstyle: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 20
  },
  completedText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  uncompletedText: {
    color: "#353839"
  },
  column: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2
  },
  actions: {
    flexDirection: "row"
  },
  actionContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  actionText: {
    fontSize: 20
  },
  input: {
    width: width / 2,
    marginVertical : 17,
  }
});
