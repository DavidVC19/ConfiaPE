'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Tecnico {
  id: number
  nombre: string
  oficio: string
  estrellas: number
  imagen: string
  descripcion: string
}

export default function TecnicoCard({ tecnico }: { tecnico: Tecnico }) {
  const { id, nombre, oficio, estrellas, imagen, descripcion } = tecnico
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const renderEstrellas = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-star-${id}`}>
                <stop offset="50%" stopColor="#FBBF24" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <path fill={`url(#half-star-${id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 fill-gray-300" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1.5 text-sm font-bold text-gray-800">{estrellas}</span>
      </div>
    )
  }

  return (
    <div 
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
      
      <div className="relative">
        {/* Imagen con efectos */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 z-10"></div>
          <Image
            src={imagen}
            alt={nombre}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
            }`}
          />
          
          {/* Overlay gradient animado */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}></div>

          {/* Badges superiores */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20">
            <div className="flex flex-col gap-2">
              {/* Badge verificado */}
              <div className="inline-flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verificado
              </div>

              {/* Badge disponible */}
              <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-green-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Disponible
              </div>
            </div>

            {/* Botón favorito */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
            >
              <svg 
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? 'fill-red-500 text-red-500' : 'fill-none text-gray-700'
                }`}
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Info sobre la imagen */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transform transition-all duration-500">
              <h3 className="text-xl font-black text-gray-900 mb-1">
                {nombre}
              </h3>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {oficio}
                </span>
                {renderEstrellas(estrellas)}
              </div>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6">
          {/* Descripción */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {descripcion}
          </p>

          {/* Stats mejorados */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="text-center group/stat cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover/stat:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xl font-black text-gray-800">127</div>
              <div className="text-xs text-gray-500 font-medium">Trabajos</div>
            </div>

            <div className="text-center group/stat cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover/stat:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div className="text-xl font-black text-gray-800">98%</div>
              <div className="text-xs text-gray-500 font-medium">Satisfacción</div>
            </div>

            <div className="text-center group/stat cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover/stat:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xl font-black text-gray-800">5</div>
              <div className="text-xs text-gray-500 font-medium">Años exp.</div>
            </div>
          </div>

          {/* Habilidades destacadas */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">
                Instalación
              </span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold">
                Reparación
              </span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold">
                Mantenimiento
              </span>
            </div>
          </div>

          {/* Precio estimado */}
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-600 font-medium mb-1">Desde</div>
                <div className="text-2xl font-black text-gray-900">S/ 80</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-600 font-medium mb-1">Por servicio</div>
                <div className="text-sm text-green-600 font-bold">+ IVA incluido</div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="grid grid-cols-5 gap-3">
            <Link 
              href={`/Tecnicos/${id}`}
              className="col-span-3 group/btn relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-2xl font-bold text-sm overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Ver Perfil
              </span>
            </Link>
            
            <button className="group/btn bg-gradient-to-br from-green-500 to-emerald-600 text-white p-3.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            <button className="group/btn bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-3.5 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Badge de respuesta rápida */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      </div>
    </div>
  )
}