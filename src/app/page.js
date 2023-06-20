'use client';

import {
  getStorefrontApiUrl,
  getPrivateTokenHeaders,
} from '../../shopify-client.js';
import Shop from './components/Shop.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>TEST</h1>
      <Shop />
    </main>
  )
}

export async function getServerSideProps() {
  const response = await fetch(getStorefrontApiUrl(), {
    body: JSON.stringify({
      // A Storefront API query
      query: GRAPHQL_QUERY,
    }),
    // When possible, add the 'buyerIp' property.
    headers: getPrivateTokenHeaders({ buyerIp: "..." }),
    method: 'POST',
  });

  const json = await response.json();

  return { props: json };
}
