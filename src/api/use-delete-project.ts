import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosWithSetting } from '@/services/server-data/server-data'
import { Project } from '@/entity/Project/project'

type SuccessCallback = () => void;
type ErrorCallback = () => void;

export const useDeleteProject = (
	id: number,
	onSuccess: SuccessCallback,
	onError: ErrorCallback
) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: axiosDeleteProject,
		onSuccess: () => {
			const projects = queryClient.getQueryData(['projects']) as Project[]
			console.log('projects', projects)
			queryClient.setQueryData(
				['projects'],
				projects.filter(p => p.id !== id)
			)
			queryClient.invalidateQueries({
				queryKey: [`projects-${id}`],
				exact: true
			})
			onSuccess()
		},
		onError: () => {
			onError()
		}
	})
}

const axiosDeleteProject = async (id: number) => {
	await axiosWithSetting.delete(`project/${id}`)
}
