import Link from "next/link";

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
            <li>
              <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
            </li>
            <li>
              <Link href="/sobrenosotros" className="hover:text-blue-400 transition">Sobre nosotros</Link>
            </li>
            <li>
              <Link href="/tecnicos" className="hover:text-blue-400 transition">Técnicos</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-blue-400 transition">Contacto</Link>
            </li>
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
            {/* enlaces externos mantienen <a> */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition"
            >
              {/* SVG */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition"
            >
              {/* SVG */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition"
            >
              {/* SVG */}
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
