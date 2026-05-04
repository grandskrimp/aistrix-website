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
      "rounded-xl px-3 py-2 text-sm font-semibold transition",
      isActive ? "bg-blue-50 text-blue-700" : "text-graphite hover:bg-slate-50 hover:text-ink",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/70 bg-white/80 shadow-[0_10px_35px_rgba(16,34,71,0.06)] backdrop-blur-2xl">
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src={brand.logoPath}
              alt={`${brand.brandName} logo`}
              className="h-auto w-[156px] object-contain drop-shadow-sm sm:w-[188px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass}>
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
            className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white text-ink xl:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <Icon name={isOpen ? "X" : "Menu"} />
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-line py-4 xl:hidden">
            <nav className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navClass}
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
