'use client'

import QueryProvider from '@/providers/query-provider'
import ReduxProvider from '@/providers/redux-provider'
import "@/i18n/config"

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
		<QueryProvider>
			<ReduxProvider>
					<Wrapper>
						<Header />
						<main className={classes.content}>{children}</main>
						<Footer />
						<OrderModalContainer onFormSubmit={showSuccessMessage} />
					    {successMessageVisible && <SuccessPopup />}
					</Wrapper>
			</ReduxProvider>
		</QueryProvider>
	)
}
