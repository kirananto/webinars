import { graphql } from "gatsby"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default props => {
  const { data, location } = props
  const { host, name, type, date, summary, tags, url } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={name} description={summary} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-purple-700 font-bold leading-tight">
            {name}
          </h1>
          <p className="text-base lg:text-lg text-indigo-800 font-medium mb-8 mt-4">
            {summary}
          </p>
          <div className="flex flex-wrap pl-4">
            <div className="w-full lg:w-4/5 grid grid-cols-2">
              <div>
                <Feature label="Host" value={host} />
              </div>
              <div>
                <Feature label="Url" value={url} />
              </div>
              <div>
                <Feature label="Pricing" value={type} />
              </div>
              <div>
                <Feature label="Duration" value={type} />
              </div>
              <div>
                <Feature label="Date" value={date} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        host
        type
        name
        date
        slug
        summary
        tags
        url
      }
    }
  }
`
