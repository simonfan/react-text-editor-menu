import React from 'react'
import classnames from 'classnames'
import { findDOMNode } from 'react-dom'

import PropTypes from 'prop-types'

import { renderLabel } from '../../util'

class MenuSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: props.open || false
    }

    this.mounted = false

    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  componentDidMount () {
    this.mounted = true
    document.addEventListener('click', this.handleDocumentClick, false)
    document.addEventListener('touchend', this.handleDocumentClick, false)
  }

  componentWillUnmount () {
    this.mounted = false
    document.removeEventListener('click', this.handleDocumentClick, false)
    document.removeEventListener('touchend', this.handleDocumentClick, false)
  }

  handleDocumentClick (event) {
    if (this.mounted) {
      if (!findDOMNode(this).contains(event.target)) {
        if (this.state.open) {
          this.setState({ open: false })
        }
      }
    }
  }

  render() {
    const { options, value, onChange, style } = this.props
    const selected = options.find(option => option.value === value) || false

    const { open } = this.state

    return <div
      className={classnames({
        'text-editor-menu__select': true,
        open,
      })}
      style={style}>
      <div
        className='text-editor-menu__select__selected'
        onClick={() => {
          this.setState({
            open: !open
          })
        }}>
        {selected ? selected.label : ''}
      </div>
      <ul>
        {options.map(option => {
          return <li
            className={classnames({
              disabled: option.disabled
            })}
            onClick={option.disabled ? null : () => {
              if (option.value !== selected.value) {
                onChange(option.value, selected.value)
              }

              this.setState({ open: false })
            }}
            key={option.value}>
            {renderLabel(option.preview)}
          </li>
        })}
      </ul>
    </div>
  }
}

MenuSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MenuSelect
