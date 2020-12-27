import React, { Component } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
export default class app extends Component {
  state = {
    todos: Array(6).fill(null).map((v,i) => ({
      id: i,
      title: 'todo content' + i,
      completed: false
    }))
  }

  // 定义一个向state当中添加新数据的函数，参数可以通过子组件传递过来的值进行设置
  changeState = (title) => {
    this.setState({
      todos: [
        {
          id: Math.random(),
          title,
          ccompleted: false
        },
        ...this.state.todos
      ]
    })
  }
  
  render() {
    return (
      <div>
        <Header title="待办事项列表" subtitle="created by Cyan"/>
        
        <Input onSubmit={this.changeState}/>
  
        <List todos={ this.state.todos } />
      </div>
    )
  }
}
