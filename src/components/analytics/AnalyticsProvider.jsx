import { useEffect } from "react";
import { brand } from "../../data/brand.js";

export default function AnalyticsProvider({ children }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "analytics_placeholder_ready",
      gtmId: brand.analytics.gtmId,
      gaId: brand.analytics.gaId,
    });
  }, []);

  return children;
}
