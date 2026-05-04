import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { brand } from "../data/brand.js";
import { cn } from "../utils/cn.js";

export default function PricingCard({ plan }) {
  return (
    <article
      className={cn(
        "premium-card relative flex h-full flex-col p-7",
        plan.popular && "border-blue-200 bg-blue-50/40 shadow-lift",
      )}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
          Популярный
        </span>
      )}
      <h3 className="text-2xl font-semibold text-ink">{plan.title}</h3>
      <p className="mt-2 text-sm text-graphite">{plan.subtitle}</p>
      <div className="mt-7 text-4xl font-semibold text-ink">{plan.price}</div>
      <ul className="mt-7 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6 text-graphite">
            <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button to="/#quiz" className="mt-8" variant={plan.popular ? "primary" : "secondary"}>
        {brand.mainCTA} <Icon name="ArrowRight" className="h-4 w-4" />
      </Button>
    </article>
  );
}
