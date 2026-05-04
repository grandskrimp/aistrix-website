import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service }) {
  return (
    <article className="premium-card premium-card-hover group relative flex h-full flex-col overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-80" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-100/60 blur-2xl transition group-hover:bg-cyan-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 shadow-card">
          <Icon name={service.icon} />
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-graphite">
          {service.time}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-graphite">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {service.price}
        </span>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {service.category}
        </span>
      </div>
      <Button to={`/services/${service.slug}`} variant="ghost" className="mt-5 justify-start px-0">
        Подробнее <Icon name="ArrowRight" className="h-4 w-4" />
      </Button>
    </article>
  );
}
