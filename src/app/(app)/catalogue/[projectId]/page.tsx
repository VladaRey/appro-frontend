'use client'
// import { Breadcrumbs } from '@/components/ui/breadcrumbs/breadcrumbs'
import { Container } from '@/containers/hoc/container/container'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { ProjectTabs } from '@/features/project/project-tabs.component'

import { useGetProjectById } from '@/api/use-get-project-by-id'
import { setViewProject } from '@/redux/actions'
import {
	getProjectInLocalStorage,
	setProjectInLocalStorage
} from '@/services/util/localStorage'
import { useDispatch } from 'react-redux'
import classes from '@/features/project/project.module.scss'


export default function ProjectPage() {
	const { projectId } = useParams() as { projectId: string };
	const { data: project } = useGetProjectById(+projectId)
	const dispatch = useDispatch()

	useEffect(() => {
		const projectInLocalStorage: number[] = getProjectInLocalStorage()
		if (project) {
			const filterProjectInLocalStorage = projectInLocalStorage?.filter(
				elem => elem !== project?.id
			)
			setProjectInLocalStorage([project?.id, ...filterProjectInLocalStorage])
			dispatch(setViewProject(project))
		}
	}, [project])

	if (!project) {
		return <div>Not found</div>
	}

	return (
		<section className={classes.Project}>
			<Container>
				<div className={classes.Project_Breadcrumbs}>
					{/* <Breadcrumbs title={project.title} /> */}
				</div>
				<h1 className={classes.Project_Title}>{project.title}</h1>
				<div className={classes.Project_Body}>
					{project && <ProjectTabs project={project} />}
				</div>
			</Container>
		</section>
	)
}
