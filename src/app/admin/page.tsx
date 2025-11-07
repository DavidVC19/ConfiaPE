'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getStoredUser, getAccessToken } from '@/lib/auth'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUserAndFetchStats = async () => {
      const storedUser = getStoredUser()
      if (!storedUser || storedUser.rol !== 'ADMIN') {
        router.push('/Login')
        return;
      }
      setUser(storedUser)

      try {
        const token = getAccessToken()
        const response = await fetch(`${API_URL}/api/admin/stats`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await response.json()
        if (data.success) {
          setStats(data.data)
        } else {
          setStats(null)
        }
      } catch (error) {
        console.error('Error fetching stats:', error)
        setStats(null)
      } finally {
        setLoading(false)
      }
    }
    checkUserAndFetchStats()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando dashboard de administrador...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Panel de Administrador</h1>
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Técnicos</h2>
            <p className="text-3xl font-bold">{stats.tecnicos}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Clientes</h2>
            <p className="text-3xl font-bold">{stats.clientes}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Trabajos</h2>
            <p className="text-3xl font-bold">{stats.trabajos}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold">Servicios</h2>
            <p className="text-3xl font-bold">{stats.servicios}</p>
          </div>
        </div>
      )}
    </div>
  )
}
