import { Helmet } from "react-helmet-async";
import { brand } from "../data/brand.js";

export default function SEO({ title, description }) {
  const pageTitle = title
    ? `${title} | ${brand.brandName}`
    : brand.brandName;

  return (
    <Helmet>
      <html lang="ru" />
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" type="image/png" href={brand.faviconPath} />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.brandName} />
      <meta property="og:image" content={brand.logoPath} />
    </Helmet>
  );
}
