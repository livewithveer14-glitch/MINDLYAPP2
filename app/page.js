import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>This is the homepage.</p>
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <Link href="/api/test">Test API Route</Link>
    </div>
  )
}
