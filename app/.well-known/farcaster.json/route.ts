
import { minikitConfig } from "../../../minikit.config";

export async function GET() {
  // Return the full manifest object as required by Farcaster/Base
  return Response.json({
    accountAssociation: minikitConfig.accountAssociation,
    baseBuilder: minikitConfig.baseBuilder,
    miniapp: minikitConfig.miniapp
  });
}
