import React, { Component } from 'react'
import { Navigator, StyleSheet, View } from 'react-native'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

export default class PluralTodo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
        }
      ]
    }
  }

  _onAddStarted = () => {
    this.nav.push({
      'name': 'taskform'
    })
  }

  _onDone = (todo) => {
    console.log('Done: ', todo.task)
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo
    })
    this.setState({ todos: filteredTodos })
  }

  _renderScene = (route, nav) => {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this._onAdd}
            onCancel={this._onCancel}
          />
        )
      default:
      return (
        <View style={styles.container}>
          <TaskList
            onAddStarted={this._onAddStarted}
            onDone={this._onDone}
            todos={this.state.todos}
          />
        </View>
      )
    }
  }

  _configureScene = () => {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  _onAdd = (task) => {
    this.state.todos.push({ task })
    this.setState({ todos: this.state.todos })
    this.nav.pop()
  }

  _onCancel = () => {
    this.nav.pop()
  }

  render () {
    return (
      <Navigator
        configureScene={this._configureScene}
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={((nav) => {
          this.nav = nav
        })}
        renderScene={this._renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})
