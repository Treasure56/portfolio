export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="site-container py-16">
      <div className="h-10 w-2/3 max-w-xl rounded-xl bg-surface motion-safe:animate-pulse" />
      <div className="mt-4 h-10 w-1/2 max-w-md rounded-xl bg-surface motion-safe:animate-pulse" />
      <div className="mt-10 aspect-[2/1] w-full rounded-3xl bg-surface motion-safe:animate-pulse" />
    </div>
  );
}
