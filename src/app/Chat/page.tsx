'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatSidebar from "@/components/ChatSidebar"
import ChatConversation from "@/components/ChatConversation"

// Tipos
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

// Datos de ejemplo de chats
const chatsData: Chat[] = [
  {
    id: 1,
    tecnico: {
      id: 1,
      nombre: "Carlos Martínez",
      oficio: "Electricista",
      imagen: "/images/olivis.jpg",
      telefono: "+51 987 654 321"
    },
    ultimoMensaje: "Hola, ¿en qué puedo ayudarte?",
    timestamp: "14:30",
    noLeidos: 2,
    online: true
  },
  {
    id: 2,
    tecnico: {
      id: 2,
      nombre: "Laura Gómez",
      oficio: "Fontanera",
      imagen: "/images/olivis.jpg",
      telefono: "+51 988 233 555"
    },
    ultimoMensaje: "Perfecto, te veo mañana a las 10 AM",
    timestamp: "12:15",
    noLeidos: 0,
    online: false
  },
  {
    id: 3,
    tecnico: {
      id: 3,
      nombre: "José Ramírez",
      oficio: "Técnico en aire acondicionado",
      imagen: "/images/olivis.jpg",
      telefono: "+51 912 223 112"
    },
    ultimoMensaje: "El diagnóstico está listo",
    timestamp: "09:45",
    noLeidos: 1,
    online: true
  }
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<Chat>(chatsData[0])
  const [chats, setChats] = useState<Chat[]>(chatsData)

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat)
    // Marcar mensajes como leídos
    setChats(prevChats => 
      prevChats.map(c => 
        c.id === chat.id ? { ...c, noLeidos: 0 } : c
      )
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="flex h-[calc(100vh-200px)]">
              {/* Sidebar de chats */}
              <div className="w-1/3 border-r border-gray-200 bg-gray-50">
                <ChatSidebar 
                  chats={chats} 
                  selectedChat={selectedChat}
                  onChatSelect={handleChatSelect}
                />
              </div>
              
              {/* Conversación principal */}
              <div className="flex-1 bg-white">
                <ChatConversation 
                  chat={selectedChat}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}