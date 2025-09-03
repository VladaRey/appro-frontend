import { FC, ReactElement } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import classes from './index.module.scss'
import ReactPlayer from 'react-player'

interface ImageCarouselProps {
	mainImage?: string
	images: string[]
	videoUrl?: string
}

interface GalleryItem {
	original: string
	thumbnail: string
	renderItem?: () => ReactElement
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
	mainImage,
	images,
	videoUrl
}) => {
	const items = [
		mainImage && { original: mainImage, thumbnail: mainImage },
		videoUrl && {
			original: `https://img.youtube.com/vi/${getYouTubeId(
				videoUrl
			)}/maxresdefault.jpg`,
			thumbnail: `https://img.youtube.com/vi/${getYouTubeId(videoUrl)}/0.jpg`,
			renderItem: () => (
				<div className='md:h-[500px]'>
					<ReactPlayer src={videoUrl} controls width='100%' height='100%' />
				</div>
			)
		},
		...images.map(image => ({ original: image, thumbnail: image }))
	].filter(Boolean) as GalleryItem[]

	items.forEach(item => {
		Object.assign(item, {
			thumbnailClass: classes.ImageCarousel_Thumbnail,
			originalClass: classes.ImageCarousel_SlideImage
		})
	})

	return (
		<ImageGallery
			items={items}
			showThumbnails
			thumbnailPosition='left'
			showNav={false}
		/>
	)
}

const getYouTubeId = (url: string): string => {
	const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([\w-]+))/)
	console.log(match?.[1])
	return match ? match[1] : ''
}
