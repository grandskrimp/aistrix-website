import Icon from "./Icon.jsx";

export default function ProcessTimeline({ steps, detailed = false }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-line md:block" />
      <div className="space-y-5">
        {steps.map((step, index) => (
          <article key={step.title} className="premium-card premium-card-hover relative p-6 md:ml-16">
            <div className="absolute -left-[4.5rem] top-6 hidden h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-sm font-semibold text-white shadow-lift md:grid">
              {index + 1}
            </div>
            <div className="flex items-start gap-4 md:hidden">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-graphite">{step.description}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-graphite">{step.description}</p>
            </div>
            {detailed && (
              <div className="mt-5 grid gap-3 lg:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                    <Icon name="UserRound" className="h-4 w-4" /> Что делаем
                  </p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{step.action}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-ink">Зачем это нужно</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{step.why}</p>
                </div>
                <div className="rounded-2xl bg-cyan-50 p-4">
                  <p className="text-sm font-semibold text-ink">Результат этапа</p>
                  <p className="mt-2 text-sm leading-6 text-graphite">{step.result}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
