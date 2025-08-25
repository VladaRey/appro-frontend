'use client'
import { Provider } from 'react-redux'
import { store } from '@/redux/configure-store'
import { useAppDispatch } from '@/redux/configure-store'
import { useEffect, ReactNode } from 'react'
import { useGetAllProjects } from '@/api/use-get-all-projects'
import { setViewAllProjects } from '@/redux/actions'
import { getProjectInLocalStorage } from '@/services/util/localStorage'
import { ProjectDto } from '@/api/model'

interface ReduxProviderProps {
    children: ReactNode;
}

export default function ReduxProvider({children}: ReduxProviderProps) {
    return (
			<Provider store={store}>
				<ReduxInitialiser>{children}</ReduxInitialiser>
			</Provider>
		)
}

function ReduxInitialiser({children}: ReduxProviderProps) {
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