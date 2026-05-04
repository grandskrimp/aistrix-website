import CTASection from "../components/CTASection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import PricingCard from "../components/PricingCard.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { brand } from "../data/brand.js";
import { paymentFaq, priceFactors, pricingPlans } from "../data/siteData.js";

const compareRows = [
  ["Подходит для", "лендинга", "полноценного сайта", "сайта + роста", "интеграций"],
  ["Страницы", "1 страница", "до 7 страниц", "индивидуально", "индивидуально"],
  ["SEO-база", "базовая", "расширенная", "структура роста", "по задаче"],
  ["Аналитика", "GA/GTM placeholders", "формы и события", "рекламные события", "расширенная"],
  ["Интеграции", "форма", "формы и email", "заявки и каналы", "CRM / backend"],
  ["Поддержка", "по задаче", "после запуска", "после запуска", "по SLA"],
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Цены"
        description="Ориентиры стоимости AiStrix Digital: Start Site от 500$, Business Site от 1200$, Digital Growth от 2500$, IT / Automation индивидуально."
      />

      <PageHero
        eyebrow="Цены"
        title="Ориентиры по бюджету для сайта и digital-системы"
        text="Стоимость зависит от количества страниц, дизайна, текстов, интеграций, срочности, рекламы, SEO и личного кабинета."
        secondaryText="Посмотреть услуги"
        secondaryTo="/services"
      >
        <div className="premium-card p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Основной CTA</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink">{brand.mainCTA}</h2>
          <p className="mt-5 text-sm leading-7 text-graphite">
            Квиз помогает быстро понять тип проекта, цель, материалы, сроки и бюджет,
            чтобы предложить реалистичный первый этап.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Пакеты"
            title="Четыре стартовых ориентира"
            text="Пакеты помогают понять порядок бюджета. Точная смета появляется после короткого разбора задачи."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle
              eyebrow="Факторы"
              title="Что влияет на стоимость"
              text="Один и тот же тип сайта может отличаться по объему, если нужны сложные страницы, каталог, CRM, SEO, рекламные события или срочный запуск."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {priceFactors.map((factor) => (
                <div key={factor} className="premium-card premium-card-hover p-5">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-blue-600" />
                  <p className="mt-4 font-semibold leading-7 text-ink">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Сравнение"
            title="Что входит в пакеты"
            text="Таблица дает быстрый ориентир. Состав можно адаптировать под конкретную задачу."
          />
          <div className="mt-10 overflow-hidden rounded-[28px] border border-line bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[960px] text-left text-sm">
                <thead className="bg-slate-50 text-ink">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Критерий</th>
                    <th className="px-5 py-4 font-semibold">Start Site</th>
                    <th className="px-5 py-4 font-semibold">Business Site</th>
                    <th className="px-5 py-4 font-semibold">Digital Growth</th>
                    <th className="px-5 py-4 font-semibold">IT / Automation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-graphite">
                  {compareRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={`${row[0]}-${cell}`} className={`px-5 py-4 ${index === 0 ? "font-semibold text-ink" : ""}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="Оплата"
              title="FAQ по оплате и оценке"
              text="До старта важно зафиксировать объем работ, этапы, интеграции и понятные ожидания по результату."
            />
            <FAQAccordion items={paymentFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Нужна точная оценка под вашу задачу?"
        text="Заполните квиз: мы оценим формат проекта, объем, сроки, SEO, рекламу и интеграции."
      />
    </>
  );
}
