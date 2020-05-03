import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Webinars"
        description="Webinars hosted online during COVID-19"
      />

      <Hero
        tag="#webinars"
        title="Webinars"
        description="Webinars hosted online during COVID-19"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          host
          type
          date
          name
          slug
          summary
        }
      }
    }
  }
`
