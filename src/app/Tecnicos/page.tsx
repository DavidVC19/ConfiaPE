'use client'

import { useState } from "react"
import Header from "@/components/Header"
import TecnicoCard from "@/components/TecnicoCard"

export default function TecnicosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")
  const [vistaGrid, setVistaGrid] = useState(true)

  const tecnicos = [
    {
      id: 1,
      nombre: "Carlos Martínez",
      oficio: "Electricista",
      estrellas: 4.8,
      imagen: "/images/olivis.jpg",
      descripcion: "Especialista en instalaciones eléctricas y mantenimiento residencial.",
    },
    {
      id: 2,
      nombre: "Laura Gómez",
      oficio: "Fontanera",
      estrellas: 4.6,
      imagen: "/images/olivis.jpg",
      descripcion: "Experta en reparación de fugas y sistemas de agua.",
    },
    {
      id: 3,
      nombre: "José Ramírez",
      oficio: "Técnico en aire acondicionado",
      estrellas: 4.9,
      imagen: "/images/olivis.jpg",
      descripcion: "Instalación y mantenimiento de equipos de refrigeración.",
    },
    {
      id: 4,
      nombre: "Ana Torres",
      oficio: "Pintora",
      estrellas: 4.7,
      imagen: "/images/olivis.jpg",
      descripcion: "Experta en pintura interior y exterior de alta calidad.",
    },
    {
      id: 5,
      nombre: "Miguel Ángel Castro",
      oficio: "Carpintero",
      estrellas: 4.9,
      imagen: "/images/olivis.jpg",
      descripcion: "Especialista en muebles a medida y reparaciones de madera.",
    },
    {
      id: 6,
      nombre: "Sandra Vargas",
      oficio: "Cerrajera",
      estrellas: 4.5,
      imagen: "/images/olivis.jpg",
      descripcion: "Servicios de seguridad y cerrajería 24/7.",
    },
  ]

  const categorias = [
    { nombre: "Todos", icono: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", color: "from-gray-600 to-slate-700" },
    { nombre: "Electricista", icono: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-yellow-400 to-orange-500" },
    { nombre: "Fontanero", icono: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", color: "from-blue-400 to-cyan-500" },
    { nombre: "Aire Acondicionado", icono: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z", color: "from-sky-400 to-blue-600" },
    { nombre: "Carpintería", icono: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", color: "from-amber-400 to-orange-600" },
    { nombre: "Pintura", icono: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", color: "from-purple-400 to-pink-500" },
    { nombre: "Cerrajería", icono: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z", color: "from-gray-600 to-slate-700" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section Ultra Moderno */}
        <section className="relative py-20 px-4 mb-16 overflow-hidden">
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            {/* Badge animado */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-8 border border-blue-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">500+ técnicos disponibles ahora</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Encuentra tu Técnico
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Ideal Hoy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
              Profesionales verificados, disponibles y listos para ayudarte
            </p>

            {/* Buscador Premium */}
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-3">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-grow relative">
                      <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Buscar por nombre, especialidad o ubicación..."
                        className="w-full pl-14 pr-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-gray-800 text-lg bg-gray-50 border-2 border-transparent focus:border-blue-500 transition-all"
                      />
                    </div>
                    <button className="group/btn relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Buscar
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por categoría mejorados */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-gray-900">Filtrar por Especialidad</h2>
              </div>
              
              {/* Toggle de vista */}
              <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setVistaGrid(true)}
                  className={`p-2 rounded-lg transition-all ${vistaGrid ? 'bg-white shadow-md' : 'text-gray-500'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setVistaGrid(false)}
                  className={`p-2 rounded-lg transition-all ${!vistaGrid ? 'bg-white shadow-md' : 'text-gray-500'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  onClick={() => setCategoriaActiva(categoria.nombre)}
                  className={`group relative p-6 rounded-2xl font-bold transition-all duration-300 overflow-hidden ${
                    categoriaActiva === categoria.nombre
                      ? "shadow-2xl scale-105"
                      : "bg-white shadow-md hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {categoriaActiva === categoria.nombre && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoria.color}`}></div>
                  )}
                  <div className={`relative flex flex-col items-center gap-3 ${
                    categoriaActiva === categoria.nombre ? "text-white" : "text-gray-700"
                  }`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      categoriaActiva === categoria.nombre 
                        ? "bg-white/20 backdrop-blur-sm" 
                        : `bg-gradient-to-br ${categoria.color}`
                    }`}>
                      <svg className={`w-6 h-6 ${categoriaActiva === categoria.nombre ? "text-white" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoria.icono} />
                      </svg>
                    </div>
                    <span className="text-sm text-center">{categoria.nombre}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Estadísticas Premium */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "Técnicos Activos", color: "from-blue-600 to-cyan-600", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { num: "4.8★", label: "Calificación Promedio", color: "from-yellow-500 to-orange-500", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { num: "10K+", label: "Servicios Completados", color: "from-purple-600 to-pink-600", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { num: "98%", label: "Satisfacción", color: "from-green-500 to-emerald-600", icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" }
            ].map((stat, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={stat.icon} />
                    </svg>
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2 text-center">{stat.num}</div>
                  <div className="text-gray-600 text-sm font-semibold text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid de técnicos */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                Técnicos Disponibles
              </h2>
              <p className="text-gray-600 font-medium">Mostrando {tecnicos.length} profesionales verificados</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-semibold">Ordenar por:</span>
              <select className="bg-white border-2 border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium">
                <option>Mejor calificados</option>
                <option>Más cercanos</option>
                <option>Más experiencia</option>
                <option>Precio: menor a mayor</option>
              </select>
            </div>
          </div>

          <div className={`grid ${vistaGrid ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8`}>
            {tecnicos.map((t, idx) => (
              <div
                key={t.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <TecnicoCard tecnico={t} />
              </div>
            ))}
          </div>

          {/* Paginación mejorada */}
          <div className="flex justify-center items-center gap-3 mt-16">
            <button className="px-5 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>
            
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg">1</button>
              <button className="w-12 h-12 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">2</button>
              <button className="w-12 h-12 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">3</button>
              <span className="w-12 h-12 flex items-center justify-center text-gray-400">...</span>
              <button className="w-12 h-12 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all">10</button>
            </div>

            <button className="px-5 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center gap-2">
              Siguiente
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  )
}