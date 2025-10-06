import Header from "@/components/Header"
import TecnicoCard from "@/components/TecnicoCard"

export default function TecnicosPage() {
  const tecnicos = [
    {
      id: 1,
      nombre: "Carlos Martínez",
      oficio: "Electricista",
      estrellas: 4.8,
      imagen: "/images/olivis.jpg",
      descripcion:
        "Especialista en instalaciones eléctricas y mantenimiento residencial.",
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
    "Todos",
    "Electricista",
    "Fontanero",
    "Aire Acondicionado",
    "Carpintería",
    "Pintura",
    "Cerrajería",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-16 px-4 mb-12 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nuestros Técnicos Profesionales
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Más de 500 profesionales verificados listos para ayudarte
            </p>

            {/* Buscador */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-2xl shadow-xl p-2 flex gap-2">
                <div className="flex-grow relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Buscar por nombre o especialidad..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros por categoría */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <h2 className="text-xl font-bold text-gray-800">Filtrar por especialidad</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categorias.map((categoria, index) => (
                <button
                  key={index}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Estadísticas rápidas */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Técnicos Activos</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.8★</div>
              <div className="text-gray-600 text-sm">Calificación Promedio</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600 text-sm">Servicios Completados</div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfacción</div>
            </div>
          </div>
        </section>

        {/* Grid de técnicos */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Mostrando {tecnicos.length} técnicos
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm">Ordenar por:</span>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Mejor calificados</option>
                <option>Más cercanos</option>
                <option>Más experiencia</option>
                <option>Precio: menor a mayor</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tecnicos.map((t) => (
              <TecnicoCard key={t.id} tecnico={t} />
            ))}
          </div>

          {/* Paginación */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
              Anterior
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">3</button>
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
              Siguiente
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}