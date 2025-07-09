import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to TasteGPT</h1>
      <p className="mb-10">Choose your assistant</p>
      <div className="flex gap-6">
        <Link href="/travel">
          <button className="px-6 py-3 bg-blue-600 rounded-lg">Travel Planner</button>
        </Link>
        <Link href="/fashion">
          <button className="px-6 py-3 bg-pink-500 rounded-lg">Fashion Assistant</button>
        </Link>
      </div>
    </div>
  );
}
