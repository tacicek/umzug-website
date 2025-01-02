export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Seiten</h2>
          <p className="text-gray-600">Verwalten Sie Ihre Webseiteninhalte</p>
          <a 
            href="/admin/pages" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Bearbeiten →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Medien</h2>
          <p className="text-gray-600">Verwalten Sie Ihre Bilder und Dateien</p>
          <a 
            href="/admin/media" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Bearbeiten →
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Einstellungen</h2>
          <p className="text-gray-600">Konfigurieren Sie Ihre Website</p>
          <a 
            href="/admin/settings" 
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Bearbeiten →
          </a>
        </div>
      </div>
    </div>
  )
} 