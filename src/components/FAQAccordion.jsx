import { useState } from "react";
import Icon from "./Icon.jsx";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="premium-card overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <Icon
                name="ChevronDown"
                className={`h-5 w-5 shrink-0 text-blue-600 transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-line px-5 py-4">
                <p className="text-sm leading-7 text-graphite">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
