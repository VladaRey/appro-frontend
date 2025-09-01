import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import React from 'react'

import Logo from '@/assets/img/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' sx={{ backgroundColor: 'rgba(60,60,60,0.8)' }}>
				<Container maxWidth={'xl'} sx={{ padding: '16px'}}>
					<Toolbar className="flex flex-col sm:flex-row items-center">
						<Box
							display={'flex'}
							alignItems={'center'}
							className="flex flex-col sm:flex-row gap-3 items-center"
						>
							<Box width={95}>
								<Link href={'/'}>
									<Image src={Logo} alt='logo' />
								</Link>
							</Box>
							<Box className="flex items-center gap-1" sx={{ paddingTop: '8px' }}>
								<Link href={'/admin'}>
									<Button color='inherit'>Всі проекти</Button>
								</Link>
								<Link href={'/admin/project/new'}>
									<Button color='inherit'>Додати новий</Button>
								</Link>
							</Box>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	)
}
