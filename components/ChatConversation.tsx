'use client'

import { useState } from "react"
import Image from "next/image"

interface Tecnico {
  id: number
  nombre: string
  oficio: string
  imagen: string
  telefono: string
}

interface Mensaje {
  id: number
  texto: string
  enviadoPor: 'usuario' | 'tecnico'
  timestamp: string
  leido: boolean
}

interface Chat {
  id: number
  tecnico: Tecnico
  ultimoMensaje: string
  timestamp: string
  noLeidos: number
  online: boolean
}

interface ChatConversationProps {
  chat: Chat
}

export default function ChatConversation({ chat }: ChatConversationProps) {
  const [mensaje, setMensaje] = useState('')
  
  // Mensajes de ejemplo
  const mensajes: Mensaje[] = [
    {
      id: 1,
      texto: "Hola, necesito ayuda con un problema eléctrico en mi casa",
      enviadoPor: 'usuario',
      timestamp: "14:25",
      leido: true
    },
    {
      id: 2,
      texto: "Hola! Por supuesto, ¿en qué puedo ayudarte? ¿Podrías describir el problema?",
      enviadoPor: 'tecnico',
      timestamp: "14:26",
      leido: true
    },
    {
      id: 3,
      texto: "Tengo un cortocircuito en el cuarto principal, las luces parpadean y a veces se va la luz completamente",
      enviadoPor: 'usuario',
      timestamp: "14:28",
      leido: true
    },
    {
      id: 4,
      texto: "Eso suena como un problema en el circuito o posiblemente en el tablero principal. ¿Cuándo comenzó este problema?",
      enviadoPor: 'tecnico',
      timestamp: "14:30",
      leido: true
    }
  ]

  const handleEnviarMensaje = () => {
    if (mensaje.trim()) {
      // Aquí se enviaría el mensaje
      console.log('Enviando mensaje:', mensaje)
      setMensaje('')
    }
  }

  const handleLlamar = () => {
    window.location.href = `tel:+51902608436`
  }

  const handleWhatsApp = () => {
    const mensaje = encodeURIComponent(`Hola ${chat.tecnico.nombre}, me comunico desde ConfiaPE para consultar sobre tus servicios.`)
    window.open(`https://wa.me/51902608436?text=${mensaje}`, '_blank')
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header de la conversación */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Image
                src={chat.tecnico.imagen}
                alt={chat.tecnico.nombre}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-blue-200 shadow-lg"
              />
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900">{chat.tecnico.nombre}</h2>
              <p className="text-sm text-blue-600 font-medium">{chat.tecnico.oficio}</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500">
                  {chat.online ? 'En línea' : 'Desconectado'}
                </span>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3">
            <button
              onClick={handleLlamar}
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-2xl hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              title="Llamar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>

            <button
              onClick={handleWhatsApp}
              className="group bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-2xl hover:scale-105 transition-all shadow-lg flex items-center gap-2"
              title="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        <div className="space-y-4">
          {mensajes.map((mensaje) => (
            <div
              key={mensaje.id}
              className={`flex ${mensaje.enviadoPor === 'usuario' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${mensaje.enviadoPor === 'usuario' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    mensaje.enviadoPor === 'usuario'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-md'
                      : 'bg-white text-gray-900 rounded-bl-md shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{mensaje.texto}</p>
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${mensaje.enviadoPor === 'usuario' ? 'text-right' : 'text-left'}`}>
                  {mensaje.timestamp}
                </div>
              </div>
              
              {mensaje.enviadoPor === 'tecnico' && (
                <div className="order-2 ml-3 flex-shrink-0">
                  <Image
                    src={chat.tecnico.imagen}
                    alt={chat.tecnico.nombre}
                    width={32}
                    height={32}
                    className="rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Input de mensaje */}
      <div className="p-6 border-t border-gray-200 bg-white">
        <div className="flex gap-3">
          <input
            type="text"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleEnviarMensaje()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleEnviarMensaje}
            disabled={!mensaje.trim()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
