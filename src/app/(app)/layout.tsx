'use client'

import QueryProvider from '@/providers/query-provider'
import { Provider } from 'react-redux'
import { store } from '@/redux/configure-store'
import "@/i18n/config"

import { Wrapper } from '@/containers/hoc/wrapper/wrapper'
import { Header } from '@/components/header/header.component'
import { Footer } from '@/components/footer/footer.component'
//import { OrderModalContainer } from '@/modal/OrderModalContainer'
//import SuccessPopup from '@/components/SuccessPopup/SuccessPopup'

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
			<Provider store={store}>
				<Wrapper>
					<Header />
					<main className={classes.content}>{children}</main>
					<Footer />
					{/*<OrderModalContainer onFormSubmit={showSuccessMessage} />
					{successMessageVisible && <SuccessPopup />}*/}
				</Wrapper>
			</Provider>
		</QueryProvider>
	)
}
