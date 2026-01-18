export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">User overview and stats will go here.</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Mood This Week</h3>
          <p>Chart placeholder</p>
        </div>
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Journal Entries</h3>
          <p>List placeholder</p>
        </div>
      </div>
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Today's Check-in
      </button>
    </div>
  )
}
