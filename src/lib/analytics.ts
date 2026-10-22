/**
 * Privacy-friendly, multi-channel analytics and conversion tracking helper.
 * Supports Google Analytics 4 (gtag), Google Tag Manager (dataLayer), and Meta Pixel (fbq).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
    } catch {
      // ignore
    }
  }

  // 2. Google Tag Manager
  if (Array.isArray(window.dataLayer)) {
    try {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    } catch {
      // ignore
    }
  }

  // 3. Meta Pixel standard / custom events
  if (typeof window.fbq === "function") {
    try {
      if (eventName === "whatsapp_click") {
        window.fbq("track", "Contact", {
          content_name: params.location || "WhatsApp CTA",
          ...params,
        });
      } else if (eventName === "form_submit") {
        window.fbq("track", "Lead", {
          content_name: params.form_name || "Ad Account Audit",
          ...params,
        });
      } else {
        window.fbq("trackCustom", eventName, params);
      }
    } catch {
      // ignore
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event: ${eventName}]`, params);
  }
}

export function trackWhatsAppClick(location: string, label?: string) {
  trackEvent("whatsapp_click", {
    location,
    label: label || "Message on WhatsApp",
    contact_method: "whatsapp",
  });
}

export function trackFormSubmit(formName: string, details: Record<string, unknown> = {}) {
  trackEvent("form_submit", {
    form_name: formName,
    ...details,
  });
  // Send standard generate_lead and audit_form_submit events for GA4/Meta Pixel
  trackEvent("generate_lead", {
    lead_source: formName,
    ...details,
  });
  trackEvent("audit_form_submit", {
    form_name: formName,
    ...details,
  });
}

export function trackPhoneClick(location: string) {
  trackEvent("phone_click", {
    location,
    contact_method: "phone",
  });
}

export function trackEmailClick(location: string) {
  trackEvent("email_click", {
    location,
    contact_method: "email",
  });
}

export function trackCaseStudyView(slug: string, title?: string) {
  trackEvent("case_study_view", {
    case_study_slug: slug,
    case_study_title: title,
  });
}

export function trackScrollDepth(depth: 50 | 90) {
  trackEvent("scroll_depth", {
    depth,
  });
}
