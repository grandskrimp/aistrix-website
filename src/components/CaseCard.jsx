import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import ImageWithFallback from "./ImageWithFallback.jsx";

export default function CaseCard({ item }) {
  return (
    <article className="premium-card premium-card-hover overflow-hidden">
      <div className="p-3">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          aspect="aspect-[16/10]"
          label={item.title}
          icon="LayoutDashboard"
          className="rounded-[22px]"
        />
      </div>
      <div className="p-6 pt-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {item.type}
          </span>
          {item.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-graphite">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-graphite">
          <span className="font-semibold text-ink">Задача:</span> {item.task}
        </p>
        <p className="mt-2 text-sm leading-7 text-graphite">
          <span className="font-semibold text-ink">Что сделали:</span> {item.done}
        </p>
        <div className="mt-5 rounded-2xl bg-soft-gradient p-4 text-sm font-semibold text-blue-700">
          {item.result}
        </div>
        <Button to="/#quiz" variant="ghost" className="mt-4 justify-start px-0">
          Рассчитать похожий проект <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
