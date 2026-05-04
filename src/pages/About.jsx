import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import ImageWithFallback from "../components/ImageWithFallback.jsx";
import PageHero from "../components/PageHero.jsx";
import QualityRulesSection from "../components/QualityRulesSection.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TeamCard from "../components/TeamCard.jsx";
import { brand } from "../data/brand.js";
import { team } from "../data/siteData.js";

const missionCards = [
  {
    title: "Сайт как инфраструктура",
    text: "Сайт должен быть готов к заявкам, рекламе, SEO, аналитике, CRM и будущему масштабированию.",
    icon: "LayoutDashboard",
  },
  {
    title: "Рост через digital-систему",
    text: "Мы связываем структуру страниц, формы, события аналитики и каналы заявок в единый процесс.",
    icon: "BarChart3",
  },
  {
    title: "Команда под задачу",
    text: "Подключаем разработку, дизайн, SEO, рекламу, автоматизацию и запуск по мере необходимости.",
    icon: "Workflow",
  },
  {
    title: "Поддержка после запуска",
    text: "Сайт можно развивать: новые страницы, посадочные, интеграции, блог, кейсы и улучшения.",
    icon: "Wrench",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="О компании"
        description="AiStrix Digital — digital-команда для запуска и роста бизнеса: сайты, заявки, аналитика, реклама, SEO, интеграции и поддержка."
      />

      <PageHero
        eyebrow="О компании"
        title="AiStrix Digital — digital-команда для запуска и роста бизнеса"
        text="Мы не просто создаем красивые сайты. Мы строим цифровую инфраструктуру: сайт, заявки, аналитика, реклама, SEO, интеграции и поддержка."
        secondaryText="Посмотреть услуги"
        secondaryTo="/services"
      >
        <div
          className="premium-card min-h-[360px] p-7"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.68)), url(${brand.sectionBackgroundPath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={brand.logoPath} alt={`${brand.brandName} logo`} className="h-auto w-[230px]" />
          <p className="mt-8 text-lg font-semibold leading-8 text-ink">
            От сайта до полноценной digital-системы продаж.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Разработка", "SEO", "Реклама", "Автоматизация"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/90 p-4 text-sm font-semibold text-ink shadow-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Кто мы"
                title="Создаем сайты, которые можно развивать дальше"
                text="AiStrix Digital начинает с сильной веб-разработки: лендинги, корпоративные сайты, интернет-магазины, редизайн и поддержка. Но каждый проект сразу проектируется как часть будущей digital / IT-системы: с аналитикой, SEO-базой, безопасностью, интеграциями и масштабированием."
              />
            </div>
            <div className="premium-card p-7 sm:p-8">
              <h2 className="text-2xl font-semibold text-ink">Зачем мы создаем компанию</h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                Наша цель — объединить разработку, дизайн, продвижение, аналитику,
                автоматизацию и AI-инструменты в понятный сервис для бизнеса.
                Клиент получает не разрозненные услуги, а управляемую систему роста.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <SectionTitle
            eyebrow="Миссия"
            title="Делать digital-инструменты, которые помогают бизнесу расти"
            text="Мы строим процессы так, чтобы сайт был полезен не только в день запуска, но и через месяцы развития."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missionCards.map((item) => (
              <article key={item.title} className="premium-card premium-card-hover p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionTitle
              eyebrow="Команда"
              title="Под каждую задачу подключаются нужные специалисты"
              text="Мы строим команду из специалистов по разработке, дизайну, рекламе, SEO и автоматизации. Под каждую задачу подключаются нужные люди, чтобы клиент получил не просто страницу, а работающий digital-инструмент."
            />
            <div className="premium-card p-5">
              <ImageWithFallback
                src="/images/team-office.jpg"
                alt="Команда AiStrix Digital"
                aspect="aspect-[16/9]"
                label="Команда AiStrix Digital"
                icon="UserRound"
                className="rounded-[24px]"
              />
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <QualityRulesSection />

      <CTASection
        title="Нужна digital-команда для сайта и роста заявок?"
        text="Заполните квиз или отправьте задачу. Мы предложим понятный план запуска и развития."
      />
    </>
  );
}
