import React from 'react'
import PropTypes from 'prop-types'

import MenuGroup from '../MenuGroup'
import MenuButton from '../MenuButton'

const MenuBar = ({ groups, style }) => {
	return <div
		className='text-editor-menu__bar'
		style={style}>
		{groups.map(group => {
			return <MenuGroup
				key={group.name}
				items={group.items}/>
		})}
	</div>
}

MenuBar.propTypes = {
	groups: PropTypes.array.isRequired,
}

export default MenuBar

