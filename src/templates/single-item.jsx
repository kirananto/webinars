import { graphql } from "gatsby"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"
import * as dateFns from "date-fns"

export default (props) => {
  const { data, location } = props
  const {
    host,
    name,
    type,
    timetz,
    date,
    speakers,
    summary,
    url,
  } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={name} description={summary} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-8 lg:p-12" : "container py-8"}>
          <h1 className="text-2xl max-w-2lg lg:text-3xl text-purple-700 font-bold leading-tight">
            {name}
          </h1>
          <p className="text-base max-w-2lg lg:text-lg text-indigo-800 font-medium mb-8 mt-4">
            {summary}
          </p>
          
          <h4 className="text-indigo-800 uppercase text-xxs tracking-wide font-medium pb-px">
                  Speakers
                </h4>
                <p className="text-base text-purple-900 mb-5 font-medium word-break">
                  {speakers}
                </p>

          <div className="flex flex-wrap pl-0">
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
                <Feature
                  label="Date"
                  value={`${dateFns.format(
                    new Date(date),
                    "yyyy-MM-dd"
                  )} ${timetz} `}
                />
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
        timetz
        speakers
      }
    }
  }
`
