export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export const trackingEvents = {
  mainCtaClick: "main_cta_click",
  phoneClick: "phone_click",
  telegramClick: "telegram_click",
  whatsappClick: "whatsapp_click",
  contactFormSubmit: "contact_form_submit",
  auditFormSubmit: "audit_form_submit",
  quizSubmit: "quiz_submit",
};
