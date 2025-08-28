import { ProjectInfo } from '@/features/admin/project-info/project-info.component'

export default async function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
	const { projectId } = await params;

	return <ProjectInfo projectId={projectId} />
}