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
    header: "eyJmaWQiOjI0NjQ3MSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQzQTgwOTQ1OTE0M2RBYTJFMDM5Njk1NTAwYzJBNjNBZTMyZTMxRDEifQ",
    payload: "eyJkb21haW4iOiJmb3J0dW5lLWNvb2tpZS1nZW5lcmF0b3ItdGF1LnZlcmNlbC5hcHAifQ",
    signature: "RcKO49Qmnm/zo2EBLrI7PYG10peAEQEPPxpD4h2aUgl98hYrfLLtoPo1SU0SLUnDacU/e8L88vu9Z7jhy4FZsRs="
  },
  baseBuilder: {
    ownerAddress: ""
  },
  miniapp: {
    version: "1",
    name: "Fortune Cookie Generator",
    subtitle: "Find your fortune!",
    description: "A simple Fortune Cookie Generator miniapp that provides users with random fortunes at the click of a button.",
    iconUrl: "https://fortune-cookie-generator-tau.vercel.app/icon.png",
    splashImageUrl: "https://fortune-cookie-generator-tau.vercel.app/icon.png",
    splashBackgroundColor: "#fbeec1",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["fortune", "fun", "entertainment", "random"],
    heroImageUrl: "https://fortune-cookie-generator-tau.vercel.app/hero.png",
    imageUrl: "https://fortune-cookie-generator-tau.vercel.app/hero.png",
    tagline: "Discover your fortune",
    ogTitle: "Fortune Cookie Generator",
    ogDescription: "Discover your fortune",
    ogImageUrl: "https://fortune-cookie-generator-tau.vercel.app/hero.png",
    noindex: false,
    screenshotUrls: [
      "https://fortune-cookie-generator-tau.vercel.app/screenshot.png"
    ]
  },
} as const;

