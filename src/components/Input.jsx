import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    inputValue: ''
  }

  // 将input文本框中输入的值同步到state当中
  inputHander = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 点击提交按钮之后的操作
  onSubmitHander = (e) => {
    e.preventDefault() // 首先清除默认事件

    //触发父组件传递的函数，通过父组件定义的修改函数修改父组件state
    this.props.onSubmit(this.state.inputValue) 

    // 完成后清空input框当中的内容
    this.setState({
      inputValue: ''
    })
  }
  render() {
    return (
      <div className="field is-grouped container" style={{marginTop: '10px'}}>
        <p className="control is-expanded">
          <input type="text"
            className="input"
            placeholder="请输入新待办事项" 
            value={ this.state.inputValue }
            onChange={ this.inputHander }
          />
        </p>
        <p className="control">
          <a 
            href="/" 
            className="button is-info"
            onClick={ this.onSubmitHander }
          >
            添加
          </a>
        </p>
      </div>
    )
  }
}
