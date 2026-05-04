import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { blogPosts } from "../data/siteData.js";
import { cn } from "../utils/cn.js";

export default function Blog() {
  const categories = ["Все", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Все") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Блог"
        description="Блог AiStrix Digital о разработке сайтов, стоимости, SEO, рекламе, CRM, аналитике, автоматизации и редизайне."
      />

      <PageHero
        eyebrow="Блог о сайтах и digital"
        title="Практичные статьи для тех, кто планирует сайт"
        text="Разбираем стоимость, форматы сайтов, причины отсутствия заявок, подготовку материалов, CRM, аналитику и редизайн старых проектов."
        secondaryText="Бесплатный аудит"
        secondaryTo="/audit"
      >
        <div className="premium-card p-7">
          <Icon name="FileText" className="h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-semibold text-ink">SEO и экспертность</h2>
          <p className="mt-4 text-sm leading-7 text-graphite">
            Блог помогает привлекать органический трафик и объяснять клиентам,
            как AiStrix Digital подходит к сайтам, продвижению, аналитике и заявкам.
          </p>
        </div>
      </PageHero>

      <section className="section-space">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Статьи"
              title="Темы для клиентов перед заказом сайта"
              text="Карточки статей ведут на отдельный маршрут /blog/:slug с шаблоном страницы."
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    activeCategory === category
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-line bg-white text-graphite hover:border-blue-200 hover:text-blue-700",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Не нашли ответ по своей ситуации?"
        text="Опишите задачу Евгению: он подскажет, какой сайт нужен, что подготовить и как запуститься без лишней сложности."
      />
    </>
  );
}
