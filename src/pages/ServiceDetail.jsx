import { Link, useParams } from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import CTASection from "../components/CTASection.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { services } from "../data/siteData.js";
import { brand } from "../data/brand.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section-space">
        <div className="container-page">
          <div className="premium-card p-8 text-center">
            <h1 className="text-3xl font-semibold text-ink">Услуга не найдена</h1>
            <p className="mt-3 text-graphite">Проверьте адрес или вернитесь в раздел услуг.</p>
            <Link className="mt-6 inline-flex font-semibold text-blue-700" to="/services">
              Вернуться к услугам
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={service.title}
        description={`${service.description} ${service.time}, ориентир по цене: ${service.price}.`}
      />

      <PageHero
        eyebrow="Услуга"
        title={service.title}
        text={service.longDescription}
        primaryText={brand.mainCTA}
        secondaryText="Смотреть цены"
        secondaryTo="/pricing"
      >
        <div className="premium-card p-7">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lift">
            <Icon name={service.icon} className="h-8 w-8" />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-graphite">Срок</p>
              <p className="mt-1 text-2xl font-semibold text-ink">{service.time}</p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="text-sm text-blue-700">Ориентир по цене</p>
              <p className="mt-1 text-2xl font-semibold text-ink">{service.price}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-graphite">
            Можно начать без готового технического задания: команда поможет
            сформировать структуру, список материалов и план запуска.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Кому подходит"
                title={`Когда нужен формат "${service.shortTitle}"`}
                text="Эта услуга подходит, если вам важно быстро и понятно упаковать предложение, не потерять заявки и подготовить сайт к развитию."
              />
              <div className="mt-8 grid gap-3">
                {service.fitFor.map((item) => (
                  <div key={item} className="premium-card p-5">
                    <div className="flex gap-3">
                      <Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                      <p className="text-sm leading-7 text-graphite">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle
                eyebrow="Что входит"
                title="Состав работ"
                text="Финальный набор задач зависит от проекта, но базовая логика всегда строится вокруг результата для клиента."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                    <Icon name="CheckCircle2" className="mb-3 h-5 w-5 text-blue-600" />
                    <p className="text-sm font-semibold leading-6 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <SectionTitle
            eyebrow="Этапы"
            title="Как проходит работа"
            text="Каждый этап имеет понятный результат, чтобы проект двигался без хаоса и лишних согласований."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, index) => (
              <article key={step} className="premium-card premium-card-hover p-5">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-gradient text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-semibold leading-7 text-ink">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Заявка"
                title="Опишите задачу по услуге"
                text="Команда ответит, уточнит детали и предложит реалистичный план запуска."
              />
              <div className="mt-8 rounded-[28px] border border-blue-100 bg-blue-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Ориентир</p>
                <p className="mt-3 text-3xl font-semibold text-ink">{service.price}</p>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  Точная стоимость зависит от страниц, материалов, интеграций и срочности.
                </p>
              </div>
            </div>
            <ContactForm compact />
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Вопросы по услуге"
              text="Если ответа нет, можно отправить заявку: команда разберет вашу конкретную ситуацию."
            />
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Хотите обсудить ${service.shortTitle.toLowerCase()}?`}
        text="Напишите, что нужно запустить, какие материалы уже есть и когда нужен результат."
      />
    </>
  );
}
