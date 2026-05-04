import Icon from "./Icon.jsx";
import { beforeAfter } from "../data/siteData.js";

function ListCard({ title, items, tone }) {
  const isAfter = tone === "after";

  return (
    <div className={`premium-card p-6 ${isAfter ? "border-blue-100 bg-blue-50/40" : ""}`}>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${isAfter ? "bg-blue-600 text-white" : "bg-slate-100 text-graphite"}`}>
          {isAfter ? "После" : "До"}
        </span>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-graphite">
            <Icon
              name={isAfter ? "CheckCircle2" : "X"}
              className={`mt-0.5 h-5 w-5 shrink-0 ${isAfter ? "text-blue-600" : "text-slate-400"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BeforeAfterBlock() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <ListCard title="До редизайна" items={beforeAfter.before} />
      <ListCard title="После работы" items={beforeAfter.after} tone="after" />
    </div>
  );
}
