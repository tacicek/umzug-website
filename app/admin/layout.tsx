import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  
  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Bestofferten Admin</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/admin/pages" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Seiten
              </a>
            </li>
            <li>
              <a href="/admin/media" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Medien
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
                Einstellungen
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        {children}
      </main>
    </div>
  )
} 