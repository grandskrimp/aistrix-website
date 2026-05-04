import { Link } from "react-router-dom";
import { cn } from "../utils/cn.js";

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-[0_18px_42px_rgba(37,99,235,0.32)] ring-1 ring-white/20 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(37,99,235,0.45)]",
  secondary:
    "border border-line bg-white text-ink shadow-card hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]",
  ghost:
    "bg-transparent text-blue-700 hover:bg-blue-50",
  dark: "bg-navy text-white shadow-card hover:-translate-y-0.5 hover:bg-deep",
  light:
    "border border-white/20 bg-white/[0.06] text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.12]",
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
