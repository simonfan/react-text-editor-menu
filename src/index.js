import insertCss from 'insert-css'

import menuBarStyles from './components/MenuBar/styles.css'
import menuButtonStyles from './components/MenuButton/styles.css'
import menuGroupStyles from './components/MenuGroup/styles.css'
import menuSelectStyles from './components/MenuSelect/styles.css'

insertCss(`
${menuBarStyles}
${menuButtonStyles}
${menuGroupStyles}
${menuSelectStyles}
`)

export { default as MenuBar } from './components/MenuBar'
export { default as MenuButton } from './components/MenuButton'
export { default as MenuGroup } from './components/MenuGroup'
export { default as MenuSelect } from './components/MenuSelect'
