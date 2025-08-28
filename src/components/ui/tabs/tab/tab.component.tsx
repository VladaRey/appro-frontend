import classes from './tab.module.scss'

interface Props {
	label: string
	activeTab: boolean

	onClick(label: string): void
}

export const Tab = ({ label, onClick, activeTab }: Props) => {
	const handleClick = () => {
		onClick(label)
	}

	return (
		<li
			className={`${classes.Tab} ${activeTab ? classes.Tab__Active : ''}`}
			onClick={handleClick}
		>
			{label}
		</li>
	)
}
