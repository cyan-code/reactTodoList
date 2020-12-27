import React, { Component } from 'react'

export default class Item extends Component {

  render() {
    const {id, title, completed } = this.props

    // 设置删除操作,通过props向父组件传递id
    const delHandler = (e) => {
      e.preventDefault()
      this.props.onDel(id)
    }
    
    return (
      <div className="card">
          <div className="card-content">
            <div className="content">
              { title }
            </div>
          </div>
          <footer className="card-footer">
            <a href="/" className="card-footer-item">标记为{ completed ? '未' : '已' }完成</a>
            <a href="/" className="card-footer-item" onClick={ delHandler }>删除</a>
          </footer>
        </div>
    )
  }
}
