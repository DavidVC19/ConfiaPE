'use client'

interface Trabajo {
  id: number
  cliente: string
  servicio: string
  fecha: string
  estado: string
  precio: number
  calificacion: number | null
}

interface RecentJobsProps {
  trabajos: Trabajo[]
}

export default function RecentJobs({ trabajos }: RecentJobsProps) {
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Completado':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'En progreso':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Cancelado':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const renderEstrellas = (calificacion: number | null) => {
    if (!calificacion) return null
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < calificacion ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const formatFecha = (fecha: string) => {
    const date = new Date(fecha)
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short'
    })
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-black text-gray-900">Trabajos Recientes</h3>
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          Ver todos
        </button>
      </div>

      <div className="space-y-4">
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} className="group p-4 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                  {trabajo.cliente}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{trabajo.servicio}</p>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getEstadoColor(trabajo.estado)}`}>
                  {trabajo.estado}
                </span>
                <span className="text-lg font-bold text-gray-900">
                  S/ {trabajo.precio}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatFecha(trabajo.fecha)}
                </div>
                
                {trabajo.calificacion && (
                  <div className="flex items-center gap-2">
                    {renderEstrellas(trabajo.calificacion)}
                    <span className="text-sm text-gray-600">({trabajo.calificacion}/5)</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                
                <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón para ver más trabajos */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg">
          Ver Todos los Trabajos
        </button>
      </div>
    </div>
  )
}
