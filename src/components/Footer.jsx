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
    <footer className="border-t border-line bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex">
              <img
                src={brand.logoPath}
                alt={`${brand.brandName} logo`}
                className="h-auto w-[190px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-graphite">
              Сайты, продвижение и digital-решения для роста бизнеса. Создаем
              веб-проекты, готовые к рекламе, SEO, аналитике, интеграциям и развитию.
            </p>
            <Button to="/#quiz" variant="secondary" className="mt-6">
              {brand.mainCTA}
            </Button>
          </div>

          <div>
            <h3 className="font-semibold text-ink">Навигация</h3>
            <ul className="mt-4 space-y-3">
              {[...navItems.slice(1), { label: "Процесс", path: "/process" }].map((item) => (
                <li key={item.path}>
                  <Link className="text-sm text-graphite transition hover:text-blue-700" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-ink">Услуги</h3>
            <ul className="mt-4 space-y-3">
              {visibleServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    className="text-sm text-graphite transition hover:text-blue-700"
                    to={`/services/${service.slug}`}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-ink">Контакты</h3>
            <div className="mt-4 space-y-3 text-sm text-graphite">
              <a
                className="flex items-center gap-3 transition hover:text-blue-700"
                href={contacts.telegramHref}
                onClick={() => trackEvent(trackingEvents.telegramClick, { placement: "footer" })}
              >
                <Icon name="MessageCircle" className="h-4 w-4 text-blue-600" /> {contacts.telegram}
              </a>
              <a className="flex items-center gap-3 transition hover:text-blue-700" href={contacts.emailHref}>
                <Icon name="Mail" className="h-4 w-4 text-blue-600" /> {contacts.email}
              </a>
              <a
                className="flex items-center gap-3 transition hover:text-blue-700"
                href={contacts.phoneHref}
                onClick={() => trackEvent(trackingEvents.phoneClick, { placement: "footer" })}
              >
                <Icon name="Phone" className="h-4 w-4 text-blue-600" /> {contacts.phone}
              </a>
            </div>
            <p className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-graphite">
              Работаем как растущая digital / IT-команда: сайт, заявки, аналитика,
              реклама, SEO, интеграции и поддержка.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link className="text-graphite transition hover:text-blue-700" to="/privacy">
                Политика конфиденциальности
              </Link>
              <Link className="text-graphite transition hover:text-blue-700" to="/terms">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.brandName}. Все права защищены.</p>
          <p>{brand.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
