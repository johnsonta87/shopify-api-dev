import { createStorefrontClient } from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  privateStorefrontToken: `${process.env.private_access_token}`,
  storeDomain: `https://${process.env.shop}.myshopify.com`
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
