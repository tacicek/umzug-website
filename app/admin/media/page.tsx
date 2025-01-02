'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface MediaFile {
  name: string
  id: string
  updated_at: string
  created_at: string
  last_accessed_at: string
  metadata: {
    size: number
    mimetype: string
  }
}

export default function MediaPage() {
  const [uploading, setUploading] = useState(false)
  const [files, setFiles] = useState<MediaFile[]>([])

  useEffect(() => {
    fetchMedia()
  }, [])

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/media')
      const data = await response.json()
      setFiles(data)
    } catch (error) {
      console.error('Error fetching media:', error)
    }
  }

  const getFileUrl = (fileName: string) => {
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(fileName)
    return publicUrl
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', e.target.files[0])

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) throw new Error('Upload failed')
      
      await fetchMedia()
      alert('Datei erfolgreich hochgeladen!')
    } catch (error) {
      alert('Fehler beim Hochladen der Datei')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Medien</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Neue Datei hochladen</h2>
        <input
          type="file"
          onChange={handleUpload}
          disabled={uploading}
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Medienbibliothek</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.length > 0 ? (
            files.map((file) => (
              <div key={file.id} className="aspect-square relative group">
                <img
                  src={getFileUrl(file.name)}
                  alt={file.name}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => navigator.clipboard.writeText(getFileUrl(file.name))}
                    className="text-white bg-blue-600 px-3 py-1 rounded text-sm"
                  >
                    URL kopieren
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-400">Keine Medien</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 