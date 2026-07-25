'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID?: string;
}

const isValidGaId = (id?: string) =>
  Boolean(id && /^G-[A-Z0-9]+$/i.test(id) && !id.includes('XXXX'));

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  // Skip placeholder / missing IDs — live HTML was preloading gtag for G-XXXXXXXXXX
  if (!isValidGaId(GA_MEASUREMENT_ID)) {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'cd1': 'user_type',
                'cd2': 'page_category',
                'cd3': 'user_engagement_level',
                'cd4': 'conversion_value'
              }
            });
          `,
        }}
      />
    </>
  );
}

// Enhanced tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

export const trackConversion = (value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/AW-${process.env.NEXT_PUBLIC_GA_ADS_ID}`,
      value: value,
      currency: currency,
    });
  }
};

export const trackFormSubmission = (formName: string, formType: string) => {
  trackEvent('form_submit', 'Engagement', `${formName} - ${formType}`);
};

export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', 'Contact', phoneNumber);
};

export const trackEmailClick = (emailAddress: string) => {
  trackEvent('email_click', 'Contact', emailAddress);
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', 'Services', serviceName);
};

export const trackCityInterest = (cityName: string) => {
  trackEvent('city_interest', 'Location', cityName);
};

// User engagement tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', 'Engagement', `Depth: ${depth}%`, depth);
};

export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'Engagement', 'Page Duration', seconds);
};

export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', 'Content', videoTitle);
};

export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('download', 'Content', `${fileName} (${fileType})`);
};

// E-commerce tracking
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  trackEvent('view_item', 'E-commerce', serviceName, 1);

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      items: [
        {
          item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
          item_name: serviceName,
          item_category: serviceCategory,
          item_list_name: 'Services',
          item_list_id: 'services_page',
        },
      ],
    });
  }
};

export const trackServicePurchase = (serviceName: string, serviceCategory: string) => {
  trackEvent('add_to_cart', 'E-commerce', serviceName, 1);

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: 0, // Free consultation
      items: [
        {
          item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
          item_name: serviceName,
          item_category: serviceCategory,
          item_list_name: 'Services',
          item_list_id: 'services_page',
        },
      ],
    });
  }
};

// Custom dimension tracking
export const setUserType = (userType: 'prospect' | 'client' | 'returning') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      custom_map: {
        cd1: 'user_type',
      },
      user_type: userType,
    });
  }
};

export const setPageCategory = (category: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      custom_map: {
        cd2: 'page_category',
      },
      page_category: category,
    });
  }
};

export const setEngagementLevel = (level: 'low' | 'medium' | 'high') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      custom_map: {
        cd3: 'user_engagement_level',
      },
      user_engagement_level: level,
    });
  }
};
