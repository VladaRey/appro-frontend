'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"
import { axiosCheckToken } from "@/services/server-data/server-data"
import { FullSizeLoader } from "@/components/full-size-loader.component"


export const AdminAuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
		
	const [isAuth, setIsAuth] = useState<boolean | null>(null)
	const [cookies] = useCookies(['JWT'])

		useEffect(() => {
			const checkAuth = async () => {
				if (!cookies) {
					setIsAuth(false)
					router.push('/login?redirect=/admin')
					return
				}

				try {
					const response = await axiosCheckToken()
					if (response.status === 200) {
						setIsAuth(true)
					} else {
						setIsAuth(false)
                        router.push('/login?redirect=/admin')
					}
				} catch (error) {
					console.error('Error during token check:', error)
					setIsAuth(false)
					router.push('/login?redirect=/admin')
				}
			}

			checkAuth()
		}, [cookies])

		if (isAuth === null) {
			return <FullSizeLoader />
		}

	return <>{children}</>
}
