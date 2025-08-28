import { FC, useEffect } from 'react'
import OrderModal from './order-modal.component'
import './modal.scss'
import { useModalStore } from './order-modal-container.store'

interface OrderModalContainerProps {
	onFormSubmit: () => void
}

export const OrderModalContainer: FC<OrderModalContainerProps> = ({
	onFormSubmit
}) => {
	const { isOpen, project, title, closeModal } = useModalStore()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className='modal-container'>
			<OrderModal
				title={title || ''}
				project={project || ''}
				onClose={closeModal}
				onFormSubmit={onFormSubmit}
			/>
		</div>
	)
}
