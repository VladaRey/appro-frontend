'use client'
import classes from './menu.module.scss'
import Logo from '@/assets/img/logo.svg'
import { contactInfo, MenuLinkInfo, menuLinks } from '@/constants'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

interface Props {
	isOpened: boolean
	closeMenu(): void
}

export const Menu = (props: Props) => {
	const menuClasses: string[] = [classes['menu']]
	if (props.isOpened) {
		menuClasses.push(classes['active'])
	}
	const { t } = useTranslation()
	return (
		<div className={menuClasses.join(' ')}>
			<div className={classes['menu__header']}>
				<Link href='/' className={classes['menu__logo']}>
					<Image src={Logo} alt='logo' />
				</Link>
				<div className={classes['menu__close']} onClick={props.closeMenu} />
			</div>
			<nav className={classes['menu__body']}>
				<ul className={classes['menu__list']}>
					{menuLinks.map((link, index) => (
						<div onClick={props.closeMenu} key={'menu-' + index}>
							<MenuItem name={t(link.name)} path={link.path} />
						</div>
					))}
				</ul>
			</nav>

			<div className={classes['menu__footer']}>
				<div className={classes['menu__footer-item']}>
					{t(contactInfo.address)}
				</div>
				<div className={classes['menu__footer-item']}>
					<a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
				</div>
				<div className={classes['menu__footer-item']}>
					{t(contactInfo.copyright)}
				</div>
			</div>
		</div>
	)
}

const MenuItem = (props: MenuLinkInfo) => {
	return (
		<li>
			<Link href={props.path} className={classes['menu__link']}>
				{props.name}
			</Link>
		</li>
	)
}
