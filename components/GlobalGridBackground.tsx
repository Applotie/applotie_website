export default function GlobalGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      {/* Fine grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* Larger grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(229,43,43,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,43,43,0.08)_1px,transparent_1px)]
          bg-[size:240px_240px]
        "
      />
    </div>
  );
}