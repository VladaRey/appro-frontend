'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/admin/header.component'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { ukUA } from '@mui/material/locale'
import { useCookies } from 'react-cookie'
import { axiosCheckToken } from '@/services/server-data/server-data'

interface AdminLayoutProps {
	children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	const router = useRouter();
    const muiTheme = createTheme({}, ukUA);
    const [isAuth, setIsAuth] = useState<boolean | null>(null);
	const [cookies] = useCookies(['JWT']);

	useEffect(() => {
		const checkAuth = async () => {
			if (!cookies) {
				setIsAuth(false);
				router.push('/login?redirect=/admin');
				return;
			}

			try {
				const response = await axiosCheckToken()
				if (response.status === 200) {
					setIsAuth(true)
				} else {
					setIsAuth(false)
				}
			} catch (error) {
				console.error('Error during token check:', error)
				setIsAuth(false);
				router.push('/login?redirect=/admin');
			}
		}

		checkAuth()
	}, [cookies])

	if (isAuth === null) {
		return <div>Загрузка...</div>
	}

	return (
		<ThemeProvider theme={muiTheme}>
			<Header />
			<Container maxWidth='xl' sx={{ pt: 2 }}>
				{children}
			</Container>
		</ThemeProvider>
	)
}
