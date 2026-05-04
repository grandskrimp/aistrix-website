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
    <section
      className="relative overflow-hidden border-b border-blue-100/70"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(248,251,255,0.96), rgba(248,251,255,0.78), rgba(248,251,255,0.34)), url(${brand.sectionBackgroundPath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_28rem)]" />
      <div className="container-page relative py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={primaryTo} size="lg">
                {primaryText} <Icon name="ArrowRight" className="h-5 w-5" />
              </Button>
              {secondaryText && (
                <Button to={secondaryTo} variant="secondary" size="lg">
                  {secondaryText}
                </Button>
              )}
            </div>
          </div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </section>
  );
}
