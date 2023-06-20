import React from 'react'

export default function Shop() {
  const GRAPHQL_QUERY = `
    query {
      shop {
        name
      }
    }
  `;

  return (
    <div>{GRAPHQL_QUERY}</div>
  )
}
