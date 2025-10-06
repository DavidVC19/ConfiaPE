'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Cambiar estilo del header al hacer scroll
      setScrolled(currentScrollY > 20)
      
      // Ocultar/mostrar header
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Ocultar el header en rutas específicas
  if (pathname.startsWith("/admin")) return null

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
{/* Logo mejorado */}
<Link
  href="/"
  className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105"
>
  <div className="flex items-center justify-center">
    <Image
      src="/images/ConfiaPE.png"
      alt="Logo ConfiaPE"
      width={250}
      height={80}
      className="object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300"
      priority
    />
  </div>
  <span className="sr-only">ConfiaPE - Plataforma de técnicos de confianza</span>
</Link>

        {/* Menú Desktop mejorado */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            href="/" 
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isActive('/') 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            Inicio
          </Link>
          <Link 
            href="/SobreNosotros" 
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isActive('/SobreNosotros') 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            Sobre Nosotros
          </Link>
          <Link 
            href="/Tecnicos" 
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isActive('/Tecnicos') 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            Técnicos
          </Link>
          <Link 
            href="/login" 
            className="ml-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Login
          </Link>
        </nav>

        {/* Botón menú móvil mejorado */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil mejorado */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-white to-blue-50 border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Inicio
              </div>
            </Link>
            <Link
              href="/SobreNosotros"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive('/SobreNosotros') 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sobre Nosotros
              </div>
            </Link>
            <Link
              href="/Tecnicos"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive('/Tecnicos') 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Técnicos
              </div>
            </Link>
            <Link
              href="/login"
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}