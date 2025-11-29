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
    subtitle: "Find your fortune!", 
    description: "A simple Fortune Cookie Generator miniapp that provides users with random fortunes at the click of a button.",
    // screenshotUrls removed
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: "",
    splashBackgroundColor: "#fbeec1",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["fortune", "fun", "entertainment", "random"],
    heroImageUrl: "", 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: "",
  },
} as const;

