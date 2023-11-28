'use client'
import { useAuth } from '@/AuthContext'
import withAuth from '@/withAuth'

export default withAuth(function Home() {
  const { user } = useAuth()
  return (
    <main>
      Welcome {user?.username}
    </main>
  )
})
