'use client';

import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: any;
}

export default function MetaTags({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData
}: MetaTagsProps) {
  const siteUrl = 'https://www.lasvegasrelocationservices.com';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Las Vegas Relocation Services" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:site" content="@lasvegasrelo" />
      <meta name="twitter:creator" content="@drjanduffy" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0A2540" />
      <meta name="msapplication-TileColor" content="#0A2540" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Local Business Schema */}
      <meta name="geo.region" content="US-NV" />
      <meta name="geo.placename" content="Henderson" />
      <meta name="geo.position" content="36.0395;-115.0272" />
      <meta name="ICBM" content="36.0395, -115.0272" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="100 North Green Valley Parkway, Suite 330" />
      <meta name="business:contact_data:locality" content="Henderson" />
      <meta name="business:contact_data:region" content="NV" />
      <meta name="business:contact_data:postal_code" content="89074" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+17027077273" />
      <meta name="business:contact_data:email" content="DrJan@LasVegasRelocationServices.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
