'use client'

import { useState } from "react"
import HeaderAdmin from "@/components/admincomponents/HeaderAdmin"
import AdminSidebar from "@/components/admincomponents/AdminSidebar"

// Datos de ejemplo de clientes
const clientesData = [
  {
    id: 1,
    nombre: "María López",
    email: "maria.lopez@email.com",
    telefono: "+51 987 654 321",
    ubicacion: "Miraflores, Lima",
    trabajosRealizados: 3,
    ultimoTrabajo: "2024-01-15",
    calificacionPromedio: 5,
    totalGastado: 360,
    esFrecuente: true
  },
  {
    id: 2,
    nombre: "Jorge Pérez",
    email: "jorge.perez@email.com",
    telefono: "+51 988 233 555",
    ubicacion: "Lima, Perú",
    trabajosRealizados: 2,
    ultimoTrabajo: "2024-01-14",
    calificacionPromedio: 4.5,
    totalGastado: 280,
    esFrecuente: true
  },
  {
    id: 3,
    nombre: "Ana Torres",
    email: "ana.torres@email.com",
    telefono: "+51 912 223 112",
    ubicacion: "San Isidro, Lima",
    trabajosRealizados: 1,
    ultimoTrabajo: "2024-01-13",
    calificacionPromedio: 4,
    totalGastado: 95,
    esFrecuente: false
  },
  {
    id: 4,
    nombre: "Luis Fernández",
    email: "luis.fernandez@email.com",
    telefono: "+51 944 331 871",
    ubicacion: "La Molina, Lima",
    trabajosRealizados: 0,
    ultimoTrabajo: null,
    calificacionPromedio: 0,
    totalGastado: 0,
    esFrecuente: false
  },
  {
    id: 5,
    nombre: "Gloria Ramos",
    email: "gloria.ramos@email.com",
    telefono: "+51 956 872 209",
    ubicacion: "Surco, Lima",
    trabajosRealizados: 1,
    ultimoTrabajo: "2024-01-11",
    calificacionPromedio: 0,
    totalGastado: 80,
    esFrecuente: false
  }
]

const notifications = [
  {
    id: 1,
    tipo: "nuevo_trabajo",
    titulo: "Nueva solicitud",
    mensaje: "María López solicita reparación eléctrica",
    timestamp: "Hace 5 min",
    leida: false
  }
]

export default function ClientesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [filtro, setFiltro] = useState('todos')

  const clientesFiltrados = filtro === 'todos' 
    ? clientesData 
    : filtro === 'frecuentes'
    ? clientesData.filter(cliente => cliente.esFrecuente)
    : clientesData.filter(cliente => cliente.trabajosRealizados === 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <HeaderAdmin 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNotificationClick={() => setShowNotifications(!showNotifications)}
        notifications={notifications}
      />

      <div className="flex">
        <AdminSidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* 👇 CAMBIO CLAVE APLICADO AQUÍ */}
        <main className="flex-1 pt-20 px-4 sm:px-8 pb-8 lg:ml-64 transition-all duration-300">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-black text-gray-900 mb-2">
                Mis Clientes
              </h1>
              <p className="text-gray-600 text-lg">
                Gestiona tu base de clientes y su historial
              </p>
            </div>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Clientes</p>
                    <p className="text-3xl font-black text-gray-900">{clientesData.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Clientes Frecuentes</p>
                    <p className="text-3xl font-black text-gray-900">{clientesData.filter(c => c.esFrecuente).length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Ingresos Totales</p>
                    <p className="text-3xl font-black text-gray-900">
                      S/ {clientesData.reduce((sum, c) => sum + c.totalGastado, 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Calificación Promedio</p>
                    <p className="text-3xl font-black text-gray-900">
                      {clientesData.filter(c => c.calificacionPromedio > 0).length > 0 
                        ? (clientesData.filter(c => c.calificacionPromedio > 0).reduce((sum, c) => sum + c.calificacionPromedio, 0) / clientesData.filter(c => c.calificacionPromedio > 0).length).toFixed(1)
                        : '0.0'
                      }
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtros */}
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-8 border border-gray-100">
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'todos', label: 'Todos' },
                  { id: 'frecuentes', label: 'Frecuentes' },
                  { id: 'nuevos', label: 'Nuevos' }
                ].map((filtroItem) => (
                  <button
                    key={filtroItem.id}
                    onClick={() => setFiltro(filtroItem.id)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                      filtro === filtroItem.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filtroItem.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de clientes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {clientesFiltrados.map((cliente) => (
                <div key={cliente.id} className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all">
                  {/* Header del cliente */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {cliente.nombre.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900">{cliente.nombre}</h3>
                        <p className="text-gray-600">{cliente.ubicacion}</p>
                        {cliente.esFrecuente && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                            Cliente Frecuente
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Información de contacto */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{cliente.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">{cliente.telefono}</span>
                    </div>
                  </div>

                  {/* Estadísticas del cliente */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">{cliente.trabajosRealizados}</p>
                      <p className="text-xs text-gray-600">Trabajos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">
                        {cliente.calificacionPromedio > 0 ? cliente.calificacionPromedio.toFixed(1) : 'N/A'}
                      </p>
                      <p className="text-xs text-gray-600">Calificación</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">S/ {cliente.totalGastado}</p>
                      <p className="text-xs text-gray-600">Total</p>
                    </div>
                  </div>

                  {/* Último trabajo */}
                  {cliente.ultimoTrabajo && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-2xl">
                      <p className="text-sm text-gray-600 mb-1">Último trabajo:</p>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(cliente.ultimoTrabajo).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                  )}

                  {/* Botones de acción */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                      Ver Historial
                    </button>
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-2xl hover:scale-105 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {clientesFiltrados.length === 0 && (
              <div className="text-center py-16">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No hay clientes</h3>
                <p className="text-gray-500">No se encontraron clientes con el filtro seleccionado</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
