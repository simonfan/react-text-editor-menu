export const renderLabel = label => {
	return typeof label === 'function' ? label() : label
}
