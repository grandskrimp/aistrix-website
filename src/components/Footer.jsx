import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";
import { brand } from "../data/brand.js";
import { contacts, navItems, services } from "../data/siteData.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const visibleServices = services.slice(0, 7);

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-slate-300">
      <div className="absolute inset-0 bg-dark-gradient opacity-95" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container-page relative py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
                <Icon name="Sparkles" className="h-5 w-5" />
              </div>
              <span className="text-xl font-semibold text-white">{brand.brandName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Сайты, продвижение и digital-решения для роста бизнеса. Создаём
              веб-проекты, готовые к рекламе, SEO, аналитике, интеграциям и развитию.
            </p>
            <Button to="/#quiz" className="mt-7">
              {brand.mainCTA} <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Навигация
            </h3>
            <ul className="mt-5 space-y-3">
              {[...navItems.slice(1), { label: "Процесс", path: "/process" }].map((item) => (
                <li key={item.path}>
                  <Link
                    className="text-sm text-slate-400 transition hover:text-cyan-300"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Услуги
            </h3>
            <ul className="mt-5 space-y-3">
              {visibleServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-sm text-slate-400 transition hover:text-cyan-300"
                    to={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
                href={contacts.telegramHref}
                onClick={() => trackEvent(trackingEvents.telegramClick, { placement: "footer" })}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon name="MessageCircle" className="h-4 w-4 text-cyan-400" />
                </span>
                {contacts.telegram}
              </a>
              <a
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
                href={contacts.emailHref}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon name="Mail" className="h-4 w-4 text-cyan-400" />
                </span>
                {contacts.email}
              </a>
              <a
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
                href={contacts.phoneHref}
                onClick={() => trackEvent(trackingEvents.phoneClick, { placement: "footer" })}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon name="Phone" className="h-4 w-4 text-cyan-400" />
                </span>
                {contacts.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <Link
                className="text-slate-400 transition hover:text-cyan-300"
                to="/privacy"
              >
                Политика конфиденциальности
              </Link>
              <Link
                className="text-slate-400 transition hover:text-cyan-300"
                to="/terms"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.brandName}. Все права защищены.</p>
          <p className="text-slate-400">{brand.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
