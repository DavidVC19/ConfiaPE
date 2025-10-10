'use client'

interface Notificacion {
  id: number
  tipo: string
  titulo: string
  mensaje: string
  timestamp: string
  leida: boolean
}

interface NotificationsPanelProps {
  notifications: Notificacion[]
  onClose: () => void
}

export default function NotificationsPanel({ notifications, onClose }: NotificationsPanelProps) {
  const getIconoTipo = (tipo: string) => {
    switch (tipo) {
      case 'nuevo_trabajo':
        return 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
      case 'mensaje':
        return 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      case 'calificacion':
        return 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
      default:
        return 'M15 17h5l-5-5V9a7.5 7.5 0 00-15 0v3l-5 5h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    }
  }

  const getColorTipo = (tipo: string) => {
    switch (tipo) {
      case 'nuevo_trabajo':
        return 'text-green-600 bg-green-100'
      case 'mensaje':
        return 'text-blue-600 bg-blue-100'
      case 'calificacion':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <>
      {/* Panel de notificaciones sin overlay que tape toda la pantalla */}
      <div className="fixed top-16 right-4 w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 z-50 max-h-[calc(100vh-6rem)] overflow-hidden animate-in slide-in-from-right-5 duration-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black">Notificaciones</h3>
              <p className="text-blue-100 text-sm">
                {notifications.filter(n => !n.leida).length} sin leer
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lista de notificaciones */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                  !notif.leida ? 'bg-blue-50/50' : ''
                }`}>
                  <div className="flex items-start gap-3">
                    {/* Icono del tipo */}
                    <div className={`p-2 rounded-xl ${getColorTipo(notif.tipo)} flex-shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIconoTipo(notif.tipo)} />
                      </svg>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm">{notif.titulo}</h4>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{notif.mensaje}</p>
                          <span className="text-xs text-gray-500 mt-2 block">{notif.timestamp}</span>
                        </div>
                        
                        {/* Indicador de no leído */}
                        {!notif.leida && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9a7.5 7.5 0 00-15 0v3l-5 5h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p className="text-gray-500 font-medium">No hay notificaciones</p>
              <p className="text-gray-400 text-sm mt-1">Te notificaremos cuando tengas nuevas actualizaciones</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-medium hover:scale-105 transition-all">
              Marcar todas como leídas
            </button>
          </div>
        )}
      </div>
    </>
  )
}
