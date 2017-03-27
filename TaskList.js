import React, { Component, PropTypes } from 'react'
import { ListView, StyleSheet, TouchableHighlight, Text, View } from 'react-native'
import TaskRow from './TaskRow'

export default class TaskList extends Component {
  constructor (props, context) {
    super(props, context)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }
  }

  componentWillReceiveProps (nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos)
    this.setState({ dataSource })
  }

  _renderRow = (todo) => {
    return (
      <TaskRow
        todo={todo}
        onDone={this.props.onDone}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this._renderRow}
        />
        <TouchableHighlight
          onPress={this.props.onAddStarted}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add one</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskList.propTypes = {
  onAddStarted: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333',
    borderColor: '#05a0d1',
    borderWidth: 2,
    height: 60,
    justifyContent: 'center',
    margin: 20
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600'
  }
})
