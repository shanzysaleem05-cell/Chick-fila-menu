export default function ItemLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-5 w-64 shimmer-bg rounded mb-8" />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-10 w-72 shimmer-bg rounded" />
          <div className="h-20 shimmer-bg rounded-2xl" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 shimmer-bg rounded-2xl" />
            ))}
          </div>
          <div className="h-64 shimmer-bg rounded-2xl" />
        </div>
        <div className="space-y-4">
          <div className="h-48 shimmer-bg rounded-2xl" />
          <div className="h-48 shimmer-bg rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
