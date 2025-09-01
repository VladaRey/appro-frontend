'use client'
import { Suspense } from 'react'
import { Catalogue } from '@/features/catalogue/catalogue.component'

export default function CataloguePage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Catalogue />
		</Suspense>
	)
}