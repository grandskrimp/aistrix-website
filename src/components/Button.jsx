import { Link } from "react-router-dom";
import { cn } from "../utils/cn.js";

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-[0_18px_42px_rgba(37,99,235,0.28)] ring-1 ring-white/20 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(37,99,235,0.30)]",
  secondary:
    "border border-blue-100 bg-white/90 text-ink shadow-card backdrop-blur hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-[0_20px_60px_rgba(37,99,235,0.14)]",
  ghost:
    "bg-transparent text-blue-700 hover:bg-blue-50",
  dark: "bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-slate-800",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classNames = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100",
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classNames} {...props}>
      {children}
    </button>
  );
}
