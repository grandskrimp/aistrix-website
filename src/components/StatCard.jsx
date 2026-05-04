export default function StatCard({ value, label }) {
  return (
    <div className="premium-card premium-card-hover relative overflow-hidden p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
      <div className="text-3xl font-semibold text-ink">{value}</div>
      <p className="mt-3 text-sm leading-6 text-graphite">{label}</p>
    </div>
  );
}
