import ImageWithFallback from "./ImageWithFallback.jsx";

export default function TestimonialCard({ item }) {
  return (
    <article className="premium-card premium-card-hover h-full p-6">
      <div className="flex items-center gap-4">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          aspect="aspect-square"
          label={item.name}
          icon="UserRound"
          className="h-14 w-14 rounded-2xl"
        />
        <div>
          <h3 className="font-semibold text-ink">{item.name}</h3>
          <p className="text-sm text-graphite">{item.company}</p>
        </div>
      </div>
      <div className="mt-5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 w-fit">
        {item.service}
      </div>
      <p className="mt-5 text-sm leading-7 text-graphite">“{item.text}”</p>
      <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-ink">
        Результат: {item.result}
      </p>
    </article>
  );
}
