import {
	DataGrid,
	GridColDef
} from '@mui/x-data-grid'
import Link from 'next/link'

import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box } from '@mui/material'
import { useGetAllProjects } from '@/api/use-get-all-projects'

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'title', headerName: 'Назва', width: 500 },
	{ field: 'generalArea', headerName: 'Площа, м²' },
	{ field: 'projectPrice', headerName: 'Ціна, грн' },
	{
		field: 'action',
		headerName: 'Action',
		headerAlign: 'center',
		sortable: false,
		renderCell: params => {
			return (
				<Link href={`/admin/project/${params.row.id}`}>
					<Box
						display={'flex'}
						height={'100%'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<VisibilityIcon color={'primary'} />
					</Box>
				</Link>
			)
		}
	}
]

export const ProjectsList = () => {
	const { data: projects } = useGetAllProjects()

	if (!projects) {
		return null
	}

	return (
		<DataGrid
			sx={{ p: 2 }}
			disableColumnFilter
			disableColumnSelector
			disableDensitySelector
			showToolbar
			columns={columns}
			rows={projects}
		/>
	)
}
