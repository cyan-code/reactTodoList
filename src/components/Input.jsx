import React, { Component, createRef } from 'react'

export default class Input extends Component {
  state = {
    inputValue: ''
  }
  // 创建 ref 对象,用于文本框获取焦点
  myInput = createRef()

  // 将input文本框中输入的值同步到state当中
  inputHander = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 点击提交按钮之后的操作
  onSubmitHander = (e) => {
    e.preventDefault() // 首先清除默认事件
    // 去除开头空格
    const trimSpaceLeft =this.state.inputValue.trimLeft()
    // 正则是否只有空格
    const spaceCheck = trimSpaceLeft.search(/\s+/i)
    // 如果为空或者只有空格就alert
    if (trimSpaceLeft === "" || spaceCheck === 0) {
      alert('enter something!')
      return
    }

    //触发父组件传递的函数，通过父组件定义的修改函数修改父组件state
    this.props.onSubmit(this.state.inputValue) 

    // 完成后清空input框当中的内容
    this.setState({
      inputValue: ''
    })

    // 让文本框重新获得焦点
    // this.refs.myInput.focus() 已被废弃
    this.myInput.current.focus()
  }
  // 敲击回车提交
  enterHander = (e) => {
    if(e.keyCode === 13) {
      this.onSubmitHander(e)
    }
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
            onKeyDown={ this.enterHander }

            // ref= "myInput"
            ref = { this.myInput }
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
