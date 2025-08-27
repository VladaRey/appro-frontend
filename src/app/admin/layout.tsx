'use client'
import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/admin/header.component'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { ukUA } from '@mui/material/locale'
import { useCookies, CookiesProvider } from 'react-cookie'
import { axiosCheckToken } from '@/services/server-data/server-data'
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
