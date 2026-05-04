import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { brand } from "../data/brand.js";

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryText = brand.mainCTA,
  primaryTo = "/#quiz",
  secondaryText,
  secondaryTo,
  children,
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-dark-radial opacity-80" />
      <div className="absolute inset-0 grid-radial opacity-50" />
      <div
        className="absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage: `url(${brand.sectionBackgroundPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="container-page relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              {title}
            </h1>
            {text && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{text}</p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={primaryTo} size="lg">
                {primaryText} <Icon name="ArrowRight" className="h-5 w-5" />
              </Button>
              {secondaryText && (
                <Button to={secondaryTo} variant="light" size="lg">
                  {secondaryText}
                </Button>
              )}
            </div>
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
