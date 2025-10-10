'use client'

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [activeItem, setActiveItem] = useState('dashboard')

  // Determinar el item activo basándose en la URL actual
  useEffect(() => {
    if (pathname === '/admin') {
      setActiveItem('dashboard')
    } else if (pathname === '/admin/trabajos') {
      setActiveItem('trabajos')
    } else if (pathname === '/admin/clientes') {
      setActiveItem('clientes')
    } else if (pathname === '/admin/mensajes') {
      setActiveItem('mensajes')
    } else if (pathname === '/admin/calificaciones') {
      setActiveItem('calificaciones')
    } else if (pathname === '/admin/ingresos') {
      setActiveItem('ingresos')
    } else if (pathname === '/admin/disponibilidad') {
      setActiveItem('disponibilidad')
    } else if (pathname === '/admin/perfil') {
      setActiveItem('perfil')
    }
  }, [pathname])

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z',
      href: '/admin'
    },
    {
      id: 'trabajos',
      label: 'Mis Trabajos',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      href: '/admin/trabajos',
      badge: 2
    },
    {
      id: 'clientes',
      label: 'Clientes',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      href: '/admin/clientes'
    },
    {
      id: 'mensajes',
      label: 'Mensajes',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      href: '/admin/mensajes',
      badge: 3
    },
    {
      id: 'calificaciones',
      label: 'Calificaciones',
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      href: '/admin/calificaciones'
    },
    {
      id: 'ingresos',
      label: 'Ingresos',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      href: '/admin/ingresos'
    },
    {
      id: 'disponibilidad',
      label: 'Disponibilidad',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      href: '/admin/disponibilidad'
    },
    {
      id: 'perfil',
      label: 'Mi Perfil',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      href: '/admin/perfil'
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
                    {item.badge && (
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
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Verificado</p>
                  <p className="text-xs text-gray-600">Técnico certificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
