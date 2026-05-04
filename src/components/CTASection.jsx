import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { brand } from "../data/brand.js";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";

export default function CTASection({
  title = "Хотите сайт, который выглядит профессионально и помогает продавать?",
  text = "Опишите задачу - команда предложит структуру, сроки и примерную стоимость.",
  primaryText = brand.mainCTA,
  primaryTo = "/#quiz",
  secondaryText = "Получить консультацию",
  secondaryTo = "/contact",
}) {
  return (
    <section className="section-space">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-brand-gradient p-8 text-white shadow-lift sm:p-10 lg:p-14"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(13,23,55,0.86), rgba(37,99,235,0.58)), url(${brand.ctaBackgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                AiStrix Digital
              </span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button
                to={primaryTo}
                variant="dark"
                size="lg"
                onClick={() => trackEvent(trackingEvents.mainCtaClick, { placement: "cta_section" })}
              >
                {primaryText} <Icon name="ArrowRight" className="h-5 w-5" />
              </Button>
              <Button to={secondaryTo} variant="secondary" size="lg">
                {secondaryText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
