import Script from 'next/script'

export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "OWAISE AND ASSOCIATES",
    "image": "https://www.owaiseassociates.com/logo.jpg",
    "@id": "https://www.owaiseassociates.com",
    "url": "https://www.owaiseassociates.com",
    "telephone": "+919952500516",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "190-192, 3rd Floor, Offisbay, Hamid Building, Anna Salai",
      "addressLocality": "Chennai",
      "postalCode": "600006",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.056855090808691,
      "longitude": 80.25517531482233
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/owaiseassociates",
      "https://www.linkedin.com/company/owaise-associates"
    ]
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

