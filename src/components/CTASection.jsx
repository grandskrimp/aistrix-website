import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { brand } from "../data/brand.js";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";

export default function CTASection({
  title = "Хотите сайт, который выглядит профессионально и помогает продавать?",
  text = "Опишите задачу — команда предложит структуру, сроки и примерную стоимость.",
  primaryText = brand.mainCTA,
  primaryTo = "/#quiz",
  secondaryText = "Получить консультацию",
  secondaryTo = "/contact",
}) {
  return (
    <section className="section-mist section-space">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-navy p-10 text-white shadow-[0_30px_90px_rgba(2,6,23,0.45)] sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-dark-gradient" />
          <div className="absolute inset-0 bg-dark-radial opacity-90" />
          <div
            className="absolute inset-0 opacity-25 mix-blend-screen"
            style={{
              backgroundImage: `url(${brand.ctaBackgroundPath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 grid-radial opacity-50" />
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-violet-600/30 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow-dark">
                <Icon name="Sparkles" className="h-4 w-4" />
                AiStrix Digital
              </span>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {text}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button
                to={primaryTo}
                size="lg"
                onClick={() => trackEvent(trackingEvents.mainCtaClick, { placement: "cta_section" })}
              >
                {primaryText} <Icon name="ArrowRight" className="h-5 w-5" />
              </Button>
              <Button to={secondaryTo} variant="light" size="lg">
                {secondaryText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
