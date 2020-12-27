import React, { Component } from 'react'
import Item from './Item.jsx'
import propsTypes from 'prop-types'
export default class List extends Component {
  static propsTypes = {
    todos: propsTypes.array
  }
  render() {
    return (
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {
            this.props.todos.length
            ?
            this.props.todos.map(item => {
              return (
                <div className="column is-one-quarter" key={ item.id }>
                  <Item { ...item } onDel ={this.props.onDel}/>
                </div>
              )
            })
            :
            <div style={{margin: '0 auto', marginTop: '100px'}}>待办事项列表为空</div>
          }
        </div>
      </div>
    )
  }
}
