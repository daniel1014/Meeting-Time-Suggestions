import { OauthConnection } from "../../types/OauthConnection";

export interface UnifiedApiConstructor {
  connectionId: string;
  connection?: OauthConnection;
  shouldUpdateConnection?: boolean;
}
