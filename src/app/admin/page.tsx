'use client'

import { useState, useEffect } from "react"
import HeaderAdmin from "@/components/admincomponents/HeaderAdmin"
import AdminSidebar from "@/components/admincomponents/AdminSidebar"
import StatsCard from "@/components/admincomponents/StatsCard"
import RecentJobs from "@/components/admincomponents/RecentJobs"
import NotificationsPanel from "@/components/admincomponents/NotificationsPanel"
import { getStoredUser, me } from "../../lib/auth"
import { useRouter } from "next/navigation"

// Datos de ejemplo para el dashboard
const statsData = {
  trabajosHoy: 3,
  trabajosCompletados: 127,
  ingresosMes: 4850,
  calificacionPromedio: 4.8,
  clientesAtendidos: 89,
  trabajosPendientes: 2
}

const recentJobs = [
  {
    id: 1,
    cliente: "María López",
    servicio: "Reparación de cortocircuito",
    fecha: "2024-01-15",
    estado: "Completado",
    precio: 120,
    calificacion: 5
  },
  {
    id: 2,
    cliente: "Jorge Pérez",
    servicio: "Instalación de luminarias",
    fecha: "2024-01-14",
    estado: "En progreso",
    precio: 180,
    calificacion: null
  },
  {
    id: 3,
    cliente: "Ana Torres",
    servicio: "Mantenimiento preventivo",
    fecha: "2024-01-13",
    estado: "Completado",
    precio: 95,
    calificacion: 4
  }
]

const notifications = [
  {
    id: 1,
    tipo: "nuevo_trabajo",
    titulo: "Nueva solicitud de trabajo",
    mensaje: "María López solicita reparación eléctrica",
    timestamp: "Hace 5 min",
    leida: false
  },
  {
    id: 2,
    tipo: "mensaje",
    titulo: "Nuevo mensaje",
    mensaje: "Jorge Pérez te escribió",
    timestamp: "Hace 15 min",
    leida: false
  },
  {
    id: 3,
    tipo: "calificacion",
    titulo: "Nueva calificación",
    mensaje: "Ana Torres te calificó con 5 estrellas",
    timestamp: "Hace 1 hora",
    leida: true
  }
]

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const loadUser = async () => {
      try {
        // Primero intentar obtener datos del storage
        const storedUser = getStoredUser()
        if (storedUser) {
          setUser(storedUser)
        }
        
        // Luego actualizar con datos frescos del servidor
        const userData = await me()
        setUser(userData)
      } catch (err: any) {
        setError(err?.message || 'Error cargando usuario')
        // Si hay error, redirigir al login
        router.push('/Login')
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    )
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Usuario no encontrado'}</p>
          <button 
            onClick={() => router.push('/Login')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Ir al Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Admin */}
      <HeaderAdmin 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNotificationClick={() => setShowNotifications(!showNotifications)}
        notifications={notifications}
        user={user}
      />

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Contenido principal - CON MARGIN LEFT EN DESKTOP */}
        <main className="flex-1 pt-20 px-4 sm:px-8 pb-8 lg:ml-64 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            {/* Header del dashboard */}
            <div className="mb-8">
              <h1 className="text-4xl font-black text-gray-900 mb-2">
                Dashboard {user.rol === 'TECNICO' ? 'Técnico' : user.rol === 'ADMIN' ? 'Administrador' : 'Usuario'}
              </h1>
              <p className="text-gray-600 text-lg">
                Bienvenido de vuelta, {user.nombre}. Aquí tienes un resumen de tu actividad.
              </p>
            </div>

            {/* Cards de estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatsCard
                titulo="Trabajos Hoy"
                valor={statsData.trabajosHoy}
                icono="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                color="blue"
                cambio="+2 vs ayer"
              />
              
              <StatsCard
                titulo="Ingresos del Mes"
                valor={`S/ ${statsData.ingresosMes.toLocaleString()}`}
                icono="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                color="green"
                cambio="+15% vs mes anterior"
              />
              
              <StatsCard
                titulo="Calificación Promedio"
                valor={statsData.calificacionPromedio}
                icono="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                color="yellow"
                cambio="Excelente"
              />
              
              <StatsCard
                titulo="Trabajos Completados"
                valor={statsData.trabajosCompletados}
                icono="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                color="purple"
                cambio="+8 este mes"
              />
              
              <StatsCard
                titulo="Clientes Atendidos"
                valor={statsData.clientesAtendidos}
                icono="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                color="indigo"
                cambio="+12 este mes"
              />
              
              <StatsCard
                titulo="Trabajos Pendientes"
                valor={statsData.trabajosPendientes}
                icono="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                color="orange"
                cambio="Requieren atención"
              />
            </div>

            {/* Sección de trabajos recientes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentJobs trabajos={recentJobs} />
              
              {/* Panel de notificaciones */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-black text-gray-900">Actividad Reciente</h3>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Ver todas
                  </button>
                </div>
                
                <div className="space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-4 rounded-2xl border ${
                      notif.leida ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                    }`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                          notif.leida ? 'bg-gray-300' : 'bg-blue-600'
                        }`}></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">{notif.titulo}</h4>
                          <p className="text-gray-600 text-sm mt-1">{notif.mensaje}</p>
                          <span className="text-xs text-gray-500 mt-2 block">{notif.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Panel de notificaciones flotante */}
      {showNotifications && (
        <NotificationsPanel 
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
        />
      )}
    </div>
  )
}