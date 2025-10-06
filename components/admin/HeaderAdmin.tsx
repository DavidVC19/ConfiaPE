'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

interface Notificacion {
  id: number
  clienteNombre: string
  clienteImagen: string
  servicio: string
  mensaje: string
  fecha: string
  leida: boolean
  tipo: 'solicitud' | 'cancelacion' | 'mensaje' | 'pago'
}

export default function AdminHeader() {
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false)
  const [mostrarPerfil, setMostrarPerfil] = useState(false)

  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([
    {
      id: 1,
      clienteNombre: "Juan Pablo García",
      clienteImagen: "/images/olivis.jpg",
      servicio: "Instalación eléctrica",
      mensaje: "ha solicitado tu servicio",
      fecha: "Hace 5 min",
      leida: false,
      tipo: 'solicitud'
    },
    {
      id: 2,
      clienteNombre: "María Fernández",
      clienteImagen: "/images/olivis.jpg",
      servicio: "Reparación de aire acondicionado",
      mensaje: "ha solicitado tu servicio",
      fecha: "Hace 15 min",
      leida: false,
      tipo: 'solicitud'
    },
    {
      id: 3,
      clienteNombre: "Carlos Mendoza",
      clienteImagen: "/images/olivis.jpg",
      servicio: "Mantenimiento eléctrico",
      mensaje: "ha confirmado el pago",
      fecha: "Hace 1 hora",
      leida: true,
      tipo: 'pago'
    },
    {
      id: 4,
      clienteNombre: "Ana López",
      clienteImagen: "/images/olivis.jpg",
      servicio: "Instalación de luminarias",
      mensaje: "te envió un mensaje",
      fecha: "Hace 2 horas",
      leida: true,
      tipo: 'mensaje'
    }
  ])

  const notificacionesNoLeidas = notificaciones.filter(n => !n.leida).length

  const marcarComoLeida = (id: number) => {
    setNotificaciones(notificaciones.map(n => 
      n.id === id ? { ...n, leida: true } : n
    ))
  }

  const getIconoTipo = (tipo: string) => {
    switch (tipo) {
      case 'solicitud':
        return (
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        )
      case 'pago':
        return (
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )
      case 'mensaje':
        return (
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        )
    }
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center gap-4 pl-30">


            {/* Logo */}
<Link href="/" className="group cursor-pointer relative z-10">
  <img
    src="/images/ConfiaPE.png"
    alt="ConfiaPE Logo"
    className="w-14 h-14 object-contain transform scale-550 transition-transform duration-300 group-hover:scale-[4.5]"
  />
</Link>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            {/* Notificaciones */}
            <div className="relative">
              <button
                onClick={() => {
                  setMostrarNotificaciones(!mostrarNotificaciones)
                  setMostrarPerfil(false)
                }}
                className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notificacionesNoLeidas > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {notificacionesNoLeidas}
                  </span>
                )}
              </button>

              {/* Dropdown de notificaciones */}
              {mostrarNotificaciones && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-bold text-gray-800">Notificaciones</h3>
                    {notificacionesNoLeidas > 0 && (
                      <span className="text-sm text-blue-600 font-semibold">
                        {notificacionesNoLeidas} nuevas
                      </span>
                    )}
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {notificaciones.length > 0 ? (
                      notificaciones.map((notif) => (
                        <Link
                          key={notif.id}
                          href={`/admin/solicitudes/${notif.id}`}
                          onClick={() => {
                            marcarComoLeida(notif.id)
                            setMostrarNotificaciones(false)
                          }}
                          className={`flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                            !notif.leida ? 'bg-blue-50' : ''
                          }`}
                        >
                          {getIconoTipo(notif.tipo)}
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-semibold text-gray-800 text-sm">
                                {notif.clienteNombre}
                              </p>
                              <span className="text-xs text-gray-500 whitespace-nowrap">
                                {notif.fecha}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {notif.mensaje}
                            </p>
                            <p className="text-xs text-blue-600 font-medium mt-1">
                              {notif.servicio}
                            </p>
                          </div>

                          {!notif.leida && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          )}
                        </Link>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <p className="text-gray-500">No tienes notificaciones</p>
                      </div>
                    )}
                  </div>

                  {notificaciones.length > 0 && (
                    <Link
                      href="/admin/notificaciones"
                      className="block p-3 text-center text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-colors"
                    >
                      Ver todas las notificaciones
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Mensajes */}
            <Link
              href="/admin/mensajes"
              className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </Link>

            {/* Perfil */}
            <div className="relative">
              <button
                onClick={() => {
                  setMostrarPerfil(!mostrarPerfil)
                  setMostrarNotificaciones(false)
                }}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="relative">
                  <Image
                    src="/images/olivis.jpg"
                    alt="Perfil"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-semibold text-gray-800">Carlos Martínez</p>
                  <p className="text-xs text-gray-500">Electricista</p>
                </div>
                <svg className="w-4 h-4 text-gray-600 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown de perfil */}
              {mostrarPerfil && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-semibold text-gray-800">Carlos Martínez</p>
                    <p className="text-sm text-gray-500">carlos@email.com</p>
                  </div>

                  <div className="p-2">
                    <Link
                      href="/admin/perfil"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-gray-700">Mi Perfil</span>
                    </Link>

                    <Link
                      href="/admin/configuracion"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">Configuración</span>
                    </Link>

                    <Link
                      href="/admin/estadisticas"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-gray-700">Estadísticas</span>
                    </Link>
                  </div>

                  <div className="p-2 border-t border-gray-200">
                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors w-full text-left">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="text-red-600 font-semibold">Cerrar Sesión</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}