import React, { Component } from 'react'

class ListItem extends Component {
  constructor (props) {
    super(props)

    this.handleFinished = this.handleFinished.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleFinished () {
    var status = this.props.item.status

    status = (status === 0 ? 1 : 0)

    var obj = {
      id: this.props.item.id,
      name: this.props.item.name,
      status: status
    }

    // 将会执行父组件中传过来的方法
    this.props.finishedChange(obj)
  }

  handleDelete () {
    // 将会执行父组件中传过来的方法
    this.props.totalChange(this.props.item)
  }

  render () {
    const item = this.props.item;

    const unfinish = {
      backgroundColor: '#FFFCB5',
      color: '#DEB872'
    }

    const finish = {
      backgroundColor: '#AFFA9D',
      color: '#ea0198',
      textDecoration: 'line-through'
    }

    var itemStyle = item.status === 0 ? unfinish : finish
    var bgColor = item.status === 0 ? '#FFF' : '#A1EAFB'

    return (
      <li key={item.id} style={itemStyle}>
        <span onClick={this.handleFinished}
          id={item.id}
          className='task_check-btn'
          style={{backgroundColor: bgColor}}
        ></span>
        <span>{item.name}</span>
        <span onClick={this.handleDelete} className='task_delete-btn'>Delete</span>
      </li>
    )
  }
}

export default ListItem
