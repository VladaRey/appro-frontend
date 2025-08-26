import { useTranslation } from 'react-i18next'
import classes from './individual-project.module.scss'
import { Container } from '@/containers/hoc/container/container'
import { Differences } from './differences/differences.component'
import { Steps } from './steps/steps.component'
import { Order } from './order/order.component'
import { VisitedProjects } from '@/containers/visited-projects/visited-projects'
// import { Breadcrumbs } from '@/components/ui/breadcrumbs/breadcrumbs.component'

export const IndividualProject = () => {
	const { t } = useTranslation();

	return (
		<div className={classes.IndividualProject}>
			<Container>
				<div className={classes.IndividualProject_Breadcrumbs}>
					{/* <Breadcrumbs /> */}
				</div>
				<div className={classes['individual-project__header']}>
					{t('individual.title')}
				</div>
				<p className={classes['individual-project__description']}>
					{t('individual.description')}
				</p>

				<div className={classes['individual-project__differences-wrapper']}>
					<Differences />
				</div>

				<p className={classes['individual-project__description']}>
					{t('individual.paragraph1')}
				</p>
				<p className={classes['individual-project__description']}>
					{t('individual.paragraph2')}
				</p>
				<p className={classes['individual-project__description']}>
					{t('individual.paragraph3')}
				</p>

				<div className={classes['individual-project__steps-wrapper']}>
					<Steps />
				</div>

				<div className={classes['individual-project__order-wrapper']}>
					<Order />
				</div>
			</Container>
            
			{/* Kind of page Footer, should be out of container */}
			<div className={classes['individual-project__visited-wrapper']}>
				<Container>
					<VisitedProjects />
				</Container>
			</div>
		</div>
	)
}
