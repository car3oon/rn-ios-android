import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default function render (styles) {
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
