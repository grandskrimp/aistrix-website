import ContactForm from "../components/ContactForm.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { trackEvent, trackingEvents } from "../components/analytics/tracking.js";
import { contacts, faqItems } from "../data/siteData.js";

const requestTips = [
  "какой сайт или digital-задача нужна",
  "есть ли старый сайт",
  "какие цели и источники заявок",
  "примерный срок",
  "есть ли тексты и фото",
  "желаемый бюджет",
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Контакты"
        description="Связаться с AiStrix Digital: разработка сайтов, лендинги, корпоративные сайты, интернет-магазины, SEO, реклама, CRM, автоматизация и поддержка."
      />

      <PageHero
        eyebrow="Контакты"
        title="Обсудим ваш проект"
        text="Напишите, какой сайт или digital-система нужна, какие цели у бизнеса и когда хотите запуститься. Команда предложит структуру, сроки и примерную стоимость."
        primaryText="Заполнить форму"
        primaryTo="/contact#contact-form"
        secondaryText="Бесплатный аудит"
        secondaryTo="/audit"
      >
        <div className="premium-card p-7">
          <h2 className="text-2xl font-semibold text-ink">Контакты</h2>
          <div className="mt-6 space-y-4">
            <a
              className="flex items-center gap-3 text-sm font-semibold text-graphite transition hover:text-blue-700"
              href={contacts.telegramHref}
              onClick={() => trackEvent(trackingEvents.telegramClick, { placement: "contact_page" })}
            >
              <Icon name="MessageCircle" className="h-5 w-5 text-blue-600" /> Telegram: {contacts.telegram}
            </a>
            <a className="flex items-center gap-3 text-sm font-semibold text-graphite transition hover:text-blue-700" href={contacts.emailHref}>
              <Icon name="Mail" className="h-5 w-5 text-blue-600" /> Email: {contacts.email}
            </a>
            <a
              className="flex items-center gap-3 text-sm font-semibold text-graphite transition hover:text-blue-700"
              href={contacts.phoneHref}
              onClick={() => trackEvent(trackingEvents.phoneClick, { placement: "contact_page" })}
            >
              <Icon name="Phone" className="h-5 w-5 text-blue-600" /> Телефон: {contacts.phone}
            </a>
            <a
              className="flex items-center gap-3 text-sm font-semibold text-graphite transition hover:text-blue-700"
              href={contacts.whatsappHref}
              onClick={() => trackEvent(trackingEvents.whatsappClick, { placement: "contact_page" })}
            >
              <Icon name="MessageCircle" className="h-5 w-5 text-blue-600" /> WhatsApp
            </a>
          </div>
          <p className="mt-6 rounded-2xl bg-blue-50 p-4 text-sm leading-7 text-blue-800">
            Контакты вынесены в data-файл, чтобы быстро заменить Telegram, email и телефон.
          </p>
        </div>
      </PageHero>

      <section id="contact-form" className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Заявка"
                title="Форма для проекта"
                text="Форма пока работает без backend: есть UI-валидация, согласие, honeypot и событие аналитики. После подключения backend заявку можно отправлять в Telegram, email или CRM."
              />
              <div className="mt-8 premium-card p-6">
                <h3 className="text-xl font-semibold text-ink">Что написать в заявке</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {requestTips.map((tip) => (
                    <div key={tip} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-ink">
                      <Icon name="CheckCircle2" className="h-5 w-5 text-blue-600" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              eyebrow="FAQ"
              title="Перед обращением"
              text="Можно написать даже без готового технического задания. Главное - коротко описать задачу, текущую ситуацию и желаемый результат."
            />
            <FAQAccordion items={faqItems.slice(0, 5)} />
          </div>
        </div>
      </section>
    </>
  );
}
