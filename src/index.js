import insertCss from 'insert-css'

import menuStyles from './components/Menu/styles.css'
import menuButtonStyles from './components/MenuButton/styles.css'
import menuGroupStyles from './components/MenuGroup/styles.css'
import menuSelectStyles from './components/MenuSelect/styles.css'

insertCss([
	menuStyles,
	menuButtonStyles,
	menuGroupStyles,
	menuSelectStyles
].join('\n'))

export { default } from './components/Menu'
export { default as MenuButton } from './components/MenuButton'
export { default as MenuGroup } from './components/MenuGroup'
export { default as MenuSelect } from './components/MenuSelect'
