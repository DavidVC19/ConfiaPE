'use client'

import { useState, useEffect } from "react"
import HeaderAdmin from "@/components/admincomponents/HeaderAdmin"
import AdminSidebar from "@/components/admincomponents/AdminSidebar"

const perfilData = {
  nombre: "Carlos Martínez",
  email: "carlos.martinez@email.com",
  telefono: "+51 987 654 321",
  oficio: "Electricista",
  experiencia: "8 años",
  ubicacion: "Trujillo, La Libertad",
  descripcion: "Especialista en instalaciones eléctricas y mantenimiento residencial con más de 8 años de experiencia.",
  certificaciones: [
    "Certificado SENATI",
    "Curso de Seguridad Eléctrica",
    "Instalaciones Eléctricas Domiciliarias"
  ],
  servicios: [
    "Instalación eléctrica completa",
    "Mantenimiento preventivo",
    "Reparación de cortocircuitos",
    "Instalación de luminarias",
    "Tableros eléctricos"
  ],
  precios: {
    min: 50,
    max: 150
  }
}

const notifications = [
  {
    id: 1,
    tipo: "perfil",
    titulo: "Actualización de perfil",
    mensaje: "Tu perfil ha sido actualizado exitosamente",
    timestamp: "Hace 5 min",
    leida: false
  }
]

export default function PerfilPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [editando, setEditando] = useState(false)
  const [perfil, setPerfil] = useState(perfilData)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleGuardar = () => {
    console.log('Guardando perfil:', perfil)
    setEditando(false)
    // Cerrar sidebar en móvil después de guardar
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleCancelar = () => {
    setEditando(false)
    setPerfil(perfilData) // Restaurar datos originales
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <HeaderAdmin 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNotificationClick={() => setShowNotifications(!showNotifications)}
        notifications={notifications}
      />

      <div className="flex relative">
        <AdminSidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Overlay para móvil */}
        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Contenido principal con margen para el sidebar */}
        <main className={`
          flex-1 pt-20 pb-6 lg:pb-8 w-full min-w-0 transition-all duration-300
          px-3 sm:px-4 md:px-6 lg:px-8
          ${sidebarOpen && !isMobile ? 'lg:ml-64' : 'lg:ml-0'}
        `}>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6 lg:mb-8 px-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                Mi Perfil
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                Gestiona tu información profesional
              </p>
            </div>
            {/* Información principal */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 lg:mb-8 gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl lg:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">CM</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 truncate">{perfil.nombre}</h2>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-600 font-medium">{perfil.oficio}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{perfil.ubicacion}</p>
                  </div>
                </div>
                <button
                  onClick={() => setEditando(!editando)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl lg:rounded-2xl font-bold hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-sm sm:text-base"
                >
                  {editando ? 'Cancelar' : 'Editar Perfil'}
                </button>
              </div>

              {/* Información de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    {editando ? (
                      <input
                        type="text"
                        value={perfil.nombre}
                        onChange={(e) => setPerfil(prev => ({ ...prev, nombre: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{perfil.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    {editando ? (
                      <input
                        type="email"
                        value={perfil.email}
                        onChange={(e) => setPerfil(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base break-all">{perfil.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    {editando ? (
                      <input
                        type="tel"
                        value={perfil.telefono}
                        onChange={(e) => setPerfil(prev => ({ ...prev, telefono: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{perfil.telefono}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                    {editando ? (
                      <input
                        type="text"
                        value={perfil.ubicacion}
                        onChange={(e) => setPerfil(prev => ({ ...prev, ubicacion: e.target.value }))}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{perfil.ubicacion}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6 lg:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción Profesional</label>
                {editando ? (
                  <textarea
                    value={perfil.descripcion}
                    onChange={(e) => setPerfil(prev => ({ ...prev, descripcion: e.target.value }))}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{perfil.descripcion}</p>
                )}
              </div>

              {/* Precios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio Mínimo (S/)</label>
                  {editando ? (
                    <input
                      type="number"
                      value={perfil.precios.min}
                      onChange={(e) => setPerfil(prev => ({ 
                        ...prev, 
                        precios: { ...prev.precios, min: parseInt(e.target.value) || 0 }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium text-sm sm:text-base">S/ {perfil.precios.min}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio Máximo (S/)</label>
                  {editando ? (
                    <input
                      type="number"
                      value={perfil.precios.max}
                      onChange={(e) => setPerfil(prev => ({ 
                        ...prev, 
                        precios: { ...prev.precios, max: parseInt(e.target.value) || 0 }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium text-sm sm:text-base">S/ {perfil.precios.max}</p>
                  )}
                </div>
              </div>

              {editando && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleGuardar}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 rounded-xl lg:rounded-2xl font-bold hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    onClick={handleCancelar}
                    className="bg-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-xl lg:rounded-2xl font-bold hover:bg-gray-400 transition-all text-sm sm:text-base"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>

            {/* Servicios y certificaciones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">Servicios Ofrecidos</h3>
                <div className="space-y-2 sm:space-y-3">
                  {perfil.servicios.map((servicio, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{servicio}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">Certificaciones</h3>
                <div className="space-y-2 sm:space-y-3">
                  {perfil.certificaciones.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Estadísticas del perfil */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">Estadísticas del Perfil</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-blue-900">127</p>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">Trabajos Completados</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-green-900">4.8</p>
                  <p className="text-xs sm:text-sm text-green-600 font-medium">Calificación Promedio</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-yellow-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-yellow-900">89</p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Clientes Satisfechos</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-purple-900">8</p>
                  <p className="text-xs sm:text-sm text-purple-600 font-medium">Años de Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}