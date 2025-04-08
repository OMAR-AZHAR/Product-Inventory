// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold">Welcome to Inventory Manager</h1>
      <Link 
        href="/dashboard/products" 
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go to Dashboard
      </Link>
    </main>
  )
}