export default function CategoryLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb skeleton */}
      <div className="h-5 w-48 shimmer-bg rounded mb-8" />

      {/* Title skeleton */}
      <div className="space-y-3 mb-10">
        <div className="h-10 w-80 shimmer-bg rounded" />
        <div className="h-5 w-full max-w-lg shimmer-bg rounded" />
        <div className="h-4 w-48 shimmer-bg rounded" />
      </div>

      {/* Info box skeleton */}
      <div className="h-24 shimmer-bg rounded-2xl mb-8" />

      {/* Table skeleton */}
      <div className="rounded-2xl border border-brand-gray-mid overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex gap-4 px-4 py-3 border-b border-brand-gray-mid">
            <div className="h-5 flex-1 shimmer-bg rounded" />
            <div className="h-5 w-16 shimmer-bg rounded" />
            <div className="h-5 w-20 shimmer-bg rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
