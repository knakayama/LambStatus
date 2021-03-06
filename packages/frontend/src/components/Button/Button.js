import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import classes from './Button.scss'

class Button extends React.Component {
  componentDidMount () {
    let jsElem = ReactDOM.findDOMNode(this.refs.button)
    componentHandler.upgradeElement(jsElem)
  }

  render () {
    let classList
    if (this.props.plain) {
      classList = classnames('mdl-button', 'mdl-js-button', this.props.class, classes.plain)
    } else {
      classList = classnames('mdl-button', 'mdl-js-button', 'mdl-button--raised', this.props.class)
    }
    return (
      <button type='button' onClick={this.props.onClick} ref='button'
        className={classList}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element
  ]),
  class: PropTypes.string,
  plain: PropTypes.bool
}

export default Button
