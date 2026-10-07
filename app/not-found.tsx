import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-black text-brand-red mb-4">404</div>
        <h1 className="text-3xl font-display font-bold text-brand-dark mb-3">
          Page Not Found
        </h1>
        <p className="text-brand-gray-text mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It may have moved or the URL might be incorrect.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/menu" className="btn-primary">
            Browse Menu
          </Link>
          <Link href="/" className="btn-secondary">
            Go Home
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/menu/breakfast" className="text-brand-red hover:underline">Breakfast</Link>
          <Link href="/menu/entrees" className="text-brand-red hover:underline">Entrées</Link>
          <Link href="/menu" className="text-brand-red hover:underline">Prices</Link>
          <Link href="/calories" className="text-brand-red hover:underline">Calories</Link>
        </div>
      </div>
    </div>
  );
}
