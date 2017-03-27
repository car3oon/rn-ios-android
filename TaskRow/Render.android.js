import React from 'react'
import { Image, Text, View, TouchableHighlight, StyleSheet } from 'react-native'

export default function render (styles) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{this.props.todo.task}</Text>
      <TouchableHighlight
        style={localStyle.doneButton}
        onPress={this._onDonePressed}
        underlayColor='#e5e5e5'
      >
        <Image
          source={require('../images/done.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

const localStyle = StyleSheet.create({
  doneButton: {
    borderRadius: 5,
    padding: 5
  }
})
