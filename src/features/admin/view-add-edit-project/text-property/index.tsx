import React from 'react'
// import classes from './TextProperty.module.scss';
import { TextField } from '@mui/material'

interface Props {
	title: string
	value: string
	required?: boolean
	disabled?: boolean
	handleProperty(event: React.ChangeEvent<HTMLInputElement>): void
}

const TextProperty = ({
	title,
	value,
	required,
	disabled,
	handleProperty
}: Props) => (
	<TextField
		variant={'outlined'}
		required={required}
		fullWidth
		label={title}
		name={title}
		value={value}
		disabled={disabled}
		onChange={event => handleProperty(event as React.ChangeEvent<HTMLInputElement>)}
	/>
)

export default TextProperty
