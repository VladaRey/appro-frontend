import { Container } from '@/containers/hoc/container/container'
import { PopularCategory } from './popular-category/popular-category.component'
import classes from './popular.module.scss'
import { PopularCategoryData } from '@/entity/PopularCategoryData/popular-category-data'
import { useTranslation } from 'react-i18next'

interface PropsType {
	popularCategories: PopularCategoryData[]
}

export const Popular = ({ popularCategories }: PropsType) => {
	const { t } = useTranslation()

	return (
		<section id={'popular-category'} className={classes['popularCategories']}>
			<Container>
				<div className={classes['popular-categories__container']}>
					<div className={classes['popular-categories__title']}>
						{t('main.popular_categories.title')}
					</div>

					<div className={classes['popular-categories__items']}>
						{popularCategories.map((category, index) => (
							<PopularCategory categoryData={category} key={index} />
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
