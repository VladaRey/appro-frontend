'use client'
import { useAppDispatch } from '@/redux/configure-store'
import { useEffect, ReactNode } from 'react'
import { useGetAllProjects } from '@/api/use-get-all-projects'
import { setViewAllProjects } from '@/redux/actions'
import { getProjectInLocalStorage } from '@/services/util/localStorage'
import { ProjectDto } from '@/api/model'

export default function ReduxInitializer({children}: {children: ReactNode}) {
	const dispatch = useAppDispatch()
	const { data: projects } = useGetAllProjects()

	useEffect(() => {
		if (!projects) return

		const projectInLocalStorage = getProjectInLocalStorage()
		if (projectInLocalStorage) {
			const filterProjects = projects.filter((elem: ProjectDto) =>
				projectInLocalStorage.includes(elem.id!)
			)
			dispatch(setViewAllProjects(filterProjects))
		}
	}, [projects, dispatch])

	return <>{children}</>
}
