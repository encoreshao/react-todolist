import React, { Component } from 'react'
import ListItem from './listItem'
import Dialog from './dialog'

class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: [
      {
        id: 0,
        name: 'Eat something',
        status: 0
      }, {
        id: 1,
        name: 'Do homework',
        status: 0
      }, {
        id: 2,
        name: 'Go to shopping',
        status: 0
      }, {
        id: 3,
        name: 'Back to Shanghai',
        status: 0
      }
      ]
    }
  }

  addTask (newTask) {
    var allTasks = this.state.list
    allTasks.push(newTask)
    this.setState({list: allTasks})
  }

  updateFinished (todoItem) {
    var sum = 0;
    this.state.list.forEach( (item) => {
        if (item.id === todoItem.id) {
          item.status = todoItem.status;
        }

        if (item.status === 1) {
          sum++
        }
      }
    )

    this.setState({finished: sum})
  }

  updateNumberOfTotal (todoItem) {
    var obj = []
    var sum = 0
    this.state.list.forEach((item) => {
        if (item.id !== todoItem.id) {
          obj.push(item)

          if (item.status === 1) {
            sum++
          }
        }
      }
    )

    this.setState({list: obj, finished: sum})
  }

  render () {
    return (
      <div className="contrainer">
        <h1>TodoList</h1>
        <ul>
          {
            this.state.list.map ((item, index) =>
              <ListItem
                item={item}
                finishedChange={this.updateFinished.bind(this)}
                totalChange={this.updateNumberOfTotal.bind(this)}
                key={index}
               />
            )
          }
          <li>{this.state.finished} Completed / Total of {this.state.list.length} Tasks</li>
        </ul>

        <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length} />
      </div>
    )
  }
}

export default TodoList
