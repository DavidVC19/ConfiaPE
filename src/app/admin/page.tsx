'use client'

import AdminHeader from "@/components/admin/HeaderAdmin"
import Link from "next/link"

export default function AdminDashboard() {
  const solicitudesPendientes = [
    {
      id: 1,
      cliente: "Juan Pablo García",
      servicio: "Instalación eléctrica",
      ubicacion: "Trujillo, La Libertad",
      fecha: "Hoy, 10:30 AM",
      urgencia: "alta",
      precio: "S/ 150"
    },
    {
      id: 2,
      cliente: "María Fernández",
      servicio: "Reparación de aire acondicionado",
      ubicacion: "Miraflores, Trujillo",
      fecha: "Hoy, 2:00 PM",
      urgencia: "media",
      precio: "S/ 120"
    },
    {
      id: 3,
      cliente: "Carlos Mendoza",
      servicio: "Mantenimiento eléctrico",
      ubicacion: "Centro de Trujillo",
      fecha: "Mañana, 9:00 AM",
      urgencia: "baja",
      precio: "S/ 80"
    }
  ]

  const trabajosEnCurso = [
    {
      id: 4,
      cliente: "Ana López",
      servicio: "Instalación de luminarias",
      progreso: 65,
      fechaInicio: "Hace 2 horas"
    },
    {
      id: 5,
      cliente: "Pedro Ramírez",
      servicio: "Reparación de cortocircuito",
      progreso: 30,
      fechaInicio: "Hace 4 horas"
    }
  ]

  const getUrgenciaColor = (urgencia: string) => {
    switch (urgencia) {
      case 'alta':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'media':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'baja':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <AdminHeader />

      <main className="p-6 max-w-7xl mx-auto">
        {/* Bienvenida */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">¡Bienvenido, Carlos! 👋</h1>
          <p className="text-gray-600">Aquí está el resumen de tu actividad hoy</p>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">3</h3>
            <p className="text-gray-600 text-sm">Solicitudes Pendientes</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">12</h3>
            <p className="text-gray-600 text-sm">Trabajos Completados</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">2</h3>
            <p className="text-gray-600 text-sm">En Progreso</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">S/ 1,280</h3>
            <p className="text-gray-600 text-sm">Ganancias del mes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Solicitudes pendientes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  Nuevas Solicitudes
                </h2>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {solicitudesPendientes.length} nuevas
                </span>
              </div>

              <div className="divide-y divide-gray-200">
                {solicitudesPendientes.map((solicitud) => (
                  <div key={solicitud.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">{solicitud.cliente}</h3>
                        <p className="text-blue-600 font-medium">{solicitud.servicio}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgenciaColor(solicitud.urgencia)}`}>
                        {solicitud.urgencia === 'alta' && 'Urgente'}
                        {solicitud.urgencia === 'media' && 'Normal'}
                        {solicitud.urgencia === 'baja' && 'Flexible'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {solicitud.ubicacion}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {solicitud.fecha}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-800">{solicitud.precio}</span>
                      <Link
                        href={`/admin/solicitudes/${solicitud.id}`}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trabajos en curso */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  En Progreso
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {trabajosEnCurso.map((trabajo) => (
                  <div key={trabajo.id} className="p-4 bg-gray-50 rounded-xl">
                    <h3 className="font-semibold text-gray-800 mb-1">{trabajo.cliente}</h3>
                    <p className="text-sm text-gray-600 mb-3">{trabajo.servicio}</p>
                    
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Progreso</span>
                        <span className="font-semibold">{trabajo.progreso}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${trabajo.progreso}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-500">{trabajo.fechaInicio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Acciones rápidas */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Acciones Rápidas</h2>
              </div>
              <div className="p-4 space-y-2">
                <Link
                  href="/admin/calendario"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Ver Calendario</span>
                </Link>

                <Link
                  href="/admin/historial"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Ver Historial</span>
                </Link>

                <Link
                  href="/admin/finanzas"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-700">Mis Finanzas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}