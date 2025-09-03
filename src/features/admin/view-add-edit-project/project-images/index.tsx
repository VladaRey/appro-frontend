import React from 'react'
import {
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar
} from '@mui/material'
import FileProperty from '../file-property'
import delete_icon from '@/assets/img/admin/delete.svg'
import { currentHost } from '@/services/server-data/server-data'

interface Props {
	images: string[] | null | undefined
	title: string
	required?: boolean
	multiple?: boolean
	disabled?: boolean
	isMain?: boolean

	handleAddImage(event: React.ChangeEvent<HTMLInputElement>): void

	handleRemoveImage(id: string | number): void
}

const getImageList = (
	images: string[],
	disabled: boolean | undefined,
	handleRemoveImage: (id: string | number) => void
) => {
	return (
		<ImageList cols={3} rowHeight={164}>
			{images.map(item => (
				<ImageListItem key={item}>
					<img src={currentHost + item} alt={item} loading='lazy' />
					{!disabled && (
						<ImageListItemBar
							position='top'
							actionIcon={
								<IconButton
									style={{ width: 40, height: 40 }}
									disabled={disabled}
									onClick={() => handleRemoveImage(item)}
								>
									<img src={delete_icon} />
								</IconButton>
							}
							actionPosition='left'
						/>
					)}
				</ImageListItem>
			))}
		</ImageList>
	)
}

const ProjectImages = ({
	images,
	title,
	required,
	multiple,
	disabled,
	isMain,
	handleAddImage,
	handleRemoveImage
}: Props) => {
	if (images && isMain) {
		return getImageList(images, disabled, handleRemoveImage)
	}
	return (
		<>
			{images && getImageList(images, disabled, handleRemoveImage)}
			<FileProperty
				title={title}
				required={required}
				disabled={disabled}
				multiple={multiple}
				handleProperty={handleAddImage}
			/>
		</>
	)
}

export default ProjectImages
