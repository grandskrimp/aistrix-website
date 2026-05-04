import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { trackEvent, trackingEvents } from "./analytics/tracking.js";
import { brand } from "../data/brand.js";
import { navItems } from "../data/siteData.js";
import { cn } from "../utils/cn.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    cn(
      "relative rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-200",
      isActive
        ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_8px_22px_rgba(37,99,235,0.32)]"
        : "text-graphite hover:bg-white hover:text-blue-700 hover:shadow-[0_6px_18px_rgba(37,99,235,0.10)]",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      <div className="container-page relative">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.30)]">
              <Icon name="Sparkles" className="h-5 w-5" />
            </div>
            <span className="hidden text-lg font-semibold tracking-tight text-ink sm:inline">
              {brand.brandName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass} end={item.path === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              to="/#quiz"
              size="sm"
              onClick={() => trackEvent(trackingEvents.mainCtaClick, { placement: "header" })}
            >
              {brand.mainCTA}
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-100 bg-white/90 text-ink shadow-[0_8px_22px_rgba(37,99,235,0.14)] transition hover:border-blue-300 hover:text-blue-700 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <Icon name={isOpen ? "X" : "Menu"} />
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-blue-100/70 py-4 lg:hidden">
            <nav className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navClass}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Button
              to="/#quiz"
              className="mt-4 w-full"
              onClick={() => {
                setIsOpen(false);
                trackEvent(trackingEvents.mainCtaClick, { placement: "mobile_header" });
              }}
            >
              {brand.mainCTA}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
