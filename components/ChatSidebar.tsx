'use client'

import Image from "next/image"

interface Tecnico {
  id: number
  nombre: string
  oficio: string
  imagen: string
  telefono: string
}

interface Chat {
  id: number
  tecnico: Tecnico
  ultimoMensaje: string
  timestamp: string
  noLeidos: number
  online: boolean
}

interface ChatSidebarProps {
  chats: Chat[]
  selectedChat: Chat | null
  onChatSelect: (chat: Chat) => void
}

export default function ChatSidebar({ chats, selectedChat, onChatSelect }: ChatSidebarProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header del sidebar */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <h1 className="text-2xl font-black text-gray-900 mb-2">Chats</h1>
        <p className="text-gray-600">Conecta con tus técnicos</p>
      </div>

      {/* Lista de chats */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat)}
            className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-blue-50 ${
              selectedChat?.id === chat.id ? 'bg-blue-100 border-blue-200' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Avatar del técnico */}
              <div className="relative flex-shrink-0">
                <Image
                  src={chat.tecnico.imagen}
                  alt={chat.tecnico.nombre}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border-2 border-white shadow-lg"
                />
                {/* Indicador online */}
                {chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              {/* Información del chat */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-sm truncate">
                    {chat.tecnico.nombre}
                  </h3>
                  <span className="text-xs text-gray-500">{chat.timestamp}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate max-w-[180px]">
                    {chat.ultimoMensaje}
                  </p>
                  {chat.noLeidos > 0 && (
                    <div className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {chat.noLeidos}
                    </div>
                  )}
                </div>

                <div className="text-xs text-blue-600 font-medium mt-1">
                  {chat.tecnico.oficio}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer del sidebar */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            {chats.filter(chat => chat.online).length} técnicos en línea
          </p>
        </div>
      </div>
    </div>
  )
}
