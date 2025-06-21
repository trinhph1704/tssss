// src/pages/root.tsx
import { Outlet, useRouterState } from '@tanstack/react-router'

import { AuthProvider, useAuth } from '@/stores/AuthContext'
import { LoginForm } from '@/pages/login'

function RootLayoutInner() {
  const { currentUser, loading } = useAuth()
  const router = useRouterState()

  // Allow unauthenticated access to any route starting with /repair
  if (router.location.pathname.startsWith('/repair')) {
    return <Outlet />
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!currentUser) {
    return (
      <div style={{ padding: 16 }}>
        <h1>My App - Login Required</h1>
        <LoginForm />
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>My App</h1>
        <LogoutButton />
      </div>
      <Outlet />
    </div>
  )
}

function LogoutButton() {
  const { logout } = useAuth()

  return (
    <button onClick={logout} style={{ padding: '4px 8px' }}>
      Logout
    </button>
  )
}

export default function Root() {
  return (
    <AuthProvider>
      <RootLayoutInner />
    </AuthProvider>
  )
}
