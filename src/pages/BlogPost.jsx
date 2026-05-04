import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import Icon from "../components/Icon.jsx";
import SEO from "../components/SEO.jsx";
import { blogPosts } from "../data/siteData.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <section className="section-space">
        <div className="container-page">
          <div className="premium-card p-8 text-center">
            <h1 className="text-3xl font-semibold text-ink">Статья не найдена</h1>
            <p className="mt-3 text-graphite">Вернитесь в блог и выберите другой материал.</p>
            <Link className="mt-6 inline-flex font-semibold text-blue-700" to="/blog">
              Вернуться в блог
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO title={post.title} description={post.description} />

      <article className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]">
        <div className="container-page py-14 sm:py-16 lg:py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
            <Icon name="ArrowRight" className="h-4 w-4 rotate-180" /> Назад в блог
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
              <span className="rounded-full bg-blue-50 px-4 py-2 text-blue-700">{post.category}</span>
              <span className="rounded-full bg-slate-50 px-4 py-2 text-graphite">{post.readTime}</span>
              <span className="text-slate-400">{post.date}</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-graphite">{post.description}</p>
          </div>
        </div>
      </article>

      <section className="section-space">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="premium-card p-7 sm:p-9">
              <div className="space-y-6 text-lg leading-9 text-graphite">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-9 rounded-[24px] bg-blue-50 p-6">
                <p className="text-lg font-semibold text-ink">Короткий вывод</p>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  Сайт лучше начинать с задачи бизнеса, структуры и понятного
                  результата. Если нет ТЗ, команда поможет собрать вводные и
                  предложить реалистичный план.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="premium-card p-6">
                <h2 className="font-semibold text-ink">Рассчитать проект</h2>
                <p className="mt-3 text-sm leading-7 text-graphite">
                  Можно начать с вопроса, аудита старого сайта или короткого описания задачи.
                </p>
                <Link className="mt-5 inline-flex font-semibold text-blue-700" to="/contact">
                  Написать Евгению
                </Link>
              </div>
              <div className="premium-card p-6">
                <h2 className="font-semibold text-ink">Еще по теме</h2>
                <div className="mt-4 space-y-3">
                  {relatedPosts.map((item) => (
                    <Link key={item.slug} to={`/blog/${item.slug}`} className="block rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-ink transition hover:bg-blue-50 hover:text-blue-700">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Хотите применить это к своему сайту?"
        text="Отправьте задачу или ссылку на сайт. Команда подскажет, что можно улучшить в первую очередь."
      />
    </>
  );
}
