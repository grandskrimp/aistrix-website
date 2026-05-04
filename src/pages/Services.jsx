import Button from "../components/Button.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/siteData.js";

const groups = ["Разработка сайтов", "Продвижение", "Реклама", "Автоматизация", "Поддержка", "AI и IT"];

export default function Services() {
  return (
    <>
      <SEO
        title="Услуги"
        description="Сайты, продвижение и digital-решения для бизнеса: лендинги, корпоративные сайты, интернет-магазины, редизайн, SEO, реклама, CRM, автоматизация и поддержка."
      />

      <PageHero
        eyebrow="Услуги"
        title="Сайты, продвижение и digital-решения для бизнеса"
        text="Мы создаём сайты, которые можно сразу использовать для рекламы, SEO, сбора заявок и дальнейшего масштабирования."
        secondaryText="Посмотреть цены"
        secondaryTo="/pricing"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.slice(0, 4).map((group) => (
            <div key={group} className="premium-card p-5">
              <Icon name="CheckCircle2" className="h-6 w-6 text-blue-600" />
              <p className="mt-4 font-semibold text-ink">{group}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Направления"
            title="От разработки сайта до digital-системы"
            text="Услуги можно запускать поэтапно: сначала сайт, затем SEO, реклама, аналитика, CRM, автоматизация и поддержка."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <SectionTitle
            eyebrow="Категории"
            title="Как услуги собираются в систему"
            text="Каждый блок можно заказать отдельно или объединить в комплексный проект для роста заявок."
            align="center"
          />
          <div className="mt-10 space-y-8">
            {groups.map((group) => {
              const items = services.filter((service) => service.category === group);
              if (!items.length) return null;

              return (
                <div key={group}>
                  <h2 className="text-2xl font-semibold text-ink">{group}</h2>
                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    {items.map((service) => (
                      <article key={service.slug} className="premium-card p-6">
                        <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
                          <div>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                              {service.time} / {service.price}
                            </span>
                            <h3 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-graphite">{service.description}</p>
                            <Button to={`/services/${service.slug}`} variant="ghost" className="mt-5 justify-start px-0">
                              Подробнее <Icon name="ArrowRight" className="h-4 w-4" />
                            </Button>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-ink">Что входит</p>
                            <div className="mt-3 grid gap-2">
                              {service.includes.slice(0, 5).map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-graphite">
                                  <Icon name="CheckCircle2" className="h-4 w-4 shrink-0 text-blue-600" />
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="premium-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <SectionTitle
                eyebrow="Для кого"
                title="Для бизнеса, которому нужен не просто сайт, а канал роста"
                text="Можно прийти с точной задачей или с ощущением, что текущий сайт, реклама и заявки работают недостаточно системно."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "сервисные компании",
                  "B2B и производства",
                  "товарный бизнес",
                  "эксперты и школы",
                  "команды перед рекламой",
                  "проекты с будущим SEO",
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
        title="Не уверены, с какой услуги начать?"
        text="Ответьте на вопросы квиза. Мы подскажем формат сайта, этапы, сроки и ориентир по бюджету."
      />
    </>
  );
}
