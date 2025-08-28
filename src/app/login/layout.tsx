'use client'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { ukUA } from '@mui/material/locale'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
	const muiTheme = createTheme({}, ukUA)

	return (
		<ThemeProvider theme={muiTheme}>
			<Container maxWidth={'xl'} sx={{ pt: 2 }}>
				{children}
			</Container>
		</ThemeProvider>
	)
}
