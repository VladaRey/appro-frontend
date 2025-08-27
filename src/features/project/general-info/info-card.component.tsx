import { ChangeEvent, useState } from 'react'
import { NumericFormat } from 'react-number-format'
import classes from './general-info.module.scss'
import { Button, ButtonType } from '@/components/ui/button/button.component'

import { useTranslation } from 'react-i18next'
import { usePathname } from 'next/navigation'
import { currentHost } from '@/services/server-data/server-data'
import { useModalStore } from '@/modal/order-modal-container.store'

enum TypeOfHouse {
	Original = 'Original',
	Mirrored = 'Mirrored'
}

export interface InfoCardProps {
	title: string
	generalArea: number
	timeToCreate: number
	projectPrice: number
}

export const InfoCard = (props: InfoCardProps) => {
	const [type, setType] = useState<TypeOfHouse>(TypeOfHouse.Mirrored)
	const [buildingIntention, setBuildingIntention] = useState(false)

	const handleChangeType = (e: ChangeEvent<HTMLInputElement>) => {
		setType(e.target.value as TypeOfHouse)
	}

	const handleChangeBuildingIntention = (e: ChangeEvent<HTMLInputElement>) => {
		setBuildingIntention(e.target.checked)
	}

	const { t } = useTranslation()

	const pathname = usePathname()
	const projectLink = currentHost + pathname

	const { openModal } = useModalStore()
	const handleOpenModal = () => {
		openModal(projectLink, t('modal.title_order'))
	}

	return (
		<>
			<div className={classes.GeneralInfo_Body}>
				<form>
					<h2 className={classes.GeneralInfo_Title}>{props.title}</h2>
					<div className={classes.GeneralInfo_Types}>
						<div className={classes.GeneralInfo_Type}>
							<input
								type='radio'
								name='typeOfHouse'
								value={TypeOfHouse.Original}
								onChange={handleChangeType}
								checked={type === TypeOfHouse.Original}
								id={'original'}
							/>
							<label htmlFor='original'>{t('project.description.type1')}</label>
						</div>

						<div className={classes.GeneralInfo_Type}>
							<input
								type='radio'
								name='typeOfHouse'
								value={TypeOfHouse.Mirrored}
								id={'mirrored'}
								onChange={handleChangeType}
								checked={type === TypeOfHouse.Mirrored}
							/>
							<label htmlFor='mirrored'>{t('project.description.type2')}</label>
						</div>
					</div>

					<div className={classes.GeneralInfo_InfoRows}>
						<div className={classes.GeneralInfo_InfoRow}>
							<div className={classes.GeneralInfo_InfoKey}>
								{t('project.description.area')}
							</div>
							<div className={classes.GeneralInfo_InfoValue}>
								{props.generalArea} м<sup>2</sup>
							</div>
						</div>

						<div className={classes.GeneralInfo_InfoRow}>
							<div className={classes.GeneralInfo_InfoKey}>
								{t('project.description.time_to_create')}
							</div>
							<div className={classes.GeneralInfo_InfoValue}>
								{props.timeToCreate} {t('project.description.days')}
							</div>
						</div>

						<div className={classes.GeneralInfo_InfoRow}>
							<div className={classes.GeneralInfo_InfoKey}>
								{t('project.description.price')}
							</div>
							<div className={classes.GeneralInfo_InfoValue}>
								<NumericFormat
									value={props.projectPrice}
									displayType={'text'}
									thousandSeparator={' '}
									suffix={' грн'}
								/>
							</div>
						</div>
					</div>

					<div className={classes.GeneralInfo_InfoRows}>
						<input
							type='checkbox'
							id={'buildingIntention'}
							checked={buildingIntention}
							onChange={handleChangeBuildingIntention}
						/>
						<label htmlFor={'buildingIntention'}>
							{t('project.description.add_building_intention')}
						</label>
					</div>

					<div className={classes.GeneralInfo_Button}>
						<Button
							actionHandler={handleOpenModal}
							isButton
							title={t('project.description.order_button')}
							buttonType={ButtonType.EXTENDED}
						/>
					</div>
				</form>
			</div>
		</>
	)
}
