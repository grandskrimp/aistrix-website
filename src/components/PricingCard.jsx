import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { brand } from "../data/brand.js";
import { cn } from "../utils/cn.js";

export default function PricingCard({ plan }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[24px] p-8 transition duration-300",
        plan.popular
          ? "border border-transparent bg-navy text-white shadow-[0_30px_80px_rgba(2,6,23,0.45)] hover:-translate-y-1"
          : "border border-line bg-white text-ink shadow-card hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.18)]",
      )}
    >
      {plan.popular && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-dark-gradient" />
          <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-dark-radial opacity-80" />
          <div className="pointer-events-none absolute -inset-px rounded-[25px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-60 blur-md" />
        </>
      )}
      <div className="relative flex h-full flex-col">
        {plan.popular && (
          <span className="absolute -top-2 right-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
            <Icon name="Sparkles" className="h-3.5 w-3.5" />
            Рекомендуем
          </span>
        )}
        <h3
          className={cn(
            "text-2xl font-semibold",
            plan.popular ? "text-white" : "text-ink",
          )}
        >
          {plan.title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm",
            plan.popular ? "text-slate-300" : "text-body",
          )}
        >
          {plan.subtitle}
        </p>
        <div
          className={cn(
            "mt-7 text-4xl font-semibold tracking-tight",
            plan.popular ? "text-white" : "text-ink",
          )}
        >
          {plan.price}
        </div>
        <ul className="mt-7 flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex gap-3 text-sm leading-6",
                plan.popular ? "text-slate-300" : "text-body",
              )}
            >
              <Icon
                name="CheckCircle2"
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0",
                  plan.popular ? "text-cyan-400" : "text-blue-600",
                )}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          to="/#quiz"
          className="mt-8"
          variant={plan.popular ? "primary" : "secondary"}
        >
          {brand.mainCTA} <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
