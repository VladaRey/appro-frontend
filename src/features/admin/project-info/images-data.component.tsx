'use client'
import React, { FC, useEffect } from 'react'
import { ProjectProps } from './model'
import {
	Divider,
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Typography,
	Box
} from '@mui/material'
import Grid from '@mui/material/Grid'
import FileProperty from '@/features/admin/view-add-edit-project/file-property'
import delete_icon from '@/assets/img/admin/delete.svg'

import { useSaveImages } from '@/api/use-save-images'
import { ImageInfo } from '@/api/model'

export const ImageData: FC<ProjectProps> = ({ mode, projectDto, dispatch }) => {
	const view = mode === 'view'
	const addNew = false

	const {
		mutate: saveImages,
		data: savedImages,
		isPending: imagesLoading
	} = useSaveImages()
	const {
		mutate: saveMainImage,
		data: savedMainImage,
		isPending: mainImageLoading
	} = useSaveImages()
	const {
		mutate: savePhotos,
		data: savedPhotos,
		isPending: photoLoading
	} = useSaveImages()

	useEffect(() => {
		if (savedImages) {
			const { images } = projectDto
			dispatch({
				type: 'images',
				payload: images ? [...images, ...savedImages] : savedImages
			})
		}
	}, [savedImages])

	useEffect(() => {
		if (savedMainImage) {
			dispatch({ type: 'mainImage', payload: savedMainImage[0] })
		}
	}, [savedMainImage])

	useEffect(() => {
		if (savedPhotos) {
			const { photos } = projectDto
			dispatch({
				type: 'photos',
				payload: photos ? [...photos, ...savedPhotos] : savedPhotos
			})
		}
	}, [savedPhotos])

	const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		saveImages({ images: event.target.files, type: 'image' })
	}

	const handleImageRemove = (imageSrc: string) => {
		const images = projectDto.images

		if (images) {
			const newImages = images.filter((i: ImageInfo) => i.path !== imageSrc)
			dispatch({ type: 'images', payload: newImages })
		}
	}

	const handleMainImageChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		saveMainImage({ images: event.target.files, type: 'main' })
	}

	const handleMainImageRemove = () => {
		dispatch({ type: 'mainImage', payload: null })
	}

	const handlePhotosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		savePhotos({ images: event.target.files, type: 'photo' })
	}

	const handlePhotoRemove = (photoSrc: string) => {
		const photos = projectDto.photos

		if (photos) {
			const newPhotos = photos.filter((i: ImageInfo) => i.path !== photoSrc)
			dispatch({ type: 'photos', payload: newPhotos })
		}
	}

	return (
		<Grid container spacing={3} columns={{xs: 2, sm: 4, md: 6, lg: 12}}>
			<Grid size={{ xs: 12 }}>
				<ProjectImage
					images={projectDto.mainImage ? [projectDto.mainImage.path] : null}
					title={'Основне зображення'}
					isMain={true}
					required={true}
					disabled={view}
					handleAddImage={handleMainImageChange}
					handleRemoveImage={handleMainImageRemove}
					isLoading={mainImageLoading}
				/>
				<Divider sx={{ mt: 2 }} />
			</Grid>
			<Grid size={{ xs: 4, sm: 6, md: 8, lg: 12 }}>
				<ProjectImage
					images={addNew ? null : projectDto.images.map((i: any) => i.path)}
					title={'Зображення проекту'}
					required={true}
					multiple={true}
					disabled={view}
					handleAddImage={handleImagesChange}
					handleRemoveImage={handleImageRemove}
					isLoading={imagesLoading}
				/>
				<Divider sx={{ mt: 2 }} />
			</Grid>
			{projectDto.isFinished && (
				<>
					<Divider />
					<Grid size={{ xs: 4, sm: 6, md: 8, lg: 12 }}>
						<ProjectImage
							images={addNew ? null : projectDto.photos.map((i: any) => i.path)}
							title={'Фото готового проекту'}
							required={false}
							multiple={true}
							disabled={view}
							handleAddImage={handlePhotosChange}
							handleRemoveImage={handlePhotoRemove}
							isLoading={photoLoading}
						/>
					</Grid>
				</>
			)}
		</Grid>
	)
}

interface ProjectImageProps {
	images: string[] | null | undefined
	title: string
	buttonTitle?: string
	required?: boolean
	multiple?: boolean
	disabled?: boolean
	isMain?: boolean
	isLoading?: boolean

	handleAddImage(event: React.ChangeEvent<any>): void

	handleRemoveImage(id: string | number): void
}

const ProjectImage: FC<ProjectImageProps> = ({
	images,
	title,
	required,
	multiple,
	disabled,
	isMain,
	handleAddImage,
	handleRemoveImage,
	isLoading
}) => {
	if (images && isMain) {
		return ListImage(images, disabled, handleRemoveImage)
	}
	return (
		<Grid container alignItems='center' justifyContent='start'>
			<Box className="flex flex-col sm:gap-6 sm:flex-row items-center justify-start">
				<Box className="text-nowrap">
					<Typography variant={'h6'}>{title}</Typography>
				</Box>
				<Grid size={{ xs: 12 }}>
					<FileProperty
						required={required}
						disabled={disabled}
						multiple={multiple}
						handleProperty={handleAddImage}
						isLoading={isLoading}
					/>
				</Grid>
			</Box>
			{images && <Grid>{ListImage(images, disabled, handleRemoveImage)}</Grid>}
		</Grid>
	)
}

export const ListImage = (
	images: string[],
	disabled: boolean | undefined,
	handleRemoveImage: (id: string | number) => void
) => {
	return (
		<ImageList cols={2}>
			{images.map((item, index) => (
				<ImageListItem key={item + index}>
					<img src={item} alt={item} loading='lazy' />
					{!disabled && (
						<ImageListItemBar
							position='top'
							actionIcon={
								<IconButton
									style={{ width: 40, height: 40 }}
									disabled={disabled}
									onClick={() => handleRemoveImage(item)}
								>
									<img src={delete_icon.src} />
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
