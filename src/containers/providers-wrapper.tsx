'use client'
import QueryProvider from '@/providers/query-provider'
import ReduxProvider from '@/providers/redux-provider'
import '@/i18n/config'

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
	return (
		<QueryProvider>
			<ReduxProvider>
				{children}
			</ReduxProvider>
		</QueryProvider>
	)
}