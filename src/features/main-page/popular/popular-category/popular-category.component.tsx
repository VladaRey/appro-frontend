import classes from './popular-category.module.scss'
import { Overlay } from '@/components/ui/overlay/overlay.component'
import { PopularCategoryData } from '@/entity/PopularCategoryData/popular-category-data'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
	categoryData: PopularCategoryData
}

export const PopularCategory = ({ categoryData }: Props) => {
	const { t } = useTranslation()

	return (
		<Link
			href={categoryData.link || ''}
			className={classes['popular-category']}
			onClick={() => window.scrollTo({ top: 0 })}
		>
			<div className={classes['popular-category__body']}>
				<div className={classes['popular-category__img-wrapper']}>
					<Image src={categoryData.image} alt='' />
					<Overlay />
				</div>
				<div className={classes['popular-category__title']}>
					{t(categoryData.title)}
				</div>
			</div>
		</Link>
	)
}
