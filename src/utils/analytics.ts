declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsParams {
  service?: string;
  page_location?: string;
  button_location?: string;
  device?: string;
  [key: string]: any;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  const payload = {
    event: eventName,
    page_location: window.location.pathname,
    device: window.innerWidth < 768 ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString(),
    ...params,
  };

  if (window.dataLayer) {
    window.dataLayer.push(payload);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics Tracked]: ${eventName}`, payload);
  }
}

export function trackBookingClick(buttonLocation: string, service?: string) {
  trackEvent('booking_click', {
    button_location: buttonLocation,
    service: service || 'General',
  });
}

export function trackQuizStart() {
  trackEvent('quiz_start', {
    quiz_name: 'starting_point_finder',
  });
}

export function trackQuizSelect(option: string, recommendedService: string) {
  trackEvent('quiz_complete', {
    quiz_name: 'starting_point_finder',
    selected_option: option,
    recommended_service: recommendedService,
  });
}
