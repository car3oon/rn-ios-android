import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableHighlight, Text, TextInput, View } from 'react-native'

export default class TaskForm extends Component {
  constructor (props, context) {
    super(props, context)
  }

  _onChange = (text) => {
    this.task = text
  }

  _onAddPressed = () => {
    this.props.onAdd(this.task)
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this._onChange}
          style={styles.input}
        />
        <TouchableHighlight
          onPress={this._onAddPressed}
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            Add
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.onCancel}
          style={[styles.button, styles.cancelButton]}
        >
          <Text
            style={styles.buttonText}
          >
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderRadius: 3
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#05a0d1',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600'
  },
  cancelButton: {
    backgroundColor: '#666'
  }
})
