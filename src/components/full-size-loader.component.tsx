import Image from 'next/image'
import logo from '@/assets/img/logo.svg'

export const FullSizeLoader = () => {
	return (
		<div className='flex h-[100vh] w-full items-center justify-center '>
			<Image
				src={logo}
				alt='loader'
				className='animate-bounce'
				width={200}
				height={200}
			/>
		</div>
	)
}
