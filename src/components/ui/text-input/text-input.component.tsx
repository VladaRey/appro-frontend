import classes from './text-input.module.scss'
import { useMask } from '@react-input/mask'

interface Props {
	placeholder: string
	// TODO: Replace with enum!
	type?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

	error?: boolean
	label?: string
	mask?: string
}

export const TextInput = ({
	label,
	type,
	error,
	value,
	onChange,
	placeholder,
	mask
}: Props) => {
	const maskProps = mask ? useMask({ mask }) : {}

	return (
		<div className={classes['text-input']}>
			<input
				className={error ? classes['input__error'] : ''}
				type={type || 'text'}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...maskProps}
			/>
		</div>
	)
}
