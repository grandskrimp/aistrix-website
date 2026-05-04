import Button from "./Button.jsx";
import Icon from "./Icon.jsx";

export default function BlogCard({ post }) {
  return (
    <article className="premium-card premium-card-hover flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{post.category}</span>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-graphite">{post.readTime}</span>
        <span className="text-slate-400">{post.date}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-ink">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-graphite">{post.description}</p>
      <Button to={`/blog/${post.slug}`} variant="ghost" className="mt-5 justify-start px-0">
        Читать <Icon name="ArrowRight" className="h-4 w-4" />
      </Button>
    </article>
  );
}
