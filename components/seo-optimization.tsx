import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export function SEOOptimization({
  title = "KelarBro - Joki Tugas Kuliah #1 di Bengkulu | Essay, Skripsi, Programming",
  description = "Jasa tugas kuliah terpercaya di Bengkulu dengan garansi revisi dan tepat waktu. Melayani UNIB, Dehasen, UMB, dan universitas lainnya.",
  canonicalUrl = "https://kelarbro.com",
  ogImage = "/images/kelarbro-og-image.jpg",
}: SEOProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/images/kelarbro-logo.webp" />
      <link rel="apple-touch-icon" href="/images/kelarbro-logo.webp" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "KelarBro",
            image: "/images/kelarbro-logo.webp",
            description: description,
            url: canonicalUrl,
            telephone: "+6289504407244",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bengkulu",
              addressRegion: "Bengkulu",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -3.7928,
              longitude: 102.2608,
            },
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
          }),
        }}
      />
    </Head>
  )
}
