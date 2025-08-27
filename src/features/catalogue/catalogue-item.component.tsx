import { FC, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './catalogue.module.scss'
import { Container } from '@/containers/hoc/container/container'
// import { Breadcrumbs } from '@/components/ui/breadcrumbs/breadcrumbs.component'
import { FilterList } from '@/features/catalogue/filter-list/filter-list.component'
import { CatalogueHeader } from '@/features/catalogue/catalogue-header/catalogue-header.component'
import { ProjectList } from '@/features/catalogue/project-list/project-list.component'
import { Pagination } from '@/components/ui/pagination/pagination.component'
import { VisitedProjects } from '@/containers/visited-projects/visited-projects'
import { SortDetails } from '@/constants/sort-data/catalogue-sort-info'
import { Button } from '@/components/ui/button/button.component'
import { ProjectDto } from '@/api/model'
import { Box, Drawer } from '@mui/material'

interface PropsType {
	applyFilter: (searchParams: URLSearchParams) => void
	currentProjects: ProjectDto[]
	sortDetails: SortDetails | undefined
	applySort: (searchParams: URLSearchParams) => void
	currentProjectsPaged: ProjectDto[]
	currentPage: number
	projectsPerPage: number
	handlePageChange: (nextPage: number) => void
}

const CatalogueItem: FC<PropsType> = memo(
	({
		applyFilter,
		currentProjects,
		sortDetails,
		applySort,
		currentProjectsPaged,
		currentPage,
		projectsPerPage,
		handlePageChange
	}) => {
		const [openFilter, setOpenFilter] = useState(false)

		const { t } = useTranslation()

		return (
			<div className={classes.Catalogue}>
				<Container>
					<div className={classes.Catalogue_Breadcrumbs}>
						{/* <Breadcrumbs /> */}
					</div>
					<div>
						<h1 className={classes['catalogue__title']}>
							{t('catalogue.title')}
						</h1>
					</div>
					<div className={classes['catalogue-main']}>
						<div className={classes['filter-wrapper']}>
							<div className={classes['filter-button']}>
								<Button
									actionHandler={() => setOpenFilter(true)}
									title={t('catalogue.filters.title')}
								/>
							</div>
							<Drawer open={openFilter} onClose={() => setOpenFilter(false)}>
								{openFilter && (
									<FilterList
										applyFilter={applyFilter}
										closeDrawer={() => setOpenFilter(false)}
									/>
								)}
							</Drawer>
							<Box sx={{ display: { xs: 'none', lg: 'block' } }}>
								<FilterList applyFilter={applyFilter} />
							</Box>
						</div>
						<div>
							<CatalogueHeader
								count={currentProjects.length}
								sortDetails={sortDetails}
								applySort={applySort}
							/>
							<ProjectList projects={currentProjectsPaged} />
							<Pagination
								itemsLength={currentProjects.length}
								currentPage={currentPage}
								itemsPerPage={projectsPerPage}
								onPageChange={handlePageChange}
							/>
						</div>
					</div>

					<VisitedProjects />
				</Container>
			</div>
		)
	}
)

export default CatalogueItem
