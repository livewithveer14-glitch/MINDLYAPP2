'use client'
import { useState } from 'react'

export default function Journal() {
  const [entry, setEntry] = useState('')
  
  const handleSubmit = () => {
    alert(`Journal entry saved: ${entry.substring(0, 50)}...`)
    setEntry('')
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Journal</h1>
      
      <div className="mb-6">
        <textarea 
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-48 p-4 border rounded-lg"
        />
      </div>
      
      <button 
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
      >
        Save Entry
      </button>
    </div>
  )
}
