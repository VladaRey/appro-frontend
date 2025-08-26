import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import planImage from '@/assets/img/individual-project/plan.jpg'
import classes from './differences.module.scss'

export const Differences = memo(() => {
	const { t } = useTranslation()

	return (
		<div className={classes['differences']}>
			<h2 className={classes['differences__title']}>
				{t('individual.differences.title')}
			</h2>

			<div className={classes['differences__image-wrapper']}>
				<img src={planImage.src} alt='plan image' />
			</div>

			<p> {t('individual.differences.difference1')}</p>
			<p> {t('individual.differences.difference2')}</p>
			<p> {t('individual.differences.difference3')}</p>
			<p> {t('individual.differences.difference4')}</p>
			<p> {t('individual.differences.difference5')}</p>
		</div>
	)
})
