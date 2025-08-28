import classes from './visited-projects.module.scss'
import { ProjectDetails } from '@/containers/project-details/project-details'
import { useGetAllProjects } from '@/api/use-get-all-projects'
import { ProjectDto } from '@/api/model'
import { useTranslation } from 'react-i18next'

export const VisitedProjects = () => {
	const { data: projects } = useGetAllProjects()
	const { t } = useTranslation()

	if (!projects) return <div>Loading...</div>

	return (
		<section>
			{projects && (
				<>
					<h2 className={classes['visited-projects__title']}>
						{t('individual.visited_projects.title')}
					</h2>

					<div className={classes['visited-projects__items']}>
						{projects
							.filter((x: ProjectDto, index: number) => index < 3)
							.map((project: ProjectDto, idx: number) => (
								<div
									className={classes.VisitedProjects_ProjectWrapper}
									key={idx}
								>
									<ProjectDetails projectData={project} />
								</div>
							))}
					</div>
				</>
			)}
		</section>
	)
}
