import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { renderLabel } from '../../util'

const MenuButton = ({ label, icon, enabled, active, onClick, style, className }) => {
	return <button
		className={classnames({
			'text-editor__menu-button': true,
			'text-editor__menu-button--icon': icon ? true : false,
			active,
			enabled,
		})}
		style={style}
		disabled={!enabled}
		onClick={(e) => {
			e.preventDefault()
			onClick()
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
	onClick: PropTypes.func.isRequired,
}

export default MenuButton
