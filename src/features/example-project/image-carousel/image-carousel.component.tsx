import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './image-carousel.scss'
import Image from 'next/image'
import SliderPrev from '@/assets/img/example-project/slider-prev-black.svg'
import SliderNext from '@/assets/img/example-project/slider-next-black.svg'

type ImageCarouselProps = {
	images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
	const renderArrowPrev = (clickHandler: () => void) => {
		const arrowClasses = ['slider-control__prev', 'control-arrow']

		return (
			<button
				onClick={clickHandler}
				aria-label='prev slide / item'
				className={arrowClasses.join(' ')}
			>
				<Image src={SliderPrev} alt='slider-prev' width={50} height={50} />
			</button>
		)
	}

	const renderArrowNext = (clickHandler: () => void) => {
		const arrowClasses = ['slider-control__next', 'control-arrow']

		return (
			<button
				onClick={clickHandler}
				aria-label='next slide / item'
				className={arrowClasses.join(' ')}
			>
				<Image src={SliderNext} alt='slider-next' width={50} height={50} />
			</button>
		)
	}

	return (
		<div className={'image-carousel'}>
			<Carousel
				showThumbs={false}
				showStatus={false}
				renderArrowNext={renderArrowNext}
				renderArrowPrev={renderArrowPrev}
				infiniteLoop
				interval={4000}
			>
				{images.map((image, index) => (
					<div className={'image-carousel__image'} key={index}>
						<img src={image} alt={`Page ${index + 1}`} />
					</div>
				))}
			</Carousel>
		</div>
	)
};

export default ImageCarousel;
