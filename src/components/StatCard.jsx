export default function StatCard({ value, label }) {
  return (
    <div className="premium-card premium-card-hover relative overflow-hidden p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
      <div className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        <span className="bg-gradient-to-br from-blue-700 via-cyan-600 to-violet-700 bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-body">{label}</p>
    </div>
  );
}
