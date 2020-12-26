import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {id, title, completed } = this.props
    return (
      <div className="card">
          <div className="card-content">
            <div className="content">
              { title }
            </div>
          </div>
          <footer className="card-footer">
            <a href="/" className="card-footer-item">标记为{ completed ? '未' : '已' }完成</a>
            <a href="/" className="card-footer-item">删除</a>
          </footer>
        </div>
    )
  }
}
