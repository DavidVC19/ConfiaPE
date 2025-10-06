'use client'

import { useState, useEffect } from 'react'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TecnicoCard from "@/components/TecnicoCard"
import Link from "next/link"
import { useRouter } from 'next/navigation' 

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % servicios.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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
  ]

  const servicios = [
    { 
      nombre: "Electricidad", 
      icono: "⚡", 
      color: "from-yellow-400 to-orange-500",
      descripcion: "Instalaciones y reparaciones",
      bgColor: "bg-yellow-500/10"
    },
    { 
      nombre: "Fontanería", 
      icono: "🔧", 
      color: "from-blue-400 to-cyan-500",
      descripcion: "Tuberías y sistemas de agua",
      bgColor: "bg-blue-500/10"
    },
    { 
      nombre: "Climatización", 
      icono: "❄️", 
      color: "from-sky-400 to-blue-600",
      descripcion: "Aires acondicionados",
      bgColor: "bg-sky-500/10"
    },
    { 
      nombre: "Carpintería", 
      icono: "🪚", 
      color: "from-amber-400 to-orange-600",
      descripcion: "Muebles y estructuras",
      bgColor: "bg-amber-500/10"
    },
    { 
      nombre: "Pintura", 
      icono: "🎨", 
      color: "from-purple-400 to-pink-500",
      descripcion: "Interiores y exteriores",
      bgColor: "bg-purple-500/10"
    },
    { 
      nombre: "Cerrajería", 
      icono: "🔑", 
      color: "from-gray-600 to-slate-700",
      descripcion: "Seguridad y cerraduras",
      bgColor: "bg-gray-500/10"
    },
  ]
  const router = useRouter() 
  
  const [busqueda, setBusqueda] = useState("")
  const [resultados, setResultados] = useState(tecnicos)
    const handleBuscar = () => {
    const query = busqueda.trim()
    if (query !== "") {
      router.push(`/Tecnicos?search=${encodeURIComponent(query)}`)
    } else {
      router.push("/Tecnicos")
    }
  }
  const beneficios = [
    {
      icono: "🛡️",
      titulo: "Técnicos Verificados",
      descripcion: "Todos nuestros profesionales pasan por un riguroso proceso de verificación",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icono: "⚡",
      titulo: "Servicio Rápido",
      descripcion: "Encuentra y contrata técnicos disponibles en tiempo real",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icono: "💰",
      titulo: "Precios Justos",
      descripcion: "Compara precios y elige la mejor opción para tu presupuesto",
      color: "from-green-500 to-emerald-500"
    },
    {
      icono: "⭐",
      titulo: "Calidad Garantizada",
      descripcion: "Sistema de calificaciones y reseñas reales de clientes",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Cursor personalizado efecto */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-blue-500/20 pointer-events-none transition-all duration-300 z-50 blur-xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      <Header />

      <main className="flex-grow">
        {/* Hero Section Ultra Moderno */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          {/* Elementos decorativos animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
          </div>

          <div className={`relative max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              {/* Badge animado */}
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-xl rounded-full shadow-lg mb-8 border border-blue-100 animate-fade-in-down">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-sm font-semibold text-gray-700">Más de 500 técnicos disponibles ahora</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Encuentra Técnicos
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-reverse">
                  de Confianza
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-medium">
                La plataforma #1 que conecta profesionales verificados con clientes
              </p>
              <p className="text-lg text-blue-600 font-semibold mb-12">
                ⚡ Rápido · 🛡️ Seguro · 💯 Transparente
              </p>

              {/* Estadísticas animadas */}
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                {[
                  { num: "500+", label: "Técnicos", color: "text-blue-600" },
                  { num: "10K+", label: "Servicios", color: "text-indigo-600" },
                  { num: "4.8★", label: "Rating", color: "text-purple-600" }
                ].map((stat, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      <div className={`text-5xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                        {stat.num}
                      </div>
                      <div className="text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

{/* Buscador Ultra Moderno */}
<div className="max-w-4xl mx-auto">
  <div className="relative group">
    {/* Efecto de halo brillante */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>

    {/* Contenedor principal del buscador */}
    <div className="relative bg-white rounded-3xl shadow-2xl p-3 border border-gray-100">
      <div className="flex items-center gap-3">
        {/* Campo de búsqueda */}
        <div className="relative flex-grow">
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleBuscar()}
            placeholder="¿Qué servicio necesitas? Ej: electricista, fontanero, pintor..."
            className="w-full pl-14 pr-12 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-gray-800 text-lg bg-gray-50 border-2 border-transparent focus:border-blue-500 transition-all"
          />

          {/* Botón para limpiar texto (la X) */}
          {busqueda && (
            <button
              onClick={() => setBusqueda('')}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          )}
        </div>

        {/* Botón de búsqueda */}
        <button
          onClick={handleBuscar}
          className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative flex items-center gap-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Buscar
          </span>
        </button>
      </div>
    </div>
  </div>
</div>



            </div>
          </div>
        </section>

        {/* Servicios con efecto parallax */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                Servicios <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Populares</span>
              </h2>
              <p className="text-gray-600 text-xl">
                Encuentra al profesional perfecto para cualquier necesidad
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {servicios.map((servicio, index) => (
                <button
                  key={index}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${
                    activeService === index ? 'border-blue-500 scale-105' : 'border-transparent'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className={`absolute inset-0 ${servicio.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${servicio.color} rounded-3xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                      {servicio.icono}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-center text-lg">
                      {servicio.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 text-center">
                      {servicio.descripcion}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios con animación de scroll */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4">
                ¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ConfiaPE</span>?
              </h2>
              <p className="text-blue-200 text-xl">
                La mejor experiencia para clientes y técnicos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${beneficio.color} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    {beneficio.icono}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{beneficio.titulo}</h3>
                  <p className="text-blue-200 leading-relaxed">{beneficio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Técnicos destacados */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                Técnicos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Destacados</span>
              </h2>
              <p className="text-gray-600 text-xl">
                Profesionales verificados con las mejores calificaciones
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resultados.map((t, idx) => (
                <div
                  key={t.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <TecnicoCard tecnico={t} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/Tecnicos"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Ver todos los técnicos
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Cómo funciona - Rediseñado */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4">
                ¿Cómo <span className="text-yellow-300">Funciona</span>?
              </h2>
              <p className="text-blue-100 text-xl">
                Tres simples pasos para contratar el mejor servicio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Línea conectora */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              {[
                { icono: "🔍", titulo: "Busca", desc: "Encuentra el técnico perfecto usando nuestra búsqueda inteligente", num: "01" },
                { icono: "✅", titulo: "Compara", desc: "Revisa perfiles, calificaciones y precios de profesionales verificados", num: "02" },
                { icono: "🎉", titulo: "Contrata", desc: "Agenda tu servicio de forma segura y recibe atención de calidad", num: "03" }
              ].map((paso, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 hover:border-white/60 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute -top-6 -right-6 text-8xl font-black text-white/10">{paso.num}</div>
                    <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span className="text-6xl">{paso.icono}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-center">{paso.titulo}</h3>
                    <p className="text-blue-100 text-center leading-relaxed text-lg">
                      {paso.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Mejorado */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-[3rem] shadow-2xl p-12 md:p-16 text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-xl rounded-full mb-8 border border-white/30">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                    </span>
                    <span className="text-sm font-bold">Únete a más de 500 técnicos exitosos</span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                    ¿Eres un técnico<br />
                    <span className="text-yellow-300">profesional?</span>
                  </h2>
                  <p className="text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                    Únete a ConfiaPE y accede a miles de clientes que buscan tus servicios cada día
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group relative bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Registrarte como Técnico
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                    
                    <button className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Más Información
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}