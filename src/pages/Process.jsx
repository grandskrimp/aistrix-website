import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import QualityRulesSection from "../components/QualityRulesSection.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { processSteps } from "../data/siteData.js";

export default function Process() {
  return (
    <>
      <SEO
        title="Процесс работы"
        description="Процесс AiStrix Digital: цель, структура продаж, прототип, дизайн, разработка, mobile, формы, SEO, аналитика, безопасность, запуск и поддержка."
      />

      <PageHero
        eyebrow="Процесс"
        title="Как мы создаем сайт как digital-продукт"
        text="Процесс построен вокруг правил качества: понятная цель страницы, структура продаж, безопасность, скорость, SEO-база, аналитика, формы, запуск и поддержка."
        secondaryText="Посмотреть услуги"
        secondaryTo="/services"
      >
        <div className="premium-card p-7">
          <Icon name="Workflow" className="h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-semibold text-ink">14 этапов</h2>
          <p className="mt-4 text-sm leading-7 text-graphite">
            От разбора задачи до инструкции клиенту и поддержки после запуска.
            На каждом этапе понятно, что делаем, зачем это нужно и что получает клиент.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Timeline"
            title="Подробный процесс работы"
            text="Такой процесс снижает риск хаоса, мертвых кнопок, потерянных заявок и технических долгов сразу после запуска."
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps} detailed />
          </div>
        </div>
      </section>

      <QualityRulesSection full />

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Что получает клиент"
            title="Результат каждого этапа фиксируется"
            text="Проект движется через конкретные артефакты: структура, прототип, дизайн, рабочий сайт, формы, SEO-база, аналитика, запуск и инструкция."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "цель и структура сайта",
              "прототип ключевых экранов",
              "единая дизайн-система",
              "рабочие страницы",
              "мобильная версия",
              "формы с защитой",
              "SEO и аналитика",
              "инструкция и поддержка",
            ].map((item) => (
              <article key={item} className="premium-card premium-card-hover p-6">
                <Icon name="CheckCircle2" className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold leading-7 text-ink">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите пройти процесс без хаоса и потери заявок?"
        text="Заполните квиз. Мы предложим первый этап, сроки, бюджет и план дальнейшего роста."
      />
    </>
  );
}
