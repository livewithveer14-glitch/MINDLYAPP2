import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mindly App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Navigation Card */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Navigation</h2>
          <div className="space-y-2">
            <Link href="/dashboard" className="block p-2 border rounded hover:bg-gray-50">
              → Dashboard
            </Link>
            <Link href="/mood-tracker" className="block p-2 border rounded hover:bg-gray-50">
              → Mood Tracker
            </Link>
            <Link href="/journal" className="block p-2 border rounded hover:bg-gray-50">
              → Journal
            </Link>
            <Link href="/meditation" className="block p-2 border rounded hover:bg-gray-50">
              → Meditation
            </Link>
            <Link href="/api/test" className="block p-2 border rounded hover:bg-gray-50">
              → Test API
            </Link>
          </div>
        </div>

        {/* Status Card */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">App Status</h2>
          <ul className="space-y-2">
            <li>✅ Homepage: Working</li>
            <li>🔄 API Routes: To be tested</li>
            <li>⚙️ Database: Not connected</li>
            <li>🔐 Auth: Not implemented</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
