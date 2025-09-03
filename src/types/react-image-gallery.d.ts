declare module 'react-image-gallery' {
	import * as React from 'react'

	export interface ReactImageGalleryItem {
		original: string
		thumbnail?: string
		description?: string
		originalClass?: string
		thumbnailClass?: string
		originalAlt?: string
		thumbnailAlt?: string
		originalTitle?: string
		thumbnailTitle?: string
		srcSet?: string
		sizes?: string
		renderItem?: (item: ReactImageGalleryItem) => React.ReactNode
		renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode
		imageSet?: Array<{ srcSet: string; media: string }>
	}

	export interface ReactImageGalleryProps {
		items: ReactImageGalleryItem[]
		showThumbnails?: boolean
		showFullscreenButton?: boolean
		showPlayButton?: boolean
		showBullets?: boolean
		slideDuration?: number
		slideInterval?: number
		onSlide?: (currentIndex: number) => void
		onScreenChange?: (fullScreenElement: Element | null) => void
		onPause?: (currentIndex: number) => void
		onPlay?: (currentIndex: number) => void
		[key: string]: unknown
	}

	export default class ImageGallery extends React.Component<ReactImageGalleryProps> {}
}
