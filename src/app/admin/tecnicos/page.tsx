'use client'

import { useState, useEffect } from 'react'
import { getAccessToken } from '@/lib/auth'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export default function AdminTecnicosPage() {
  const [tecnicos, setTecnicos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTecnico, setSelectedTecnico] = useState<any>(null)
  const [reniecData, setReniecData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTecnicos = async () => {
      try {
        const token = getAccessToken()
        const response = await fetch(`${API_URL}/api/admin/tecnicos`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await response.json()
        if (data.success) {
          setTecnicos(data.data)
        } else {
          setTecnicos([])
        }
      } catch (error) {
        console.error('Error fetching tecnicos:', error)
        setTecnicos([])
      } finally {
        setLoading(false)
      }
    }
    fetchTecnicos()
  }, [])

  const openValidationModal = async (tecnico: any) => {
    setSelectedTecnico(tecnico)
    try {
      const token = getAccessToken()
      const response = await fetch(`${API_URL}/api/tecnicos/${tecnico.id}/reniec`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (data.success) {
        setReniecData(data.data)
        setModalOpen(true)
      } else {
        setError(data.error || 'Error al obtener datos de RENIEC')
      }
    } catch (error: any) {
      setError(error.message || 'Error al obtener datos de RENIEC')
    }
  }

  const handleValidate = async () => {
    if (!selectedTecnico) return

    try {
      const token = getAccessToken()
      const response = await fetch(`${API_URL}/api/tecnicos/${selectedTecnico.id}/validar`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (data.success) {
        setTecnicos(tecnicos.map(t => t.id === selectedTecnico.id ? { ...t, verificado: true } : t))
        setModalOpen(false)
        setSelectedTecnico(null)
        setReniecData(null)
      } else {
        setError(data.error || 'Error al validar técnico')
      }
    } catch (error: any) {
      setError(error.message || 'Error al validar técnico')
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Técnicos</h1>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
      {loading ? (
        <p>Cargando técnicos...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oficio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tecnicos.map(tecnico => (
                <tr key={tecnico.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{tecnico.user.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{tecnico.user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{tecnico.oficio}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tecnico.verificado ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Validado
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        No Validado
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!tecnico.verificado && (
                      <button
                        onClick={() => openValidationModal(tecnico)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Validar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && selectedTecnico && reniecData && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Confirmar Validación</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Por favor, confirma que los datos del técnico coinciden con los datos de RENIEC.</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold">Datos del Técnico</h4>
                      <p><strong>Nombre:</strong> {selectedTecnico.user.nombre}</p>
                      <p><strong>DNI:</strong> {selectedTecnico.dni}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Datos de RENIEC</h4>
                      <p><strong>Nombre:</strong> {`${reniecData.nombres} ${reniecData.apellidoPaterno} ${reniecData.apellidoMaterno}`}</p>
                      <p><strong>DNI:</strong> {reniecData.dni}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleValidate}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Confirmar y Validar
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
