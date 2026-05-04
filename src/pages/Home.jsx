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
  needs,
  painPoints,
  processSteps,
  services,
  stats,
} from "../data/siteData.js";
import { brand } from "../data/brand.js";
import { trackEvent, trackingEvents } from "../components/analytics/tracking.js";

const heroFloatingCards = [
  { title: "Сайт", icon: "Globe", desc: "Адаптив, скорость, формы", color: "from-blue-500/30 to-blue-700/10" },
  { title: "SEO", icon: "Search", desc: "Базовая структура и теги", color: "from-cyan-400/30 to-cyan-700/10" },
  { title: "Реклама", icon: "Target", desc: "Подготовка посадочных", color: "from-violet-500/30 to-violet-700/10" },
  { title: "CRM", icon: "Workflow", desc: "Заявки в нужный канал", color: "from-blue-500/30 to-violet-600/10" },
  { title: "AI", icon: "Sparkles", desc: "Авто-сценарии и ассистенты", color: "from-cyan-400/30 to-violet-500/10" },
];

const heroBadges = [
  "Сайты под ключ",
  "SEO-база",
  "Реклама и аналитика",
  "CRM и заявки",
  "Поддержка после запуска",
];

const systemElements = [
  { title: "Сайт", icon: "Globe", text: "Структура, дизайн, адаптив, скорость." },
  { title: "Формы заявок", icon: "ClipboardList", text: "Короткий путь до заявки, валидация, антиспам." },
  { title: "Telegram / Email / CRM", icon: "Workflow", text: "Заявки приходят туда, где их обрабатывают." },
  { title: "Аналитика", icon: "BarChart3", text: "GA / GTM, события форм, кнопок и квиза." },
  { title: "SEO-база", icon: "Search", text: "Title, description, URL, sitemap, robots.txt." },
  { title: "Реклама", icon: "Target", text: "Посадочные, офферы, события для рекламных целей." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Сайты и digital-системы для бизнеса"
        description="AiStrix Digital создает сайты, лендинги, интернет-магазины, SEO-базу, рекламную подготовку, CRM-интеграции и digital-решения для роста бизнеса."
      />

      {/* ========== HERO (DARK) ========== */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0 bg-dark-radial opacity-90" />
        <div className="absolute inset-0 grid-radial opacity-60" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage: `url(${brand.heroBackgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="container-page relative py-20 sm:py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-dark">
                <Icon name="Sparkles" className="h-4 w-4" />
                Premium digital & IT studio
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]">
                Создаём сайты и{" "}
                <span className="text-gradient">digital-системы</span>,<br className="hidden sm:block" />
                которые приводят заявки
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                AiStrix Digital разрабатывает сайты, лендинги, интернет-магазины,
                подключает аналитику, заявки, рекламу и CRM — чтобы сайт был не просто
                красивым, а работал как инструмент продаж.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  to="/#quiz"
                  size="lg"
                  onClick={() => trackEvent(trackingEvents.mainCtaClick, { placement: "home_hero" })}
                >
                  Рассчитать стоимость проекта <Icon name="ArrowRight" className="h-5 w-5" />
                </Button>
                <Button to="/audit" variant="light" size="lg">
                  Получить бесплатный аудит
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {heroBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur"
                  >
                    <Icon name="CheckCircle2" className="h-3.5 w-3.5 text-cyan-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating cards mock */}
            <div className="relative">
              <div className="luxury-surface p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                      Digital growth system
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">AiStrix Stack</h2>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    Live
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {heroFloatingCards.slice(0, 4).map((c, i) => (
                    <div
                      key={c.title}
                      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-4 backdrop-blur-md transition hover:border-white/20 ${
                        i % 2 === 0 ? "animate-floaty" : "animate-floaty-slow"
                      }`}
                    >
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                        <Icon name={c.icon} className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-base font-semibold text-white">{c.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{c.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15">
                        <Icon name="Sparkles" className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">AI-инструменты</p>
                        <p className="text-xs text-slate-300">Авто-сценарии, ассистенты, обработка заявок</p>
                      </div>
                    </div>
                    <span className="hidden rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-200 sm:inline-flex">
                      next
                    </span>
                  </div>
                </div>

                {/* mini chart */}
                <div className="mt-4 flex items-end gap-1.5">
                  {[42, 60, 48, 78, 64, 92, 84].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-500/40 via-cyan-400/60 to-violet-400/80"
                      style={{ height: `${h * 0.6}px`, opacity: 0.5 + i * 0.06 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Заявки за неделю</span>
                  <span className="font-semibold text-emerald-400">+38%</span>
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-md sm:block">
                <span className="mr-2 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                SaaS-grade architecture
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ========== STATS (LIGHT) ========== */}
      <section className="section-mist section-space">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle
              eyebrow="О компании"
              title="AiStrix Digital — digital-компания для запуска и роста бизнеса"
              text="Мы помогаем бизнесу запускать сайты, настраивать продвижение и выстраивать систему получения заявок. Работаем с архитектурой, аналитикой, безопасностью и масштабированием."
            />
            <div className="premium-card relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200/50 to-violet-200/40 blur-3xl" />
              <h3 className="text-2xl font-semibold text-ink">Команда строится вокруг результата</h3>
              <p className="mt-5 text-base leading-8 text-body">
                Компания основана предпринимателем, который собирает команду
                специалистов в разработке, дизайне, рекламе, SEO и автоматизации.
                Цель AiStrix Digital — делать не просто красивые сайты, а рабочие
                digital-инструменты для бизнеса.
              </p>
              <Button to="/about" variant="secondary" className="mt-8">
                Подробнее о компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SYSTEM BLOCK (ALT) ========== */}
      <section className="section-alt section-space relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/40 blur-[120px]" />
        <div className="container-page relative">
          <SectionTitle
            eyebrow="Digital-система"
            title="Сайт — это не страница, а система получения заявок"
            text="Мы соединяем сайт, формы, аналитику, рекламу, SEO и CRM, чтобы клиент не просто видел красивый дизайн, а получал понятный путь от посетителя до заявки."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {systemElements.map((el, i) => (
              <article
                key={el.title}
                className="premium-card premium-card-hover group relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-gradient opacity-80" />
                <div className="flex items-center gap-4">
                  <div className="icon-tile">
                    <Icon name={el.icon} className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-semibold text-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{el.title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{el.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DELIVERABLES (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Результат"
            title="Что вы получаете в итоге"
            text="Сайт проектируется как часть digital-системы: заявки, аналитика, SEO, реклама, безопасность, юридическая база и дальнейшее масштабирование."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item.title} className="premium-card premium-card-hover p-6">
                <div className="icon-tile-soft">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-body">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEEDS (MIST) ========== */}
      <section className="section-mist section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Быстрый выбор"
            title="Что нужно бизнесу сейчас?"
            text="Выберите ближайшую задачу: новый сайт, редизайн, интернет-магазин, CRM, SEO, рекламу или понятную точку старта."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {needs.map((need) => (
              <a key={need} href="#quiz" className="premium-card premium-card-hover group p-5">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white group-hover:ring-transparent">
                  <Icon name="Target" />
                </div>
                <p className="mt-5 font-semibold text-ink">{need}</p>
                <p className="mt-3 text-sm leading-6 text-body">
                  Ответьте на вопросы квиза и получите предварительную оценку.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Услуги"
            title="Сайты, продвижение и digital-решения"
            text="Сегодня фокус на разработке сайтов. Следующий уровень — SEO, реклама, CRM, автоматизация, аналитика и AI-инструменты."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== PAIN POINTS (MIST) ========== */}
      <section className="section-mist section-space">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Аудит"
                title="Почему сайт может не приносить заявки"
                text="Иногда проблема не в рекламе, а в первом экране, мобильной версии, доверии, форме, скорости или отсутствии аналитики."
              />
              <Button to="/audit" className="mt-8">
                Проверить мой сайт бесплатно <Icon name="ArrowRight" className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point, i) => (
                <div key={point} className="premium-card premium-card-hover p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 text-rose-500 ring-1 ring-rose-100">
                      <Icon name="AlertCircle" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Проблема 0{i + 1}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-ink">{point}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BEFORE / AFTER (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="До / После"
            title="Как меняется сайт после системной работы"
            text="Мы обновляем не только визуал. Важно, чтобы сайт объяснял предложение, вызывал доверие, собирал заявки и был готов к рекламе."
          />
          <div className="mt-12">
            <BeforeAfterBlock />
          </div>
        </div>
      </section>

      {/* ========== CASES (ALT) ========== */}
      <section className="section-alt section-space">
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
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cases.slice(0, 3).map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUALITY RULES (MIST) ========== */}
      <QualityRulesSection />

      {/* ========== PROCESS (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Процесс"
            title="Краткий путь от идеи до запуска"
            text="Каждый этап связан с результатом: структура, дизайн, разработка, мобильная версия, формы, SEO, аналитика, проверка и поддержка."
          />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* ========== AUDIT (DARK) ========== */}
      <section
        id="audit"
        className="relative isolate overflow-hidden bg-navy section-space"
      >
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute inset-0 bg-dark-radial opacity-70" />
        <div
          className="absolute inset-0 opacity-15 mix-blend-screen"
          style={{
            backgroundImage: `url(${brand.ctaBackgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-page relative">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="eyebrow-dark">Бесплатный аудит</span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Бесплатно проверим ваш сайт и покажем, что мешает заявкам
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Проверим {auditChecks.slice(0, 6).join(", ")} и дадим короткие
                рекомендации, что можно усилить перед рекламой, SEO или редизайном.
              </p>
            </div>
            <AuditForm showEmail={false} />
          </div>
        </div>
      </section>

      {/* ========== QUIZ (MIST) ========== */}
      <section id="quiz" className="section-mist section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Квиз"
            title={brand.mainCTA}
            text="Ответьте на несколько вопросов: тип проекта, цель, материалы, сроки и контакты. После подключения backend квиз можно отправлять в Telegram, email или CRM."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-5xl">
            <CostQuiz />
          </div>
        </div>
      </section>

      {/* ========== FAQ (WHITE) ========== */}
      <section className="section-white section-space">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Ответы на частые вопросы"
              text="Можно начать без готового ТЗ. Команда поможет разложить задачу, структуру, материалы, аналитику и технические этапы."
            />
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA (DARK inside CTASection) ========== */}
      <CTASection
        title="Хотите сайт, который станет частью digital-системы продаж?"
        text="Заполните квиз или отправьте заявку. Команда предложит структуру, сроки, бюджет и следующий шаг."
      />
    </>
  );
}
