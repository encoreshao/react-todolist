import React, { Component } from 'react'

class Dialog extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    var len = this.props.nums
    var newid = len > 0 ? len : 0
    var value = this.refs.myText.value

    if (value !== '') {
      var obj = {
        id: newid,
        name: value,
        status: 0
      }

      this.refs.myText.value = ''
      this.props.addNewTask(obj)
    }
  }

  render () {
    return (
      <div className='add-actions'>
        <span>Task</span>
        <input type='text' ref='myText' placeholder='Plan the next task' />
        <input type='button' value='Save' onClick={this.handleClick} className='task_save-btn' />
      </div>
    )
  }
}

export default Dialog
