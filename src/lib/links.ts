export const CALENDLY_URL = "https://calendly.com/your-handle/booking";
export const PAYPAL_URL = "https://paypal.me/yourhandle";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const THANK_YOU_PATH = "/thank-you";

export const buildPaypalUrl = (): string => {
  if (!siteUrl) return PAYPAL_URL;
  try {
    const url = new URL(PAYPAL_URL);
    url.searchParams.set("return", `${siteUrl}${THANK_YOU_PATH}`);
    url.searchParams.set("cancel_return", `${siteUrl}/membership`);
    return url.toString();
  } catch {
    return PAYPAL_URL;
  }
};
