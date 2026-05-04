import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import FormMessage from "./FormMessage.jsx";
import { brand } from "../data/brand.js";
import { cn } from "../utils/cn.js";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";

const steps = [
  {
    key: "siteType",
    title: "Какой сайт нужен?",
    options: ["Лендинг", "Корпоративный сайт", "Интернет-магазин", "Редизайн", "SEO / реклама", "Автоматизация", "Пока не знаю"],
  },
  {
    key: "goal",
    title: "Какая цель сайта?",
    options: ["Получать заявки", "Продавать товары", "Презентовать компанию", "Обновить старый сайт", "Запустить рекламу", "Подготовить SEO"],
  },
  {
    key: "materials",
    title: "Есть ли материалы?",
    options: ["Есть тексты и фото", "Есть частично", "Нужно подготовить с нуля"],
  },
  {
    key: "deadline",
    title: "Когда нужен запуск?",
    options: ["Срочно", "2-4 недели", "1-2 месяца", "Пока изучаю варианты"],
  },
];

const initialState = {
  siteType: "",
  goal: "",
  materials: "",
  deadline: "",
  name: "",
  contact: "",
  comment: "",
  consent: false,
  website: "",
};

export default function CostQuiz() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isContactStep = activeStep === steps.length;
  const progress = ((activeStep + 1) / (steps.length + 1)) * 100;

  const setOption = (key, option) => {
    setValues((current) => ({ ...current, [key]: option }));
    setError("");
  };

  const goNext = () => {
    if (!isContactStep && !values[steps[activeStep].key]) {
      setError("Выберите один вариант, чтобы продолжить");
      return;
    }
    setError("");
    setActiveStep((current) => Math.min(current + 1, steps.length));
  };

  const goBack = () => {
    setError("");
    setActiveStep((current) => Math.max(current - 1, 0));
  };

  const submit = (event) => {
    event.preventDefault();
    if (values.website.trim()) return;
    if (!values.name.trim() || !values.contact.trim()) {
      setError("Укажите имя и телефон / Telegram");
      return;
    }
    if (!values.consent) {
      setError("Нужно согласие на обработку данных");
      return;
    }
    trackEvent(trackingEvents.quizSubmit, {
      siteType: values.siteType || "not_selected",
      goal: values.goal || "not_selected",
    });
    setSubmitted(true);
  };

  if (submitted) {
    return <FormMessage />;
  }

  return (
    <form className="premium-card overflow-hidden" onSubmit={submit} noValidate>
      <div className="border-b border-line p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-700">
              Шаг {activeStep + 1} из {steps.length + 1}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">
              {isContactStep ? "Куда отправить оценку?" : steps[activeStep].title}
            </h3>
          </div>
          <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-graphite">
            {brand.mainCTA}
          </span>
        </div>
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-brand-gradient transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {!isContactStep ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps[activeStep].options.map((option) => (
              <button
                key={option}
                type="button"
                className={cn(
                  "rounded-2xl border p-4 text-left text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-card",
                  values[steps[activeStep].key] === option
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-line bg-white text-ink",
                )}
                onClick={() => setOption(steps[activeStep].key, option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-semibold text-ink">Имя</span>
              <input
                className="input-shell"
                value={values.name}
                onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
                placeholder="Ваше имя"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm font-semibold text-ink">Телефон / Telegram</span>
              <input
                className="input-shell"
                value={values.contact}
                onChange={(event) => setValues((current) => ({ ...current, contact: event.target.value }))}
                placeholder="+375... или @username"
              />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-ink">Комментарий</span>
              <textarea
                className="input-shell min-h-28 resize-y"
                value={values.comment}
                onChange={(event) => setValues((current) => ({ ...current, comment: event.target.value }))}
                placeholder="Дополнительные детали по проекту"
              />
            </label>
            <input
              type="text"
              name="website"
              value={values.website}
              onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
              <label className="flex gap-3 text-sm leading-6 text-graphite">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) => setValues((current) => ({ ...current, consent: event.target.checked }))}
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
              <p className="mt-3 text-xs leading-5 text-slate-500">
                После подключения backend квиз можно отправлять в Telegram, email или CRM.
              </p>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-sm font-semibold text-red-500">{error}</p>}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button
            type="button"
            variant="secondary"
            onClick={goBack}
            disabled={activeStep === 0}
            className={activeStep === 0 ? "pointer-events-none opacity-50" : ""}
          >
            Назад
          </Button>
          {isContactStep ? (
            <Button type="submit">
              {brand.mainCTA} <Icon name="Send" className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="button" onClick={goNext}>
              Далее <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
