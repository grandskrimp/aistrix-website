import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Отзывы"
        description="Отзывы клиентов AiStrix Digital о разработке лендингов, корпоративных сайтов, интернет-магазинов, редизайне и автоматизации."
      />

      <PageHero
        eyebrow="Отзывы клиентов"
        title="Доверие строится на понятной работе и результате"
        text="Отзывы демонстрационные и подготовлены как шаблон. Их легко заменить реальными историями клиентов, результатами и фотографиями."
        secondaryText="Посмотреть кейсы"
        secondaryTo="/cases"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["5 лет", "в разработке сайтов"],
            ["30+", "проектов"],
            ["7-21 день", "средний запуск"],
            ["после запуска", "поддержка"],
          ].map(([value, label]) => (
            <div key={value} className="premium-card p-5">
              <p className="text-3xl font-semibold text-ink">{value}</p>
              <p className="mt-2 text-sm text-graphite">{label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Отзывы"
            title="Что можно показать на странице доверия"
            text="Каждая карточка содержит клиента, компанию, услугу, текст отзыва и результат."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="premium-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <SectionTitle
                eyebrow="Результаты"
                title="Что чаще всего ценят клиенты"
                text="Личный контакт с Евгением, понятные этапы, помощь со структурой, аккуратный дизайн и поддержка после запуска."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "прямая коммуникация",
                  "помощь без готового ТЗ",
                  "аккуратная мобильная версия",
                  "формы и уведомления",
                  "структура под заявки",
                  "поддержка после запуска",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-ink">
                    <Icon name="CheckCircle2" className="h-5 w-5 text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите стать следующим понятным кейсом?"
        text="Команда поможет превратить задачу в структуру, сайт и рабочие формы для заявок."
      />
    </>
  );
}
