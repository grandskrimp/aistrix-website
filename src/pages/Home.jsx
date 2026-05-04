import AuditForm from "../components/AuditForm.jsx";
import BeforeAfterBlock from "../components/BeforeAfterBlock.jsx";
import Button from "../components/Button.jsx";
import CTASection from "../components/CTASection.jsx";
import CaseCard from "../components/CaseCard.jsx";
import CostQuiz from "../components/CostQuiz.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Icon from "../components/Icon.jsx";
import ProcessTimeline from "../components/ProcessTimeline.jsx";
import QualityRulesSection from "../components/QualityRulesSection.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import StatCard from "../components/StatCard.jsx";
import {
  auditChecks,
  cases,
  deliverables,
  faqItems,
  heroHighlights,
  needs,
  painPoints,
  processSteps,
  services,
  stats,
  trustBadges,
} from "../data/siteData.js";
import { brand } from "../data/brand.js";
import { trackEvent, trackingEvents } from "../components/analytics/tracking.js";

export default function Home() {
  return (
    <>
      <SEO
        title="Сайты и digital-системы для бизнеса"
        description="AiStrix Digital создает сайты, лендинги, интернет-магазины, SEO-базу, рекламную подготовку, CRM-интеграции и digital-решения для роста бизнеса."
      />

      <section
        className="relative min-h-[calc(100vh-80px)] overflow-hidden border-b border-blue-100/70 bg-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(248,251,255,0.94) 0%, rgba(248,251,255,0.76) 43%, rgba(248,251,255,0.18) 100%), url(${brand.heroBackgroundPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.18),transparent_34rem)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-2/3 w-2/3 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.20),transparent_32rem)]" />
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <Icon name="Sparkles" className="h-4 w-4" />
                {brand.tagline}
              </span>
              <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
                Создаём сайты и digital-системы, которые помогают бизнесу получать клиентов
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">
                AiStrix Digital разрабатывает сайты, лендинги, интернет-магазины и решения
                для продвижения бизнеса. Мы начинаем с сильной веб-разработки и строим
                полноценную digital / IT-компанию для роста клиентов.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/#quiz"
                  size="lg"
                  onClick={() => trackEvent(trackingEvents.mainCtaClick, { placement: "home_hero" })}
                >
                  {brand.mainCTA} <Icon name="ArrowRight" className="h-5 w-5" />
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  Посмотреть услуги
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/90 px-4 py-2 text-sm font-semibold text-graphite shadow-card backdrop-blur"
                  >
                    <Icon name="CheckCircle2" className="h-4 w-4 text-blue-600" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full bg-cyan-300/30 blur-3xl lg:block" />
              <div className="absolute -right-8 bottom-8 hidden h-32 w-32 rounded-full bg-violet-400/30 blur-3xl lg:block" />
              <div className="luxury-surface p-4 sm:p-5">
                <div className="blue-glass overflow-hidden rounded-[28px] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-cyan-200">Digital growth system</p>
                      <h2 className="mt-2 text-3xl font-semibold">AiStrix Stack</h2>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      Web + Growth
                    </span>
                  </div>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {heroHighlights.map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-2xl border p-4 ${
                          index === 4
                            ? "border-cyan-300/50 bg-cyan-300/16 text-white sm:col-span-2"
                            : "border-white/12 bg-white/8 text-white"
                        }`}
                      >
                        <p className="text-xs font-semibold uppercase text-white/55">Модуль</p>
                        <p className="mt-2 text-2xl font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-5 gap-2">
                    {[72, 48, 86, 64, 92].map((height, index) => (
                      <span
                        key={height}
                        className="rounded-full bg-gradient-to-t from-cyan-300 to-violet-400"
                        style={{ height: `${height}px`, opacity: 0.42 + index * 0.08 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {heroHighlights.map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[22px] border border-white/80 p-5 shadow-card backdrop-blur ${
                        index === 4 ? "bg-brand-gradient text-white sm:col-span-2" : "bg-white/90 text-ink"
                      }`}
                    >
                      <p className="text-sm font-semibold opacity-80">Направление</p>
                      <p className="mt-2 text-2xl font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[24px] bg-white/90 p-5 shadow-card backdrop-blur">
                  <p className="text-sm font-semibold text-blue-700">От сайта до digital-системы</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">
                    Сначала создаем сайт, затем подключаем SEO, рекламу, аналитику,
                    CRM, автоматизацию и AI-инструменты по мере роста бизнеса.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle
              eyebrow="О компании"
              title="AiStrix Digital — digital-компания для запуска и роста бизнеса"
              text="AiStrix Digital — это digital-компания, которая помогает бизнесу запускать сайты, настраивать продвижение и выстраивать систему получения заявок. Мы начинаем с разработки сайтов, но изначально строим проект как полноценную IT-команду: с чистой архитектурой, аналитикой, безопасностью, масштабированием и поддержкой."
            />
            <div className="premium-card p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">Команда строится вокруг результата</h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                Компания основана предпринимателем, который строит команду специалистов
                в разработке, дизайне, рекламе, SEO и автоматизации. Цель AiStrix Digital —
                делать не просто красивые сайты, а рабочие digital-инструменты для бизнеса.
              </p>
              <Button to="/about" variant="secondary" className="mt-7">
                Подробнее о компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Результат"
            title="Что вы получаете в итоге"
            text="Сайт проектируется как часть digital-системы: заявки, аналитика, SEO, реклама, безопасность, юридическая база и дальнейшее масштабирование."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item.title} className="premium-card premium-card-hover p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Быстрый выбор"
            title="Что нужно бизнесу сейчас?"
            text="Выберите ближайшую задачу: новый сайт, редизайн, интернет-магазин, CRM, SEO, рекламу или понятную точку старта."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {needs.map((need) => (
              <a key={need} href="#quiz" className="premium-card premium-card-hover group p-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon name="Target" />
                </div>
                <p className="mt-5 font-semibold text-ink">{need}</p>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  Ответьте на вопросы квиза и получите предварительную оценку.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Услуги"
            title="Сайты, продвижение и digital-решения"
            text="Сегодня фокус на разработке сайтов. Следующий уровень — SEO, реклама, CRM, автоматизация, аналитика и AI-инструменты."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <QualityRulesSection />

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Аудит"
                title="Почему сайт может не продавать"
                text="Иногда проблема не в рекламе, а в первом экране, мобильной версии, доверии, форме, скорости или отсутствии аналитики."
              />
              <Button to="/audit" className="mt-8">
                Проверить мой сайт <Icon name="ArrowRight" className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point) => (
                <div key={point} className="premium-card p-5">
                  <div className="flex gap-3">
                    <Icon name="Search" className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                    <p className="text-sm leading-7 text-graphite">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="До / После"
            title="Как меняется сайт после системной работы"
            text="Мы обновляем не только визуал. Важно, чтобы сайт объяснял предложение, вызывал доверие, собирал заявки и был готов к рекламе."
          />
          <div className="mt-10">
            <BeforeAfterBlock />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Кейсы"
              title="Избранные проекты"
              text="Демонстрационные кейсы показывают, как можно оформить задачу, сделанную работу и результат."
            />
            <Button to="/cases" variant="secondary">
              Посмотреть кейсы
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cases.slice(0, 3).map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Процесс"
            title="Краткий путь от идеи до запуска"
            text="Каждый этап связан с результатом: структура, дизайн, разработка, мобильная версия, формы, SEO, аналитика, проверка и поддержка."
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section
        id="audit"
        className="section-space"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,255,255,0.82)), url(${brand.ctaBackgroundPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="eyebrow">Бесплатный аудит</span>
              <h2 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                Бесплатно проверим ваш сайт и покажем, что мешает заявкам
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">
                Проверим {auditChecks.slice(0, 6).join(", ")} и дадим короткие рекомендации,
                что можно усилить перед рекламой, SEO или редизайном.
              </p>
            </div>
            <AuditForm showEmail={false} />
          </div>
        </div>
      </section>

      <section id="quiz" className="section-band section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Квиз"
            title={brand.mainCTA}
            text="Ответьте на несколько вопросов: тип проекта, цель, материалы, сроки и контакты. После подключения backend квиз можно отправлять в Telegram, email или CRM."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-5xl">
            <CostQuiz />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Ответы на частые вопросы"
              text="Можно начать без готового ТЗ. Команда поможет разложить задачу, структуру, материалы, аналитику и технические этапы."
            />
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите сайт, который станет частью digital-системы продаж?"
        text="Заполните квиз или отправьте заявку. Команда предложит структуру, сроки, бюджет и следующий шаг."
      />
    </>
  );
}
