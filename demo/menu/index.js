import React from 'react'
import { render } from 'react-dom'
import { Menu } from '../../src'

import RedoIcon from 'mdi-react/RedoIcon'
import UndoIcon from 'mdi-react/UndoIcon'
import FormatBoldIcon from 'mdi-react/FormatBoldIcon'
import FormatItalicIcon from 'mdi-react/FormatItalicIcon'
import FormatUnderlineIcon from 'mdi-react/FormatUnderlineIcon'
import FormatStrikethroughIcon from 'mdi-react/FormatStrikethroughIcon'
import FormatListBulletedIcon from 'mdi-react/FormatListBulletedIcon'
import FormatListNumbersIcon from 'mdi-react/FormatListNumbersIcon'
import FormatIndentDecreaseIcon from 'mdi-react/FormatIndentDecreaseIcon'

const STATE = {
	undo: {
		possible: false,
	},
	redo: {
		possible: true
	},
	fontStyle: {
		bold: false,
		italic: true,
		underline: true,
	},
	listStyle: 'none',
	textType: false,
}

const menuGroups = state => ([
	{
		name: 'undo-redo',
		items: [
			{
				name: 'undo',
				type: 'button',
				enabled: state.undo.possible,
				command: () => {
					console.log('undo command')
				},
				label: <UndoIcon />
			},
			{
				name: 'redo',
				type: 'button',
				enabled: state.redo.possible,
				command: () => {
					console.log('redo command')
				},
				label: <RedoIcon />
			},
		],
	},
	{
		name: 'font-style',
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
		].map(name => ({
			name,
			type: 'toggle',
			value: state.fontStyle[name] || false,
			enabled: true,
			command: (value) => {
				console.log(`${name} command`)

				renderApp({
					...state,
					fontStyle: {
						...state.fontStyle,
						[name]: value
					}
				})
			},
			icon: ({
				bold: <FormatBoldIcon />,
				italic: <FormatItalicIcon />,
				underline: <FormatUnderlineIcon />,
				strikethrough: <FormatStrikethroughIcon />,
			})[name]
		}))
	},
	{
		name: 'text-type',
		items: [
			{
				name: 'text-type',
				type: 'select',
				command: (value, lastValue) => {
					console.log(`text-type changed from ${lastValue} to ${value}`)

					renderApp({
						...state,
						textType: value
					})
				},
				style: {
					minWidth: '100px',
				},
				value: state.textType,
				options: [
					{
						value: 'h1',
						label: 'Heading 1',
						preview: <h1>Heading 1</h1>,
					},
					{
						value: 'h2',
						label: 'Heading 2',
						preview: <h2>Heading 2</h2>,
					},
					{
						value: 'h3',
						label: 'Heading 3',
						preview: <h3>Heading 3</h3>,
					},
					{
						value: 'h4',
						label: 'Heading 4',
						preview: <h4>Heading 4</h4>,
					},
					{
						value: 'h5',
						label: 'Heading 5',
						preview: <h5>Heading 5</h5>,
					},
					{
						value: 'h6',
						label: 'Heading 6',
						preview: <h6>Heading 6</h6>,
					},
					{
						value: 'normal',
						label: 'Normal',
						preview: 'Normal'
					}
				],
			}
		],
	},
	{
		name: 'list-style',
		items: [
			{
				name: 'bulletList',
				type: 'toggle',
				value: state.listStyle === 'bulletList',
				enabled: true,
				command: (value) => {
					console.log('bulletList')

					renderApp({
						...state,
						listStyle: value ? 'bulletList' : 'none'
					})
				},
				icon: <FormatListBulletedIcon />
			},
			{
				name: 'orderedList',
				type: 'toggle',
				value: state.listStyle === 'orderedList',
				enabled: true,
				command: (value) => {
					console.log('orderedList')

					renderApp({
						...state,
						listStyle: value ? 'orderedList' : 'none'
					})
				},
				icon: <FormatListNumbersIcon />
			},
			{
				name: 'outdent',
				type: 'button',
				enabled: state.listStyle !== 'none',
				command: () => {
					console.log('outdent')
					renderApp({
						...state,
						listStyle: 'none',
					})
				},
				icon: <FormatIndentDecreaseIcon />
			}
		],
	},
])

const renderApp = (state) => {
	render(
		<Menu
			groups={menuGroups(state)}
			style={{
				backgroundColor: 'white',
				padding: '5px',
			}}/>,
		document.getElementById('root')
	)
}

renderApp(STATE)
