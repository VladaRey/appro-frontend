'use client'
import { ReactNode } from 'react'
import { Header } from '@/components/admin/header.component'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { ukUA } from '@mui/material/locale'
import { CookiesProvider } from 'react-cookie'
import { AdminAuthWrapper } from '@/containers/admin-auth-wrapper'

interface AdminLayoutProps {
	children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const muiTheme = createTheme({}, ukUA);
  
	return (
		<CookiesProvider>
			<AdminAuthWrapper>
			<ThemeProvider theme={muiTheme}>
				<Header />
				<Container maxWidth='xl' sx={{ pt: 2 }}>
					{children}
				</Container>
			</ThemeProvider>
			</AdminAuthWrapper>
		</CookiesProvider>
	)
}
