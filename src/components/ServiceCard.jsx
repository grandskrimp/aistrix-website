import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function ServiceCard({ service }) {
  return (
    <article className="premium-card premium-card-hover group relative flex h-full flex-col overflow-hidden p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/60 blur-3xl transition group-hover:bg-violet-100/70" />
      <div className="flex items-start justify-between gap-4">
        <div className="icon-tile">
          <Icon name={service.icon} className="h-6 w-6" />
        </div>
        <span className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-muted">
          {service.time}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-body">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
          {service.price}
        </span>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
          {service.category}
        </span>
      </div>
      <Button to={`/services/${service.slug}`} variant="ghost" className="mt-6 justify-start px-0">
        Подробнее <Icon name="ArrowRight" className="h-4 w-4" />
      </Button>
    </article>
  );
}
