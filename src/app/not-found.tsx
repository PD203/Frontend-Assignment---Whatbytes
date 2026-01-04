import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-8">Page Not Found</h2>
      <p className="text-lg mb-8">Could not find the requested resource.</p>
      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md text-lg hover:bg-primary-hover transition-colors duration-300">
        Return Home
      </Link>
    </div>
  );
}
