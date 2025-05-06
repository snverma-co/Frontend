import { Helmet } from 'react-helmet';

export const PageTitle = ({ title, description }) => {
  const baseTitle = 'S N Verma & Co. | Best Chartered Accountant in Delhi | CPA India';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const metaDescription = description || 'Leading Chartered Accountant firm in Delhi NCR offering comprehensive accounting, taxation, audit & advisory services. Expert CA services for businesses and individuals.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="chartered accountant delhi, CA firm india, tax consultant delhi, audit services, business advisory, GST registration, income tax filing, company registration, accounting services" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "S N Verma & Co.",
          "description": metaDescription,
          "priceRange": "₹₹",
          "areaServed": "Delhi NCR",
          "serviceType": ["Chartered Accountancy", "Tax Consultation", "Audit Services", "Business Advisory"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressRegion": "Delhi",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};