const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "Fortune Cookie Generator", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    // screenshotUrls removed
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: "",
    splashBackgroundColor: "#fbeec1",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: "", 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: "",
  },
} as const;

