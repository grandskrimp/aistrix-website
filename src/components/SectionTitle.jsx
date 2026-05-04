import { cn } from "../utils/cn.js";

export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 text-3xl font-semibold tracking-normal text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">{text}</p>
      )}
    </div>
  );
}
