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
            this.props.todos.map(item => {
              return (
                <div className="column is-one-quarter" key={ item.id }>
                  <Item { ...item } />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
