import AuditForm from "../components/AuditForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { brand } from "../data/brand.js";
import { auditChecks } from "../data/siteData.js";

const auditFaq = [
  {
    question: "Аудит действительно бесплатный?",
    answer:
      "Да. Команда бесплатно смотрит ключевые места сайта и дает короткие рекомендации, что можно улучшить.",
  },
  {
    question: "Что я получу после заявки?",
    answer:
      "Короткий разбор первого экрана, структуры, мобильной версии, форм, доверия, SEO-базы, аналитики и мертвых кнопок.",
  },
  {
    question: "Можно ли потом заказать редизайн?",
    answer:
      "Да. Если после аудита будет понятно, что сайт стоит обновить, команда предложит план и оценку.",
  },
  {
    question: "Подходит ли аудит для сайта на Tilda или WordPress?",
    answer:
      "Да. Аудит полезен для любого сайта, если он должен приводить заявки или готовится к рекламе.",
  },
];

export default function Audit() {
  return (
    <>
      <SEO
        title="Бесплатный аудит сайта"
        description="Бесплатно проверим сайт и покажем, что мешает заявкам: первый экран, mobile, скорость, структура, формы, доверие, SEO, аналитика и мертвые кнопки."
      />

      <PageHero
        eyebrow="Бесплатный аудит сайта"
        title="Бесплатно проверим ваш сайт и покажем, что мешает заявкам"
        text="Отправьте ссылку на сайт — мы посмотрим первый экран, структуру, мобильную версию, скорость, формы, доверие, SEO-базу, аналитику, ошибки и мертвые кнопки."
        primaryText="Получить аудит"
        primaryTo="/audit#audit-form"
        secondaryText="Заказать редизайн"
        secondaryTo="/services/redesign"
      >
        <div
          className="premium-card p-7"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.94), rgba(255,255,255,0.76)), url(${brand.ctaBackgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Icon name="Search" className="h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-semibold text-ink">Проверка перед ростом</h2>
          <p className="mt-4 text-sm leading-7 text-graphite">
            Подходит, если сайт есть, но заявок мало, планируется реклама, SEO или редизайн.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Проверка"
            title="Что проверяем"
            text="Аудит фокусируется на местах, которые чаще всего влияют на заявки, доверие и готовность сайта к продвижению."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {auditChecks.map((item) => (
              <article key={item} className="premium-card premium-card-hover p-5">
                <Icon name="CheckCircle2" className="h-6 w-6 text-blue-600" />
                <p className="mt-4 text-sm font-semibold leading-7 text-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audit-form" className="section-space bg-mist">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Что получите"
                title="Короткие рекомендации вместо абстрактных советов"
                text="Мы укажем, где сайт теряет внимание, что мешает доверию и какие изменения стоит сделать в первую очередь."
              />
              <div className="mt-8 grid gap-3">
                {[
                  "список слабых мест",
                  "идеи усиления первого экрана",
                  "замечания по мобильной версии",
                  "проверка форм, SEO и аналитики",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-semibold text-ink shadow-card">
                    <Icon name="CheckCircle2" className="h-5 w-5 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <AuditForm />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Вопросы об аудите"
              text="Аудит не заменяет полноценную стратегию, но помогает быстро понять, что мешает сайту работать лучше."
            />
            <FAQAccordion items={auditFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите понять, что мешает текущему сайту?"
        text="Отправьте ссылку. Мы посмотрим ключевые места и предложим первые улучшения."
        primaryText="Получить аудит"
        primaryTo="/audit#audit-form"
      />
    </>
  );
}
