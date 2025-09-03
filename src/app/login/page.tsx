'use client'
import { Suspense } from 'react'
import LoginComponent from '@/components/login.component'
import { FullSizeLoader } from '@/components/full-size-loader.component'

export default function LoginPage() {
	return (
		<Suspense fallback={<FullSizeLoader />}>
			<LoginComponent />
		</Suspense>
	)
}