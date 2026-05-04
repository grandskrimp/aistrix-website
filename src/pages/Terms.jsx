import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { brand } from "../data/brand.js";

const sections = [
  {
    title: "Назначение сайта",
    text: "Сайт представляет услуги AiStrix Digital: разработку сайтов, продвижение, аналитику, интеграции, автоматизацию и поддержку.",
  },
  {
    title: "Информация на сайте",
    text: "Цены, сроки, кейсы и тексты на сайте являются ориентировочными. Точный объем, стоимость и сроки фиксируются после разбора задачи.",
  },
  {
    title: "Формы и заявки",
    text: "Отправка формы означает, что пользователь передает данные для связи и предварительной оценки. После подключения backend заявки могут отправляться в Telegram, email или CRM.",
  },
  {
    title: "Ответственность",
    text: "Сайт подготовлен как коммерческая презентация и не является публичной офертой. Реальные условия сотрудничества фиксируются отдельно.",
  },
  {
    title: "Доработка документа",
    text: "Этот текст является placeholder-версией. Перед публикацией проекта его нужно адаптировать под юрисдикцию, реквизиты и реальные процессы компании.",
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Условия использования"
        description="Базовые условия использования сайта AiStrix Digital. Placeholder-текст для дальнейшей юридической доработки."
      />
      <section className="section-space">
        <div className="container-page">
          <SectionTitle
            eyebrow="Юридическая информация"
            title="Условия использования"
            text={`Базовые правила использования сайта ${brand.brandName}. Документ нужно доработать с юристом перед реальным запуском.`}
          />
          <div className="mt-10 grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="premium-card p-6">
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-graphite">{section.text}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex font-semibold text-blue-700">
            Связаться с нами
          </Link>
        </div>
      </section>
    </>
  );
}
