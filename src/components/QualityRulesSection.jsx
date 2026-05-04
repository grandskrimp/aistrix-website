import Icon from "./Icon.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { brand } from "../data/brand.js";
import { qualityRules } from "../data/qualityRules.js";

export default function QualityRulesSection({ full = false }) {
  const rules = full ? qualityRules : qualityRules.slice(0, 10);

  return (
    <section
      className="section-space relative overflow-hidden border-y border-blue-100/70"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.92), rgba(239,246,255,0.78), rgba(245,243,255,0.58)), url(${brand.sectionBackgroundPath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_30rem)]" />
      <div className="container-page relative">
        <SectionTitle
          eyebrow="Правила качества"
          title={full ? "35 правил, по которым мы создаем сайты" : "35 правил, по которым мы создаем сайты"}
          text={
            full
              ? "Полный список правил помогает держать проект под контролем: архитектура, безопасность, скорость, SEO, аналитика, формы, запуск и поддержка."
              : "Мы делаем сайт не как набор красивых блоков, а как готовый digital-продукт: с архитектурой, безопасностью, скоростью, аналитикой, SEO-базой, понятной структурой продаж и подготовкой к масштабированию."
          }
          align={full ? "left" : "center"}
        />
        <div className={`mt-10 grid gap-4 ${full ? "md:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
          {rules.map((rule, index) => (
            <article key={rule.title} className="premium-card premium-card-hover relative overflow-hidden p-5">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-75" />
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold leading-6 text-ink">{rule.title}</h3>
                  {full && <p className="mt-3 text-sm leading-7 text-graphite">{rule.text}</p>}
                </div>
              </div>
              {!full && (
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-700">
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
