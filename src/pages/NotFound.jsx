import Button from "../components/Button.jsx";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Страница не найдена" description="Такой страницы нет на сайте AiStrix Digital." />
      <section className="section-space">
        <div className="container-page">
          <div className="premium-card mx-auto max-w-2xl p-8 text-center sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">404</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink">Страница не найдена</h1>
            <p className="mt-4 text-graphite">
              Возможно, адрес изменился. Перейдите на главную или оставьте заявку на проект.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/">На главную</Button>
              <Button to="/services" variant="secondary">Посмотреть услуги</Button>
              <Button to="/contact" variant="secondary">Связаться</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
