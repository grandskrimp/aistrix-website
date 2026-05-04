import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import FormMessage from "./FormMessage.jsx";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";

const initialState = {
  website: "",
  name: "",
  contact: "",
  email: "",
  comment: "",
  consent: false,
  company: "",
};

export default function AuditForm({ showEmail = true }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    const nextValue = event.target.type === "checkbox" ? event.target.checked : value;
    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.website.trim()) nextErrors.website = "Укажите ссылку на сайт";
    if (!values.name.trim()) nextErrors.name = "Укажите имя";
    if (!values.contact.trim()) nextErrors.contact = "Укажите Telegram или телефон";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Проверьте email";
    }
    if (!values.consent) nextErrors.consent = "Нужно согласие на обработку данных";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (values.company.trim()) return;

    if (Object.keys(nextErrors).length === 0) {
      trackEvent(trackingEvents.auditFormSubmit, { hasEmail: Boolean(values.email) });
      setSubmitted(true);
      setValues(initialState);
    }
  };

  if (submitted) {
    return <FormMessage />;
  }

  return (
    <form className="premium-card p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Ссылка на сайт"
          name="website"
          value={values.website}
          onChange={update}
          error={errors.website}
          placeholder="https://example.com"
          className="sm:col-span-2"
        />
        <Field
          label="Имя"
          name="name"
          value={values.name}
          onChange={update}
          error={errors.name}
          placeholder="Ваше имя"
        />
        <Field
          label="Telegram / телефон"
          name="contact"
          value={values.contact}
          onChange={update}
          error={errors.contact}
          placeholder="@username или телефон"
        />
        {showEmail && (
          <Field
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={update}
            error={errors.email}
            placeholder="mail@example.com"
            className="sm:col-span-2"
          />
        )}
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-ink">Комментарий</span>
          <textarea
            name="comment"
            value={values.comment}
            onChange={update}
            className="input-shell min-h-28 resize-y"
            placeholder="Что сейчас беспокоит в сайте или заявках?"
          />
        </label>
      </div>
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={update}
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <label className="flex gap-3 text-sm leading-6 text-graphite">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={update}
            className="mt-1 h-4 w-4 rounded border-line text-blue-600 focus:ring-blue-100"
          />
          <span>
            Я согласен с{" "}
            <Link to="/privacy" className="font-semibold text-blue-700">
              политикой конфиденциальности
            </Link>{" "}
            и обработкой персональных данных.
          </span>
        </label>
        {errors.consent && (
          <span className="mt-2 block text-xs font-semibold text-red-500">{errors.consent}</span>
        )}
        <p className="mt-3 text-xs leading-5 text-slate-500">
          Место под captcha, serverless и защиту частоты отправки.
        </p>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Получить бесплатный аудит <Icon name="Send" className="h-5 w-5" />
      </Button>
    </form>
  );
}

function Field({ label, error, className, ...props }) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <input className="input-shell" {...props} />
      {error && <span className="mt-2 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}
