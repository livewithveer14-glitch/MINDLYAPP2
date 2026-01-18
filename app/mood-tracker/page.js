export default function MoodTracker() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mood Tracker</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">How are you feeling today?</h2>
        <div className="flex space-x-4">
          {['😢', '😞', '😐', '🙂', '😄'].map((emoji, i) => (
            <button 
              key={i} 
              className="text-3xl p-3 border rounded-lg hover:bg-gray-50"
              onClick={() => alert(`Selected mood: ${emoji}`)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
      
      <div className="border p-4 rounded">
        <h3 className="font-semibold mb-2">Recent Mood History</h3>
        <p>Chart/Table will go here</p>
      </div>
    </div>
  )
}
