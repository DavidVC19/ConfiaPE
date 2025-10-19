'use client'

import { useState, useEffect } from "react"
import HeaderAdmin from "@/components/admincomponents/HeaderAdmin"
import AdminSidebar from "@/components/admincomponents/AdminSidebar"
import { getStoredUser, me } from "../../../lib/auth"
import { useRouter } from "next/navigation"

interface TecnicoProfile {
  nombres: string
  apellidos: string
  oficio: string
  descripcion: string
  ubicacion: string
  disponible: boolean
  experienciaAnios?: number
  precioMin?: number
  precioMax?: number
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
  const [isMobile, setIsMobile] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [tecnicoData, setTecnicoData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const router = useRouter()

  // Form data
  const [formData, setFormData] = useState<TecnicoProfile>({
    nombres: '',
    apellidos: '',
    oficio: '',
    descripcion: '',
    ubicacion: '',
    disponible: true,
    experienciaAnios: 0,
    precioMin: 0,
    precioMax: 0
  })

  // Cargar datos del usuario y técnico
  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Obtener datos del usuario autenticado
        const userData = await me()
        setUser(userData)

        // Obtener token de autenticación
        const token = localStorage.getItem('accessToken')
        
        if (!token) {
          throw new Error('No hay sesión activa')
        }

        // Cargar datos del técnico desde la API
        const response = await fetch('http://localhost:5000/api/tecnicos/me', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include'
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || errorData.message || `Error ${response.status}: ${response.statusText}`)
        }

        const result = await response.json()
        const tecnico = result.success ? result.data : result
        
        setTecnicoData(tecnico)
        
        // Inicializar formulario con datos actuales
        setFormData({
          nombres: tecnico.nombres || '',
          apellidos: tecnico.apellidos || '',
          oficio: tecnico.oficio || '',
          descripcion: tecnico.descripcion || '',
          ubicacion: tecnico.ubicacion || '',
          disponible: tecnico.disponible !== undefined ? tecnico.disponible : true,
          experienciaAnios: tecnico.experienciaAnios || 0,
          precioMin: tecnico.precioMin ? parseFloat(tecnico.precioMin) : 0,
          precioMax: tecnico.precioMax ? parseFloat(tecnico.precioMax) : 0
        })

      } catch (err: any) {
        console.error('Error cargando datos:', err)
        setError(err?.message || 'Error cargando perfil')
        // Si hay error de autenticación, redirigir al login
        if (err?.message?.includes('autenticación') || err?.message?.includes('sesión')) {
          router.push('/Login')
        }
      } finally {
        setLoading(false)
      }
    }
    loadUserData()
  }, [router])

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleGuardar = async () => {
    try {
      setSaving(true)
      setError(null)
      setSuccessMessage(null)

      // Validaciones básicas
      if (!formData.nombres?.trim() || !formData.apellidos?.trim()) {
        setError('Los nombres y apellidos son obligatorios')
        setSaving(false)
        return
      }

      // Obtener token
      const token = localStorage.getItem('accessToken')
      
      if (!token) {
        setError('No hay sesión activa. Por favor, inicia sesión nuevamente.')
        router.push('/Login')
        setSaving(false)
        return
      }

      // Preparar datos para enviar - SOLO incluir campos con valores válidos
      const dataToSend: any = {
        nombres: formData.nombres.trim(),
        apellidos: formData.apellidos.trim(),
        disponible: formData.disponible
      }

      // Agregar campos opcionales solo si tienen valores válidos
      if (formData.oficio?.trim()) {
        dataToSend.oficio = formData.oficio.trim()
      }

      if (formData.descripcion?.trim()) {
        dataToSend.descripcion = formData.descripcion.trim()
      }

      if (formData.ubicacion?.trim()) {
        dataToSend.ubicacion = formData.ubicacion.trim()
      }

      // Solo enviar experienciaAnios si es un número válido mayor a 0
      if (formData.experienciaAnios && formData.experienciaAnios > 0) {
        dataToSend.experienciaAnios = formData.experienciaAnios
      }

      // Solo enviar precios si son números válidos mayores a 0
      if (formData.precioMin && formData.precioMin > 0) {
        dataToSend.precioMin = formData.precioMin
      }

      if (formData.precioMax && formData.precioMax > 0) {
        dataToSend.precioMax = formData.precioMax
      }

      console.log('Enviando datos:', dataToSend)

      const response = await fetch('http://localhost:5000/api/tecnicos/me', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(dataToSend)
      })

      const result = await response.json()

      if (!response.ok) {
        // Mostrar error más detallado
        const errorMsg = result.error || result.message || 'Error al actualizar perfil'
        const errorDetails = result.details ? `: ${JSON.stringify(result.details)}` : ''
        throw new Error(errorMsg + errorDetails)
      }

      // Actualizar datos locales
      const updatedTecnico = result.success ? result.data : result
      setTecnicoData(updatedTecnico)
      
      // Actualizar formData con los nuevos datos guardados
      setFormData({
        nombres: updatedTecnico.nombres || '',
        apellidos: updatedTecnico.apellidos || '',
        oficio: updatedTecnico.oficio || '',
        descripcion: updatedTecnico.descripcion || '',
        ubicacion: updatedTecnico.ubicacion || '',
        disponible: updatedTecnico.disponible !== undefined ? updatedTecnico.disponible : true,
        experienciaAnios: updatedTecnico.experienciaAnios || 0,
        precioMin: updatedTecnico.precioMin ? parseFloat(updatedTecnico.precioMin) : 0,
        precioMax: updatedTecnico.precioMax ? parseFloat(updatedTecnico.precioMax) : 0
      })
      
      setSuccessMessage('✅ Perfil actualizado exitosamente')
      setEditando(false)
      
      // Cerrar sidebar en móvil después de guardar
      if (isMobile) {
        setSidebarOpen(false)
      }

      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setSuccessMessage(null), 3000)

    } catch (err: any) {
      console.error('Error guardando perfil:', err)
      setError(err?.message || 'Error al guardar los cambios')
    } finally {
      setSaving(false)
    }
  }

  const handleCancelar = () => {
    setEditando(false)
    setError(null)
    setSuccessMessage(null)
    
    // Restaurar datos originales
    if (tecnicoData) {
      setFormData({
        nombres: tecnicoData.nombres || '',
        apellidos: tecnicoData.apellidos || '',
        oficio: tecnicoData.oficio || '',
        descripcion: tecnicoData.descripcion || '',
        ubicacion: tecnicoData.ubicacion || '',
        disponible: tecnicoData.disponible !== undefined ? tecnicoData.disponible : true,
        experienciaAnios: tecnicoData.experienciaAnios || 0,
        precioMin: tecnicoData.precioMin ? parseFloat(tecnicoData.precioMin) : 0,
        precioMax: tecnicoData.precioMax ? parseFloat(tecnicoData.precioMax) : 0
      })
    }
  }

  const handleInputChange = (field: keyof TecnicoProfile, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    )
  }

  if (!user || !tecnicoData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">No se pudo cargar el perfil</p>
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

  const nombreCompleto = `${formData.nombres} ${formData.apellidos}`.trim()
  const iniciales = nombreCompleto ? nombreCompleto.charAt(0).toUpperCase() : 'U'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <HeaderAdmin 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onNotificationClick={() => setShowNotifications(!showNotifications)}
        notifications={notifications}
        user={user}
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
        <main className="flex-1 pt-20 px-4 sm:px-8 pb-8 lg:ml-64 transition-all duration-300">
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

            {/* Mensajes de éxito/error */}
            {successMessage && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-green-700 font-medium">{successMessage}</p>
              </div>
            )}

            {error && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-700 font-medium">⚠️ {error}</p>
              </div>
            )}

            {/* Información principal */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 lg:mb-8 gap-4">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl lg:rounded-3xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                      {iniciales}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 truncate">
                      {nombreCompleto || user.nombre}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-blue-600 font-medium">
                      {formData.oficio || 'Técnico'}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {formData.ubicacion || 'Sin ubicación'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => editando ? handleCancelar() : setEditando(true)}
                  disabled={saving}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl lg:rounded-2xl font-bold hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editando ? 'Cancelar' : 'Editar Perfil'}
                </button>
              </div>

              {/* Información de contacto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombres *</label>
                    {editando ? (
                      <input
                        type="text"
                        value={formData.nombres}
                        onChange={(e) => handleInputChange('nombres', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                        placeholder="Ej: Juan Carlos"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{formData.nombres || '-'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos *</label>
                    {editando ? (
                      <input
                        type="text"
                        value={formData.apellidos}
                        onChange={(e) => handleInputChange('apellidos', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                        placeholder="Ej: Pérez García"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{formData.apellidos || '-'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <p className="text-gray-900 font-medium text-sm sm:text-base break-all">
                      {user.email || tecnicoData.user?.email || '-'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">El email no se puede cambiar desde aquí</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Oficio</label>
                    {editando ? (
                      <input
                        type="text"
                        value={formData.oficio}
                        onChange={(e) => handleInputChange('oficio', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                        placeholder="Ej: Electricista, Fontanero, etc."
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{formData.oficio || '-'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                    {editando ? (
                      <input
                        type="text"
                        value={formData.ubicacion}
                        onChange={(e) => handleInputChange('ubicacion', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                        placeholder="Ej: Trujillo, La Libertad"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{formData.ubicacion || '-'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Años de Experiencia</label>
                    {editando ? (
                      <input
                        type="number"
                        value={formData.experienciaAnios}
                        onChange={(e) => handleInputChange('experienciaAnios', parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900"
                        min="0"
                        placeholder="Ej: 5"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium text-sm sm:text-base">
                        {formData.experienciaAnios || 0} años
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6 lg:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descripción Profesional</label>
                {editando ? (
                  <textarea
                    value={formData.descripcion}
                    onChange={(e) => handleInputChange('descripcion', e.target.value)}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base text-gray-900"
                    placeholder="Describe tu experiencia y especialidades..."
                  />
                ) : (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {formData.descripcion || 'Sin descripción'}
                  </p>
                )}
              </div>

              {/* Precios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio Mínimo (S/)</label>
                  {editando ? (
                    <input
                      type="number"
                      value={formData.precioMin}
                      onChange={(e) => handleInputChange('precioMin', parseFloat(e.target.value) || 0)}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      min="0"
                      step="0.01"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium text-sm sm:text-base">
                      S/ {formData.precioMin || 0}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio Máximo (S/)</label>
                  {editando ? (
                    <input
                      type="number"
                      value={formData.precioMax}
                      onChange={(e) => handleInputChange('precioMax', parseFloat(e.target.value) || 0)}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      min="0"
                      step="0.01"
                    />
                  ) : (
                    <p className="text-gray-900 font-medium text-sm sm:text-base">
                      S/ {formData.precioMax || 0}
                    </p>
                  )}
                </div>
              </div>

              {/* Estado de disponibilidad */}
              <div className="mb-6 lg:mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.disponible}
                    onChange={(e) => handleInputChange('disponible', e.target.checked)}
                    disabled={!editando}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {formData.disponible ? '✅ Disponible para nuevos trabajos' : '❌ No disponible actualmente'}
                  </span>
                </label>
              </div>

              {editando && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleGuardar}
                    disabled={saving}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 rounded-xl lg:rounded-2xl font-bold hover:scale-105 transition-all shadow-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {saving ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                  <button
                    onClick={handleCancelar}
                    disabled={saving}
                    className="bg-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-xl lg:rounded-2xl font-bold hover:bg-gray-400 transition-all text-sm sm:text-base disabled:opacity-50"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>

            {/* Estadísticas del perfil */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl p-4 sm:p-6 border border-gray-100">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">Estadísticas del Perfil</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-blue-900">
                    {tecnicoData.trabajosCompletados || 0}
                  </p>
                  <p className="text-xs sm:text-sm text-blue-600 font-medium">Trabajos Completados</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-green-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-green-900">
                    {parseFloat(tecnicoData.calificacionPromedio || '0').toFixed(1)}
                  </p>
                  <p className="text-xs sm:text-sm text-green-600 font-medium">Calificación Promedio</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-yellow-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-yellow-900">
                    {tecnicoData._count?.reviews || 0}
                  </p>
                  <p className="text-xs sm:text-sm text-yellow-600 font-medium">Reviews</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-xl lg:rounded-2xl">
                  <p className="text-xl sm:text-2xl font-black text-purple-900">
                    {formData.experienciaAnios || 0}
                  </p>
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