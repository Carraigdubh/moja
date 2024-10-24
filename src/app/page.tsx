import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Firebase Test App</h1>
      <div className="space-x-4">
        <Link href="/write" className="text-blue-500 underline">
          Write Data
        </Link>
        <Link href="/read" className="text-blue-500 underline">
          Read Data
        </Link>
      </div>
    </div>
  );
}