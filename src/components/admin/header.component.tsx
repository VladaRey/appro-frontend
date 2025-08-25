import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import React from 'react'

import Logo from '@/assets/img/logo.svg'
import Link from 'next/link'

export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: 'rgba(60,60,60,0.8)' }}>
				<Container maxWidth={'xl'}>
					<Toolbar>
						<Box display={'flex'} alignItems={'center'} ml={-3}>
							<Box width={95} mr={3}>
								<Link href={'/'}>
									<Logo />
								</Link>
							</Box>
							<Button component={Link} href={'/admin'} color='inherit'>
								Всі проекти
							</Button>
							<Button
								component={Link}
								href={'/admin/project/new'}
								color='inherit'
							>
								Додати новий
							</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}
