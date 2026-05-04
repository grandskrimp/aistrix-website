import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import ImageWithFallback from "./ImageWithFallback.jsx";

export default function CaseCard({ item }) {
  return (
    <article className="premium-card premium-card-hover group overflow-hidden">
      {/* Browser-style mockup header */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-3">
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 truncate rounded-md bg-white/80 px-2 py-0.5 text-[10px] font-medium text-muted ring-1 ring-line">
            aistrix.digital/{item.id}
          </span>
        </div>
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          aspect="aspect-[16/10]"
          label={item.title}
          icon="LayoutDashboard"
          className="rounded-2xl ring-1 ring-line transition group-hover:ring-blue-300"
        />
      </div>
      <div className="p-7 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
            {item.type}
          </span>
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-body">
          <span className="font-semibold text-ink">Задача:</span> {item.task}
        </p>
        <p className="mt-2 text-sm leading-7 text-body">
          <span className="font-semibold text-ink">Что сделали:</span> {item.done}
        </p>
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm font-semibold text-blue-700">
          <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-blue-600 align-middle" />
          {item.result}
        </div>
        <Button to="/#quiz" variant="ghost" className="mt-5 justify-start px-0">
          Рассчитать похожий проект <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
