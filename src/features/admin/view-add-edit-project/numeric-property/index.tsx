import React from 'react'
import { TextField } from '@mui/material'

interface Props {
	title: string
	value: number | null
	required?: boolean
	disabled?: boolean

	handleProperty(event: React.ChangeEvent<HTMLInputElement>): void
}

const NumericProperty = ({
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
		id='email'
		label={title}
		name={title}
		value={value || ''}
		type={'number'}
		disabled={disabled}
		onChange={event => handleProperty(event as React.ChangeEvent<HTMLInputElement>)}
	/>
)

export default NumericProperty
