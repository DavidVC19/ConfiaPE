'use client'

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

interface ClienteSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function ClienteSidebar({ isOpen, onClose }: ClienteSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState('dashboard')

  // Determinar el item activo basándose en la URL actual
  useEffect(() => {
    if (pathname === '/cliente') {
      setActiveItem('dashboard')
    } else if (pathname === '/cliente/buscar') {
      setActiveItem('buscar')
    } else if (pathname === '/cliente/trabajos') {
      setActiveItem('trabajos')
    } else if (pathname === '/cliente/chat') {
      setActiveItem('mensajes')
    } else if (pathname === '/cliente/favoritos') {
      setActiveItem('favoritos')
    } else if (pathname === '/cliente/historial') {
      setActiveItem('historial')
    } else if (pathname === '/cliente/perfil') {
      setActiveItem('perfil')
    }
  }, [pathname])

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      href: '/cliente'
    },
    {
      id: 'buscar',
      label: 'Buscar Técnicos',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      href: '/cliente/buscar'
    },
    {
      id: 'trabajos',
      label: 'Mis Trabajos',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      href: '/cliente/trabajos'
    },
    {
      id: 'mensajes',
      label: 'Mensajes',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      href: '/cliente/chat',
      badge: 0
    },
    {
      id: 'favoritos',
      label: 'Favoritos',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      href: '/cliente/favoritos'
    },
    {
      id: 'historial',
      label: 'Historial',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      href: '/cliente/historial'
    },
    {
      id: 'perfil',
      label: 'Mi Perfil',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      href: '/cliente/perfil'
    }
  ]

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Navegación */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveItem(item.id)
                      router.push(item.href)
                      onClose()
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative text-left ${
                      activeItem === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="font-medium">{item.label}</span>

                    {/* Badge de notificaciones */}
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className={`ml-auto px-2 py-1 text-xs rounded-full font-bold ${
                        activeItem === item.id
                          ? 'bg-white/20 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer del sidebar */}
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Bienvenido</p>
                  <p className="text-xs text-gray-600">Cliente ConfiaPE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
