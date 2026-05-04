import { useMemo, useState } from "react";
import CTASection from "../components/CTASection.jsx";
import CaseCard from "../components/CaseCard.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { cases } from "../data/siteData.js";
import { cn } from "../utils/cn.js";

export default function Cases() {
  const filters = ["Все", ...Array.from(new Set(cases.map((item) => item.type)))];
  const [activeFilter, setActiveFilter] = useState("Все");

  const filteredCases = useMemo(() => {
    if (activeFilter === "Все") return cases;
    return cases.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Кейсы"
        description="Демонстрационные кейсы AiStrix Digital: лендинги, корпоративные сайты, интернет-магазины, редизайн, реклама, SEO и автоматизация заявок."
      />

      <PageHero
        eyebrow="Кейсы"
        title="Проекты, где сайт решает конкретную задачу"
        text="Кейсы показывают подход: сначала задача бизнеса, затем структура, дизайн, разработка, формы, аналитика и понятный результат."
        secondaryText="Рассчитать стоимость"
        secondaryTo="/contact"
      >
        <div className="premium-card p-7">
          <Icon name="BriefcaseBusiness" className="h-12 w-12 text-blue-600" />
          <p className="mt-6 text-4xl font-semibold text-ink">30+</p>
          <p className="mt-2 text-sm leading-7 text-graphite">
            направлений развития: сайты, SEO, реклама, CRM, автоматизация и поддержка
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["лендинги", "B2B-сайты", "магазины", "интеграции"].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Фильтры"
              title="Выберите тип проекта"
              text="Фильтры работают на UI-уровне и помогают быстро посмотреть релевантные примеры."
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    activeFilter === filter
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-line bg-white text-graphite hover:border-blue-200 hover:text-blue-700",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCases.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-page">
          <div className="premium-card p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <SectionTitle
                eyebrow="Подход"
                title="В кейсе важен не только визуал, но и результат"
                text="Команда смотрит на проект как на путь клиента: что человек видит первым, почему доверяет, как оставляет заявку и как заявка попадает в работу."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {["задача бизнеса", "структура страниц", "доверие и кейсы", "формы заявок", "мобильная версия", "аналитика"].map((item) => (
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
        title="Хотите похожий результат для своего бизнеса?"
        text="Опишите задачу, нишу и текущую ситуацию. Команда предложит структуру и план запуска."
      />
    </>
  );
}
