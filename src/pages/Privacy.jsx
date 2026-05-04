import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { brand } from "../data/brand.js";
import { contacts } from "../data/siteData.js";

const sections = [
  {
    title: "Какие данные могут собираться",
    text: "Формы сайта могут запрашивать имя, телефон, Telegram, email, ссылку на сайт, тип проекта, бюджет и комментарий. Эти данные нужны только для ответа на заявку, консультации, аудита или предварительной оценки проекта.",
  },
  {
    title: "Как используются данные",
    text: "Данные используются для связи с пользователем, подготовки предложения, расчета стоимости, проведения аудита сайта и улучшения качества сервиса.",
  },
  {
    title: "Передача данных",
    text: "После подключения backend данные могут передаваться в Telegram, email, CRM или аналитику. Секретные ключи и токены не должны храниться во frontend.",
  },
  {
    title: "Аналитика",
    text: "На сайте предусмотрены placeholders для Google Analytics и Google Tag Manager. Реальные ID подключаются отдельно через env/config.",
  },
  {
    title: "Удаление данных",
    text: "Пользователь может запросить уточнение или удаление своих данных, написав на контактный email.",
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Политика конфиденциальности"
        description="Базовая политика конфиденциальности AiStrix Digital для форм заявок, аудита, квиза и контактных данных."
      />
      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Юридическая информация"
            title="Политика конфиденциальности"
            text="Это базовый placeholder-документ для сайта. Перед публикацией реального бизнеса текст нужно проверить и доработать с юристом."
          />
          <div className="mt-10 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="premium-card p-6">
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-graphite">{section.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] bg-blue-50 p-6 text-sm leading-7 text-blue-900">
            Контакт для вопросов по данным:{" "}
            <a className="font-semibold text-blue-700" href={contacts.emailHref}>
              {contacts.email}
            </a>
            . Оператор сайта: {brand.brandName}.
          </div>
          <Link to="/contact" className="mt-8 inline-flex font-semibold text-blue-700">
            Вернуться к контактам
          </Link>
        </div>
      </section>
    </>
  );
}
