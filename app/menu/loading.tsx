export default function MenuLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-5 w-32 shimmer-bg rounded mb-8" />
      <div className="h-12 w-96 shimmer-bg rounded mb-4" />
      <div className="h-5 w-full max-w-lg shimmer-bg rounded mb-3" />
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-8 w-24 shimmer-bg rounded-full" />
        ))}
      </div>
      <div className="rounded-2xl border border-brand-gray-mid overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="flex gap-4 px-4 py-3 border-b border-brand-gray-mid">
            <div className="h-5 w-24 shimmer-bg rounded" />
            <div className="h-5 flex-1 shimmer-bg rounded" />
            <div className="h-5 w-16 shimmer-bg rounded" />
            <div className="h-5 w-20 shimmer-bg rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
