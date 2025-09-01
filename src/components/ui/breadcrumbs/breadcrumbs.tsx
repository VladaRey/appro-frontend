'use client'

import { FC, ReactNode } from 'react'
import Link from 'next/link'
import classes from './breadcrumbs.module.scss'
import arrow from '@/assets/img/breadcrumbs/arrow.svg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

interface Crumb {
	href: string
	label: ReactNode
}

interface BreadcrumbsProps {
	items?: Crumb[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items = [] }) => {
	const { t } = useTranslation()

	return (
		<div className={classes.Breadcrumbs}>
            <div className="flex items-center gap-1">
                <Link href={'/'}>{t('header.main_link')}</Link>
                <Image src={arrow} alt='arrow' />
            </div>
			{items.map((crumb, idx) => (
				<div key={idx} className="flex items-center gap-1">
					<Link href={crumb.href}>{crumb.label}</Link>
					<Image src={arrow} alt='arrow' />
				</div>
			))}
		</div>
	)
}
