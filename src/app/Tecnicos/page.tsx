'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TecnicoCard from "@/components/TecnicoCard"

export default function TecnicosPage() {
  const searchParams = useSearchParams()
  const searchFromURL = searchParams.get('search') || ""

  const [busqueda, setBusqueda] = useState(searchFromURL)
  const [resultados, setResultados] = useState([])
  const [vistaGrid, setVistaGrid] = useState(true)
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")
  const [modoCompacto, setModoCompacto] = useState(false)

  // Lista de técnicos
  const tecnicos = [
    { id: 1, nombre: "Carlos Martínez", oficio: "Electricista", estrellas: 4.8, imagen: "/images/olivis.jpg", descripcion: "Especialista en instalaciones eléctricas y mantenimiento residencial." },
    { id: 2, nombre: "Laura Gómez", oficio: "Fontanera", estrellas: 4.6, imagen: "/images/olivis.jpg", descripcion: "Experta en reparación de fugas y sistemas de agua." },
    { id: 3, nombre: "José Ramírez", oficio: "Aire Acondicionado", estrellas: 4.9, imagen: "/images/olivis.jpg", descripcion: "Instalación y mantenimiento de equipos de refrigeración." },
    { id: 4, nombre: "Ana Torres", oficio: "Pintora", estrellas: 4.7, imagen: "/images/olivis.jpg", descripcion: "Pintura interior y exterior de alta calidad." },
    { id: 5, nombre: "Miguel Ángel Castro", oficio: "Carpintero", estrellas: 4.9, imagen: "/images/olivis.jpg", descripcion: "Especialista en muebles a medida y reparaciones de madera." },
    { id: 6, nombre: "Sandra Vargas", oficio: "Cerrajera", estrellas: 4.5, imagen: "/images/olivis.jpg", descripcion: "Servicios de seguridad y cerrajería 24/7." },
  ]

  // 🔥 Filtro combinado entre categoría y texto (reactivo)
  useEffect(() => {
    let filtrados = tecnicos

    if (categoriaActiva !== "Todos") {
      filtrados = filtrados.filter(t =>
        t.oficio.toLowerCase().includes(categoriaActiva.toLowerCase())
      )
    }

    if (busqueda.trim()) {
      filtrados = filtrados.filter(t =>
        t.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        t.oficio.toLowerCase().includes(busqueda.toLowerCase())
      )
      setModoCompacto(true)
    } else {
      setModoCompacto(false)
    }

    setResultados(filtrados)
  }, [busqueda, categoriaActiva])

  // Si cambia el search param (por ejemplo al entrar desde Home), actualiza el input
  useEffect(() => {
    if (searchFromURL && !busqueda) {
      setBusqueda(searchFromURL)
    }
  }, [searchFromURL])

  // Limpiar búsqueda
  const limpiarBusqueda = () => {
    setBusqueda("")
    setCategoriaActiva("Todos")
  }

  const categorias = [
    { nombre: "Todos", icono: "⚙️" },
    { nombre: "Electricista", icono: "⚡" },
    { nombre: "Fontanera", icono: "🔧" },
    { nombre: "Aire Acondicionado", icono: "❄️" },
    { nombre: "Carpintero", icono: "🪚" },
    { nombre: "Pintora", icono: "🎨" },
    { nombre: "Cerrajera", icono: "🔑" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 mb-10 text-center overflow-hidden">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Encuentra tu Técnico Ideal
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-12 font-medium max-w-3xl mx-auto">
            Profesionales verificados, disponibles y listos para ayudarte.
          </p>

          {/* Buscador */}
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre o especialidad..."
              className="w-full pl-14 pr-12 py-4 rounded-2xl text-lg text-gray-800 bg-white border-2 border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {busqueda && (
              <button
                onClick={limpiarBusqueda}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            )}
          </div>
        </section>

        {/* Categorías */}
        <section
          className={`transition-all duration-500 ${
            modoCompacto
              ? 'sticky top-20 z-20 bg-white/80 backdrop-blur-xl border-y border-gray-200 shadow-sm py-2'
              : 'max-w-6xl mx-auto px-4 mb-12 py-8'
          }`}
        >
          <div
            className={`flex flex-wrap justify-center gap-3 ${
              modoCompacto ? 'overflow-x-auto scrollbar-hide px-2' : ''
            }`}
          >
            {categorias.map((cat) => (
              <button
                key={cat.nombre}
                onClick={() => setCategoriaActiva(cat.nombre)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all ${
                  categoriaActiva === cat.nombre
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50'
                } ${modoCompacto ? 'text-sm px-3 py-2' : ''}`}
              >
                <span>{cat.icono}</span>
                {!modoCompacto && cat.nombre}
              </button>
            ))}
          </div>
        </section>

        {/* Resultados */}
        <section className="max-w-7xl mx-auto px-4 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black text-gray-900">Técnicos Disponibles</h2>
            <p className="text-gray-600 font-medium">Mostrando {resultados.length} resultados</p>
          </div>

          {resultados.length > 0 ? (
            <div className={`grid ${vistaGrid ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
              {resultados.map((t, idx) => (
                <div key={t.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <TecnicoCard tecnico={t} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-12 text-lg">No se encontraron técnicos.</p>
          )}
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out; }
      `}</style>
    </div>
  )
}
