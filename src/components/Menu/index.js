import React from 'react'
import PropTypes from 'prop-types'

import MenuGroup from '../MenuGroup'
import MenuButton from '../MenuButton'

const Menu = ({ groups, style }) => {
	return <div
		className='text-editor-menu'
		style={style}>
		{groups.map(group => {
			return <MenuGroup
				key={group.name}
				items={group.items}/>
		})}
	</div>
}

Menu.propTypes = {
	groups: PropTypes.array.isRequired,
}

export default Menu

