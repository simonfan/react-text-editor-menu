const fs = require('fs')
const path = require('path')

const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const string = require('rollup-plugin-string')

const DEMO_DIR = path.join(__dirname, '../demo')

const demos = fs.readdirSync(DEMO_DIR).filter(name => {
	return fs.statSync(path.join(DEMO_DIR, name)).isDirectory()
})

const demoConfig = demoName => ({
	input: `demo/${demoName}/index.js`,
	output: {
		name: `demo`,
		file: 'index.bundle.js',
		dir: `demo/${demoName}`,
		format: 'iife',
	},
	watch: {},
	plugins: [
		babel({
			babelrc: true,
			exclude: 'node_modules/**'
		}),
		replace({
			'process.env.NODE_ENV': '"development"',
		}),
		resolve({
			browser: true,
		}),
		commonjs({
			namedExports: {
				'node_modules/react-dom/index.js': ['render', 'createPortal', 'findDOMNode'],
				'node_modules/react/index.js': ['Children', 'Component', 'PureComponent', 'createElement'],
			},
		}),
		string({
			include: 'src/**/*.css',
		}),
	]
})

module.exports = demos.map(demoConfig)
