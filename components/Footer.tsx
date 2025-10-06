export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ConfiaPE</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Encuentra fácilmente al técnico que necesitas para tus proyectos
            del hogar o empresa. Conecta con profesionales de confianza cerca de ti.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400 transition">Inicio</a></li>
            <li><a href="/sobrenosotros" className="hover:text-blue-400 transition">Sobre nosotros</a></li>
            <li><a href="/tecnicos" className="hover:text-blue-400 transition">Técnicos</a></li>
            <li><a href="/contacto" className="hover:text-blue-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="text-gray-400">📍 Perú, Trujillo</span></li>
            <li><span className="text-gray-400">📞 +51 902 608 436</span></li>
            <li><span className="text-gray-400">✉️ contacto@ConfiaPE.com</span></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.773-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.176.013.352.013.528 0 5.384-4.097 11.593-11.593 11.593-2.304 0-4.444-.676-6.246-1.838.319.038.625.051.957.051a8.18 8.18 0 0 0 5.077-1.749 4.096 4.096 0 0 1-3.827-2.843c.254.038.508.064.775.064.37 0 .739-.051 1.083-.14a4.089 4.089 0 0 1-3.277-4.01v-.051c.55.306 1.181.49 1.85.508a4.086 4.086 0 0 1-1.822-3.406c0-.749.203-1.439.558-2.037a11.61 11.61 0 0 0 8.426 4.273 4.61 4.61 0 0 1-.102-.939A4.086 4.086 0 0 1 17.98 4.9a8.075 8.075 0 0 0 2.593-.988 4.1 4.1 0 0 1-1.797 2.262A8.156 8.156 0 0 0 21 5.306a8.8 8.8 0 0 1-2.367 2.691z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm9.75 1a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} ConfiaPE. Todos los derechos reservados.
        </p>
        <p className="mt-2">
          Diseñado con ❤️ por <a href="https://gptonline.ai/" className="text-blue-400 hover:underline">GPTOnline.ai</a>
        </p>
      </div>
    </footer>
  );
}
