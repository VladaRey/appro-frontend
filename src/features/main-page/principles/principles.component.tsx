'use client'
import { Container } from '@/containers/hoc/container/container'
import classes from './principles.module.scss'
import { PrincipleItem } from './principle-item/principle-item.component'
import { PrincipleItemData } from '@/entity/PrincipleItemData/principle-item-data'
import { useTranslation } from 'react-i18next'

interface PropsType {
	principlesData: PrincipleItemData[]
}

export const Principles = ({ principlesData }: PropsType) => {
	const { t } = useTranslation()

	return (
		<section className={classes.principles}>
			<Container>
				<div className={classes.principles__container}>
					<div className={classes.principles__title}>
						{t('main.principles.title')}
					</div>

					<div className={classes.principles__body}>
						{principlesData.map((principle, index) => (
							<PrincipleItem key={index} principleItem={principle} />
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
