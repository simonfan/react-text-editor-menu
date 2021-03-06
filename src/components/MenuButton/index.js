import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { renderLabel } from '../../util'

const MenuButton = ({ label, icon, enabled, active, onMouseDown, style, className }) => {
	return <button
		className={classnames({
			'text-editor-menu__button': true,
			'text-editor-menu__button--icon': icon ? true : false,
			active,
			enabled,
		})}
		style={style}
		disabled={!enabled}
		onMouseDown={(e) => {
			e.preventDefault()
			onMouseDown()
		}}>
		{icon ? renderLabel(icon) : renderLabel(label)}
	</button>
}

MenuButton.propTypes = {
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.element,
	]),
	icon: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.element,
	]),
	enabled: PropTypes.bool.isRequired,
	active: PropTypes.bool.isRequired,
	onMouseDown: PropTypes.func.isRequired,
}

export default MenuButton
