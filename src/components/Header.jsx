import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class Header extends Component {
  static propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string
  }

  static defaultProps = {
    title: 'Primary title',
    subtitle: 'subPrimary subtitle'
  }
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              { this.props.title }
            </h1>
            <h2 className="subtitle">
              { this.props.subtitle }
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
