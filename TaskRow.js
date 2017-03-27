import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

export default class TaskRow extends Component {

  _onDonePressed = () => {
    this.props.onDone(this.props.todo)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
        <TouchableHighlight
          style={styles.doneButton}
          onPress={this._onDonePressed}
        >
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskRow.propTypes = {
  onDone: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }).isRequired
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: '#e7e7e7',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  doneButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 5,
    padding: 5
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  }
})
