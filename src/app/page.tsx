import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TecnicoCard from "@/components/TecnicoCard";

export default function Home() {
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
  ];

  const servicios = [
    { 
      nombre: "Electricidad", 
      icono: "⚡", 
      color: "from-yellow-400 to-orange-500",
      descripcion: "Instalaciones y reparaciones"
    },
    { 
      nombre: "Fontanería", 
      icono: "🔧", 
      color: "from-blue-400 to-cyan-500",
      descripcion: "Tuberías y sistemas de agua"
    },
    { 
      nombre: "Climatización", 
      icono: "❄️", 
      color: "from-sky-400 to-blue-600",
      descripcion: "Aires acondicionados"
    },
    { 
      nombre: "Carpintería", 
      icono: "🪚", 
      color: "from-amber-400 to-orange-600",
      descripcion: "Muebles y estructuras"
    },
    { 
      nombre: "Pintura", 
      icono: "🎨", 
      color: "from-purple-400 to-pink-500",
      descripcion: "Interiores y exteriores"
    },
    { 
      nombre: "Cerrajería", 
      icono: "🔑", 
      color: "from-gray-600 to-slate-700",
      descripcion: "Seguridad y cerraduras"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Encuentra Técnicos de Confianza
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Conectamos personas con profesionales verificados para servicios del hogar
              <span className="block mt-2 text-blue-600 font-semibold">
                Rápido, seguro y transparente
              </span>
            </p>

            {/* Estadísticas */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Técnicos verificados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">10K+</div>
                <div className="text-gray-600">Servicios completados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">4.8★</div>
                <div className="text-gray-600">Calificación promedio</div>
              </div>
            </div>

            {/* Buscador mejorado */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col sm:flex-row gap-3 border border-gray-100">
                <div className="flex-grow relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="¿Qué servicio necesitas? Ej: electricista, fontanero..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios populares */}
        <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Servicios Populares
              </h2>
              <p className="text-gray-600 text-lg">
                Encuentra al profesional perfecto para tu necesidad
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {servicios.map((servicio, index) => (
                <button
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${servicio.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {servicio.icono}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1 text-center">
                    {servicio.nombre}
                  </h3>
                  <p className="text-xs text-gray-600 text-center">
                    {servicio.descripcion}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Técnicos destacados */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Técnicos Destacados
              </h2>
              <p className="text-gray-600 text-lg">
                Profesionales verificados y mejor calificados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tecnicos.map((t) => (
                <TecnicoCard key={t.id} tecnico={t} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                Ver todos los técnicos →
              </button>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                ¿Cómo Funciona?
              </h2>
              <p className="text-blue-100 text-lg">
                Es fácil y rápido contratar servicios en ConfiaPE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🔍</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">1. Busca</h3>
                  <p className="text-blue-100">
                    Encuentra el técnico que necesitas usando nuestra búsqueda inteligente
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">✅</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">2. Compara</h3>
                  <p className="text-blue-100">
                    Revisa perfiles, calificaciones y precios de profesionales verificados
                  </p>
                </div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎉</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">3. Contrata</h3>
                  <p className="text-blue-100">
                    Agenda tu servicio de forma segura y recibe atención de calidad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">
                  ¿Eres un técnico profesional?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Únete a ConfiaPE y accede a miles de clientes que buscan tus servicios
                </p>
                <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Registrarte como Técnico
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}