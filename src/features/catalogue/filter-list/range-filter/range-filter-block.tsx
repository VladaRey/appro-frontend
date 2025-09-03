import { Fragment, memo, useState } from 'react'
import { Range } from 'react-range'
import { useTranslation } from 'react-i18next'

import classes from './range-filter-block.module.scss'
import catalogueFiltersInfo, {
	RangeOption
} from '@/constants/filter-data/catalogue-filter-info'
import { Button, ButtonType } from '@/components/ui/button/button.component'
import { getNumberFromString } from '@/services/util'

interface Props {
	filterId: string
	// TODO: Change to number?
	initialRange?: { from: string; to: string }

	applyFilter(option: RangeOption): void
}

export const RangeFilterBlock = memo(
	function RangeFilterBlock({ filterId, initialRange, applyFilter }: Props) {
		const { t } = useTranslation()
		
		const filterInfo = catalogueFiltersInfo.get(filterId)
		const option = filterInfo?.options as RangeOption

		const getValidFrom = (fromToValidate: string | undefined) => {
			if (!fromToValidate) return option.minFrom
			const convertedFrom = getNumberFromString(fromToValidate, option.minFrom)

			return convertedFrom < option.minFrom ? option.minFrom : convertedFrom
		}

		const getValidTo = (toToValidate: string | undefined) => {
			if (!toToValidate) return option.maxTo

			const convertedTo = getNumberFromString(toToValidate, option.maxTo)

			return convertedTo > option.maxTo ? option.maxTo : convertedTo
		}

		const getInitialFrom = () => {
			return initialRange?.from
				? String(getValidFrom(initialRange?.from))
				: String(option.minFrom)
		}

		const getInitialTo = () => {
			return initialRange?.to
				? String(getValidTo(initialRange?.to))
				: String(option.maxTo)
		}

		const [from, setFrom] = useState(getInitialFrom())
		const [to, setTo] = useState(getInitialTo())

		if (!filterInfo) {
			console.warn(`filter info for ${filterId} not found`)

			return <Fragment />
		}

		const rangeOptionOnClick = () => {
			const validFrom = getValidFrom(from)
			const validTo = getValidTo(to)
			setFrom(String(validFrom))
			setTo(String(validTo))
			const validRange = {
				...option,
				from: validFrom,
				to: validTo
			}
			applyFilter(validRange)
		}


		return (
			<div className={classes.RangeFilterBlock}>
				<h3 className={classes.RangeFilterBlock_Header}>
					{t(filterInfo.name)}
				</h3>
				<div className={classes.RangeFilterBlock_Range}>
					<input
						onChange={e => setFrom(e.target.value)}
						value={from}
						onKeyDown={e => e.key === 'Enter' && rangeOptionOnClick()}
					/>
					-
					<input
						onChange={e => setTo(e.target.value)}
						value={to}
						onKeyDown={e => e.key === 'Enter' && rangeOptionOnClick()}
					/>
					<Button
						title={'OK'}
						buttonType={ButtonType.TRANSPARENT_SMALL}
						actionHandler={() => rangeOptionOnClick()}
					/>
				</div>

				<div className={classes.RangeFilterBlock_RangeInput}>
					<Range
						values={[Number(from), Number(to)]}
						min={option.minFrom}
						max={option.maxTo}
						onChange={values => {
							const fromValue = values[0]
							const toValue = values[1]
							setFrom(String(fromValue))
							setTo(String(toValue))
						}}
						renderTrack={({ props, children }) => (
							<div
								onMouseDown={props.onMouseDown}
								onTouchStart={props.onTouchStart}
								style={{
									...props.style,
									height: '36px',
									display: 'flex',
									width: '100%'
								}}
							>
								<div
									ref={props.ref}
									style={{
										height: '2px',
										width: '100%',
										borderRadius: '4px',
										background: '#FFB000',
										alignSelf: 'center'
									}}
								>
									{children}
								</div>
							</div>
						)}
						renderThumb={({ props, isDragged }) => {
							const { key, style, ...rest} = props;
							return (
								<div
									key={key}
									{...rest}
								style={{
									...style,
									height: '20px',
									width: '20px',
									borderRadius: '50%',
									backgroundColor: isDragged ? '#EDB528' : '#FFF',
									border: '2px solid #EDB528',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							/>
						)}}
					/>
					<output style={{ marginTop: '30px' }} id='output'>
						{`${option.minFrom} - ${option.maxTo}`}
					</output>
				</div>
			</div>
		)
	}
)
