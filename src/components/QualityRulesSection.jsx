import Icon from "./Icon.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { qualityRules } from "../data/qualityRules.js";

const KEY_RULE_TITLES = [
  "Чистая архитектура",
  "Безопасность",
  "Оптимизация скорости",
  "Мобильная адаптация",
  "Интеграция заявок",
  "Google Analytics и Google Tag Manager",
  "SEO-база",
  "Юридические страницы",
  "Финальная проверка перед сдачей",
];

export default function QualityRulesSection({ full = false }) {
  const rules = full
    ? qualityRules
    : qualityRules.filter((r) => KEY_RULE_TITLES.includes(r.title));

  return (
    <section
      className={`relative overflow-hidden section-space ${full ? "section-white" : "section-mist"}`}
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/40 blur-[120px]" />
      <div className="container-page relative">
        <SectionTitle
          eyebrow="Правила качества"
          title={
            full
              ? "35 правил, по которым мы создаём сайты"
              : "Ключевые правила, по которым мы создаём сайты"
          }
          text={
            full
              ? "Полный список правил помогает держать проект под контролем: архитектура, безопасность, скорость, SEO, аналитика, формы, запуск и поддержка."
              : "На главной — 9 ключевых правил из 35. Полный список — на странице «Процесс»."
          }
          align={full ? "left" : "center"}
        />
        <div
          className={`mt-12 grid gap-5 ${
            full ? "md:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {rules.map((rule, index) => (
            <article
              key={rule.title}
              className="premium-card premium-card-hover relative overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-80" />
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.30)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold leading-6 text-ink">{rule.title}</h3>
                  {full && (
                    <p className="mt-3 text-sm leading-7 text-body">{rule.text}</p>
                  )}
                </div>
              </div>
              {!full && (
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <Icon name="CheckCircle2" className="h-4 w-4" />
                  Входит в стандарт
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
