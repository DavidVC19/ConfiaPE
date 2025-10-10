'use client'

interface StatsCardProps {
  titulo: string
  valor: string | number
  icono: string
  color: 'blue' | 'green' | 'yellow' | 'purple' | 'indigo' | 'orange'
  cambio?: string
}

export default function StatsCard({ titulo, valor, icono, color, cambio }: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    orange: 'from-orange-500 to-orange-600'
  }

  const bgColorClasses = {
    blue: 'from-blue-50 to-blue-100',
    green: 'from-green-50 to-green-100',
    yellow: 'from-yellow-50 to-yellow-100',
    purple: 'from-purple-50 to-purple-100',
    indigo: 'from-indigo-50 to-indigo-100',
    orange: 'from-orange-50 to-orange-100'
  }

  const iconBgClasses = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    purple: 'bg-purple-100',
    indigo: 'bg-indigo-100',
    orange: 'bg-orange-100'
  }

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Fondo con gradiente sutil */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColorClasses[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
      
      <div className="relative">
        {/* Header de la card */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-2xl ${iconBgClasses[color]} group-hover:scale-110 transition-transform duration-300`}>
            <svg 
              className={`w-6 h-6 text-gray-700`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icono} />
            </svg>
          </div>
          
          {/* Indicador de cambio */}
          {cambio && (
            <div className="text-right">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                cambio.includes('+') 
                  ? 'bg-green-100 text-green-800' 
                  : cambio.includes('-')
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {cambio}
              </span>
            </div>
          )}
        </div>

        {/* Contenido principal */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">{titulo}</h3>
          <div className="text-3xl font-black text-gray-900 mb-2">
            {valor}
          </div>
        </div>

        {/* Barra de progreso decorativa */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div className={`h-1 bg-gradient-to-r ${colorClasses[color]} rounded-full transition-all duration-1000 ease-out`} 
                 style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
      </div>
    </div>
  )
}
