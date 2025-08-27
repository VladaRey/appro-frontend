import { useState } from 'react'
import { GeneralInfo } from '@/features/project/general-info/general-info.component'
import { ProjectLayout } from '@/features/project/project-layout/project-layout.component'
import { ProjectStructure } from '@/features/project/project-structure/project-structure.component'
import { Changes } from '@/features/project/changes/changes.component'
import { Additional } from '@/features/project/additional/additional.component'
import { VisitedProjects } from '@/containers/visited-projects/visited-projects'
import { IProjectTubsName, tubsArray } from '@/features/project/interfaces'
import classes from '@/components/ui/tabs/tabs.module.scss'
import { Tab } from '@/components/ui/tabs/tab/tab.component'
import { ProjectDto } from '@/api/model'
import { useTranslation } from 'react-i18next'
import { getDescription } from '@/utils/project-util'

interface Props {
	project: ProjectDto
}

export const ProjectTabs = ({ project }: Props) => {
	const [activeTab, setActiveTab] = useState<IProjectTubsName>(tubsArray[0])

	const onClickTabItem = (value: IProjectTubsName) => {
		setActiveTab(value)
	}

	const { t } = useTranslation()

	return (
		<>
			<div id='scroll-to-top' className={classes.Tabs}>
				<ol className={classes.TabsList}>
					{tubsArray
						.filter(
							element =>
								project.isFinished ||
								element !== IProjectTubsName.PROJECT_IN_PROGRESS
						)
						.map((element, index) => {
							return (
								<Tab
									activeTab={activeTab === element}
									key={index}
									label={t(element)}
									onClick={() => onClickTabItem(element)}
								/>
							)
						})}
				</ol>
				<div className='tab-content'>
					{activeTab === IProjectTubsName.All_ABOUT_PROJECT && (
						<>
							<GeneralInfo
								title={project.title}
								generalArea={project.generalArea}
								projectPrice={project.projectPrice}
								timeToCreate={project.timeToCreate}
								mainImage={project.mainImage?.path}
								images={project.images.map(image => image.path)}
								videoUrl={project.videoUrl}
								description={getDescription(project)}
							/>
							<ProjectLayout project={project} />
							<ProjectStructure project={project} />
							<Changes project={project} />
							<Additional />
							{project.isFinished && (
								<GeneralInfo
									title={project.title}
									generalArea={project.generalArea}
									projectPrice={project.projectPrice}
									timeToCreate={project.timeToCreate}
									images={project.photos.map(image => image.path)}
								/>
							)}
						</>
					)}
					{activeTab === IProjectTubsName.LAYAOUT && (
						<ProjectLayout project={project} />
					)}
					{/*{activeTab === IProjectTubsName.SIMILAR_PROJECTS && <VisitedProjects />}*/}
					{activeTab === IProjectTubsName.ADDITIONAL_SERVICES && <Additional />}
					{activeTab === IProjectTubsName.COMPOSITION_OF_PROJECT && (
						<ProjectStructure project={project} />
					)}
					{activeTab === IProjectTubsName.ALTERNATIVE && (
						<Changes project={project} />
					)}
					{project.isFinished &&
						activeTab === IProjectTubsName.PROJECT_IN_PROGRESS && (
							<GeneralInfo
								title={project.title}
								generalArea={project.generalArea}
								projectPrice={project.projectPrice}
								timeToCreate={project.timeToCreate}
								images={project.photos.map(photo => photo.path)}
							/>
						)}
				</div>
				<VisitedProjects />
			</div>
		</>
	)
}
