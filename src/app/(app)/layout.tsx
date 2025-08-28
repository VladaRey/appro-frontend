'use client'

import { Wrapper } from '@/containers/hoc/wrapper/wrapper'
import { Header } from '@/components/header/header.component'
import { Footer } from '@/components/footer/footer.component'
import { OrderModalContainer } from '@/modal/order-modal-container'
import SuccessPopup from '@/components/success-popup/success-popup.component'

import { useState } from 'react'
import classes from '@/styles/layout.module.scss'

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [successMessageVisible, setSuccessMessageVisible] = useState(false)

	const showSuccessMessage = () => {
		setSuccessMessageVisible(true)
		setTimeout(() => {
			setSuccessMessageVisible(false)
		}, 5000)
	}

	return (
		<Wrapper>
			<Header />
			<main className={classes.content}>{children}</main>
			<Footer />
			<OrderModalContainer onFormSubmit={showSuccessMessage} />
			{successMessageVisible && <SuccessPopup />}
		</Wrapper>
	)
}
