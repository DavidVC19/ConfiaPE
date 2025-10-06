import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const tecnicos = [
  {
    id: 1,
    nombre: "Carlos Martínez",
    oficio: "Electricista",
    estrellas: 4.8,
    imagen: "/images/olivis.jpg",
    descripcion: "Especialista en instalaciones eléctricas y mantenimiento residencial.",
    experiencia: "8 años",
    ubicacion: "Trujillo, La Libertad",
    telefono: "+51 987 654 321",
    email: "carlos.martinez@email.com",
    precio: "S/ 50 - 150",
    trabajosCompletados: 127,
    satisfaccion: 98,
    servicios: [
      "Instalación eléctrica completa",
      "Mantenimiento preventivo",
      "Reparación de cortocircuitos",
      "Instalación de luminarias",
      "Tableros eléctricos"
    ],
    horarios: "Lun - Sáb: 8:00 AM - 6:00 PM",
    certificaciones: ["Certificado SENATI", "Curso de Seguridad Eléctrica"],
    resenas: [
      {
        nombre: "María López",
        calificacion: 5,
        comentario: "Excelente trabajo, muy profesional y puntual. Resolvió el problema eléctrico rápidamente.",
        fecha: "Hace 2 semanas"
      },
      {
        nombre: "Jorge Pérez",
        calificacion: 5,
        comentario: "Muy recomendado. Explicó todo el proceso y dejó todo impecable.",
        fecha: "Hace 1 mes"
      },
      {
        nombre: "Ana Torres",
        calificacion: 4,
        comentario: "Buen servicio, llegó a tiempo y trabajó de manera eficiente.",
        fecha: "Hace 2 meses"
      }
    ]
  },
  {
    id: 2,
    nombre: "Laura Gómez",
    oficio: "Fontanera",
    estrellas: 4.6,
    imagen: "/images/olivis.jpg",
    descripcion: "Experta en reparación de fugas y sistemas de agua.",
    experiencia: "5 años",
    ubicacion: "Chiclayo, Lambayeque",
    telefono: "+51 987 654 322",
    email: "laura.gomez@email.com",
    precio: "S/ 40 - 120",
    trabajosCompletados: 89,
    satisfaccion: 96,
    servicios: [
      "Reparación de fugas",
      "Instalación de tuberías",
      "Mantenimiento de sanitarios",
      "Destape de desagües",
      "Instalación de calentadores"
    ],
    horarios: "Lun - Vie: 9:00 AM - 5:00 PM",
    certificaciones: ["Certificado de Gasfitería"],
    resenas: []
  },
  {
    id: 3,
    nombre: "José Ramírez",
    oficio: "Técnico en aire acondicionado",
    estrellas: 4.9,
    imagen: "/images/olivis.jpg",
    descripcion: "Instalación y mantenimiento de equipos de refrigeración.",
    experiencia: "10 años",
    ubicacion: "Piura, Perú",
    telefono: "+51 987 654 323",
    email: "jose.ramirez@email.com",
    precio: "S/ 60 - 200",
    trabajosCompletados: 215,
    satisfaccion: 99,
    servicios: [
      "Instalación de aire acondicionado",
      "Mantenimiento preventivo",
      "Recarga de gas refrigerante",
      "Reparación de compresores",
      "Limpieza profunda"
    ],
    horarios: "Lun - Dom: 8:00 AM - 8:00 PM",
    certificaciones: ["Técnico en Refrigeración", "Manejo de Gas Refrigerante"],
    resenas: []
  },
];

export default function TecnicoDetalle({ params }: { params: { id: string } }) {
  const tecnico = tecnicos.find((t) => t.id === Number(params.id));

  if (!tecnico) {
    return notFound();
  }

  const renderEstrellas = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Card del Técnico */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row gap-8 -mt-16">
                {/* Imagen de perfil */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <Image
                      src={tecnico.imagen}
                      alt={tecnico.nombre}
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover shadow-2xl border-4 border-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verificado
                    </div>
                  </div>
                </div>

                {/* Información principal */}
                <div className="flex-grow mt-4 md:mt-16">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {tecnico.nombre}
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold mb-3">
                    {tecnico.oficio}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {renderEstrellas(Math.floor(tecnico.estrellas))}
                      <span className="ml-2 text-lg font-bold text-gray-700">{tecnico.estrellas}</span>
                      <span className="text-gray-500 text-sm ml-1">({tecnico.trabajosCompletados} trabajos)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {tecnico.ubicacion}
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6">{tecnico.descripcion}</p>

                  {/* Botones de acción */}
                  <div className="flex flex-wrap gap-3">
                    <button className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Chatear ahora
                    </button>
                    <button className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Llamar
                    </button>
                    <button className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Info detallada */}
            <div className="lg:col-span-2 space-y-6">
              {/* Estadísticas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Estadísticas</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600">{tecnico.trabajosCompletados}</div>
                    <div className="text-sm text-gray-600 mt-1">Trabajos Completados</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600">{tecnico.satisfaccion}%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfacción</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600">{tecnico.experiencia}</div>
                    <div className="text-sm text-gray-600 mt-1">Experiencia</div>
                  </div>
                </div>
              </div>

              {/* Servicios ofrecidos */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  Servicios Ofrecidos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tecnico.servicios.map((servicio, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{servicio}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reseñas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Reseñas de Clientes
                </h2>
                {tecnico.resenas.length > 0 ? (
                  <div className="space-y-4">
                    {tecnico.resenas.map((resena, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{resena.nombre}</h4>
                            <div className="flex items-center gap-1 mt-1">
                              {renderEstrellas(resena.calificacion)}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{resena.fecha}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{resena.comentario}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Aún no hay reseñas para este técnico</p>
                )}
              </div>
            </div>

            {/* Columna derecha - Info de contacto */}
            <div className="space-y-6">
              {/* Tarjeta de contacto */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Teléfono</div>
                      <div className="font-semibold text-gray-800">{tecnico.telefono}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="font-semibold text-gray-800 text-sm">{tecnico.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Horario</div>
                      <div className="font-semibold text-gray-800 text-sm">{tecnico.horarios}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Precio estimado</div>
                      <div className="font-bold text-blue-600">{tecnico.precio}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Certificaciones</h4>
                  <div className="space-y-2">
                    {tecnico.certificaciones.map((cert, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}