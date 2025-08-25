import { axiosWithSetting } from '@/services/server-data/server-data'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProjectDto } from '@/api/model'

type SuccessCallback = () => void;
type ErrorCallback = () => void;

export const useSaveProject = (onSuccess: SuccessCallback, onError: ErrorCallback) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosSaveProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['project'] })
			onSuccess()
		},
		onError
	})
}

export const useCreateProject = (onSuccess: SuccessCallback, onError: ErrorCallback) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['project'] })
			onSuccess()
		},
		onError
	})
}

const axiosSaveProject = (project: ProjectDto) => {
	// const
	return axiosWithSetting.put(`project/${project.id}`, project)
}

const axiosCreateProject = (project: ProjectDto) => {
	return axiosWithSetting.post('project', project).then(res => res.data)
}
