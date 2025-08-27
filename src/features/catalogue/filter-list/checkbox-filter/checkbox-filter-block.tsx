import { useState, memo } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './checkbox-filter-block.module.scss'
import catalogueFiltersInfo, {
	SingleOption
} from '@/constants/filter-data/catalogue-filter-info'
import { Checkbox } from '@/components/ui/checkbox/checkbox.component'

interface Props {
	filterId: string
	initialOptions?: string[]

	applyFilter(option: SingleOption): void
}

export const CheckboxFilterBlock = memo(
	({ filterId, initialOptions, applyFilter }: Props) => {
		const filterInfo = catalogueFiltersInfo.get(filterId)

		const getInitialState = () => {
			if (!filterInfo) return []
			const defaultOptions = filterInfo.options as SingleOption[]
			const selectedOptionIds = []
			if (initialOptions) {
				for (const defaultOption of defaultOptions) {
					if (initialOptions.indexOf(defaultOption.id) > -1) {
						selectedOptionIds.push(defaultOption.id)
					}
				}
			}

			return selectedOptionIds
		}

		const [options, setOptions] = useState(getInitialState())

		if (!filterInfo) {
			console.warn(`filter info for ${filterId} not found`)

			return <></>
		}

		const optionOnClick = (clickedOption: SingleOption) => {
			const currentOptions = options
			const clickedOptionId = currentOptions.indexOf(clickedOption.id)
			if (clickedOptionId > -1) {
				currentOptions.splice(clickedOptionId, 1)
				clickedOption.isSelected = false
			} else {
				currentOptions.push(clickedOption.id)
				clickedOption.isSelected = true
			}

			setOptions([...currentOptions])
			applyFilter(clickedOption)
		}

		const { t } = useTranslation()

		return (
			<div className={classes.CheckboxFilterBlock}>
				<h3 className={classes.CheckboxFilterBlock_header}>
					{t(filterInfo.name)}
				</h3>
				<ul className={classes.CheckboxFilterBlock_list}>
					{(filterInfo.options as SingleOption[]).map((filterOption, idx) => {
						return (
							<li key={idx} className={classes.CheckboxFilterBlock_item}>
								<Checkbox
									labelName={t(filterOption.name)}
									htmlFor={filterOption.name}
									onClick={() => optionOnClick(filterOption)}
									checked={options.includes(filterOption.id)}
									id={filterOption.name}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
)
