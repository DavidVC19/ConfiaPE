'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      href: '/admin',
      label: 'Dashboard',
    },
    {
      href: '/admin/tecnicos',
      label: 'Técnicos',
    },
    {
      href: '/admin/clientes',
      label: 'Clientes',
    },
    {
      href: '/admin/servicios',
      label: 'Servicios',
    },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h2 className="text-2xl font-semibold">Admin</h2>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}
