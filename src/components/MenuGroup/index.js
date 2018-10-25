import React from 'react'
import PropTypes from 'prop-types'

import MenuButton from '../MenuButton'
import MenuSelect from '../MenuSelect'

const MenuGroup = ({ items, style }) => {
	return <div
		className='text-editor__menu-group'
		style={style}>
		{items.map(item => {
			switch (item.type) {
				case 'button':
					return <MenuButton
						{...item}
						key={item.name}
						active={false}
						onClick={item.command}>
					</MenuButton>
				case 'toggle':
					return <MenuButton
						{...item}
						key={item.name}
						active={item.value}
						onClick={() => {
							item.command(!item.value)
						}}>
					</MenuButton>
				case 'select':
					return <MenuSelect
						{...item}
						key={item.name}
						onChange={item.command} />
				default:
					console.warn(`MenuGroup: unrecognized item type: '${item.type}'`)
			}
		})}
	</div>	
}

MenuGroup.propTypes = {
	items: PropTypes.array.isRequired,
}

export default MenuGroup
