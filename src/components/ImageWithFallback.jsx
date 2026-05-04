import { useState } from "react";
import Icon from "./Icon.jsx";
import { cn } from "../utils/cn.js";

export default function ImageWithFallback({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  label = "AiStrix Digital",
  icon = "Sparkles",
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/70 bg-soft-gradient",
        aspect,
        className,
      )}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/80 text-blue-600 shadow-card">
            <Icon name={icon} className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{label}</p>
            <p className="mt-1 text-xs text-graphite">Изображение можно заменить в /public/images</p>
          </div>
        </div>
      )}
    </div>
  );
}
