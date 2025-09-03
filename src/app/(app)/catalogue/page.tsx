'use client'
import { Suspense } from 'react'
import { Catalogue } from '@/features/catalogue/catalogue.component'
import { FullSizeLoader } from '@/components/full-size-loader.component'

export default function CataloguePage() {
	return (
		<Suspense fallback={<FullSizeLoader />}>
			<Catalogue />
		</Suspense>
	)
}