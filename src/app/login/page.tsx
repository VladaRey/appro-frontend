'use client'
import { Suspense } from 'react'
import LoginComponent from '@/components/login.component'

export default function LoginPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginComponent />
		</Suspense>
	)
}