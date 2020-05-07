import React from "react"
import { graphql } from "gatsby"
import { Cards, SiteMetadata, Filters, Search } from "../components"
import { Layout } from "../layouts/Layout"
import * as dateFns from "date-fns"

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: "",
      tags: [
        {
          label: "Free",
          value: "Free",
          selected: true,
        },
        {
          label: "Paid",
          value: "paid",
          selected: false,
        },
        {
          label: "PastEvents",
          value: "past",
          selected: false,
        },
        {
          label: "Today",
          value: "today",
          selected: false,
        },
        {
          label: "Future",
          value: "future",
          selected: false,
        },
      ],
    }
  }
  render() {
    const webinars = this.props.data.items.nodes.filter((item) => {
      if (
        JSON.stringify(item)
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase())
      ) {
        console.log("ddd", new Date(item.data.date))
        for (let tagItem of this.state.tags) {
          if (
            tagItem.value === "Free" &&
            tagItem.selected &&
            item.data.type != "Free"
          ) {
            return false
          } else if (
            tagItem.value === "paid" &&
            tagItem.selected &&
            item.data.type != "Paid"
          ) {
            return false
          } else if (
            tagItem.value === "past" &&
            tagItem.selected &&
            new Date(item.data.date) > new Date()
          ) {
            return false
          } else if (
            tagItem.value === "future" &&
            tagItem.selected &&
            new Date(item.data.date) < new Date()
          ) {
            return false
          } else if (
            tagItem.value === "today" &&
            tagItem.selected &&
            dateFns.format(new Date(item.data.date), "yyyy-MM-dd") !==
              dateFns.format(new Date(), "yyyy-MM-dd")
          ) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    })
    return (
      <Layout>
        <SiteMetadata
          title="Webinars"
          description="Webinars hosted online during COVID-19"
        />
        <Search
          searchValue={this.state.searchValue}
          onChange={(event) =>
            this.setState({ searchValue: event.target.value })
          }
        />
        <Filters
          tags={this.state.tags}
          changeTag={(tags) => this.setState({ tags })}
        />
        {webinars.length > 0 ? (
          <Cards nodes={webinars.slice(0, 24)} />
        ) : (
          <div className="pt-20 text-lg pb-20 mt-20 mb-20 text-gray-600 text-center">
            🔍
            <br />
            We're trying our best to find webinars across internet related to
            your queries.
            <br />
            Help us if you know any
          </div>
        )}
        {webinars.length > 24 && (
          <div className="text-lg pt-4 pb-4 text-center text-gray-600">
            {" "}
            +{webinars.length - 24} more webinars
          </div>
        )}
      </Layout>
    )
  }
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
