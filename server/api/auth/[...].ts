import AzureADProvider from "next-auth/providers/azure-ad";
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    AzureADProvider.default({
        clientId: process.env.AZURE_AD_CLIENT_ID,
        clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
        tenantId: process.env.AZURE_AD_TENANT_ID,
        name: 'Microsoft'
    })
  ]
})