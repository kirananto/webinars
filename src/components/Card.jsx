import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."

export const Card = props => {
  const { host, name, type, date, navigation, slug, summary } = props

  return (
    <div className="bg-white h-full shadow-lg rounded-md overflow-hidden hover:bg-indigo-100">
      <Link to={`/${slug}`} state={{ navigation }} asModal>
        <div className="p-5 pb-1">
          <h1 className="text-2xl text-purple-700 font-bold leading-snug truncate mb-3">
            {name}
          </h1>
          <Feature label="Date" value={date} />
          <div className="mb-5">
            <h4 className="text-indigo-800 uppercase text-xxs tracking-wide font-medium pb-px">
              Cost
            </h4>
            <span
              class={` rounded-full ${
                type == "Free"
                  ? `text-green-800 bg-green-200`
                  : `text-indigo-800 bg-indigo-200`
              } uppercase px-2 py-1 text-xs font-bold mr-3`}
            >
              {type}
            </span>
          </div>
          <h4 className="text-indigo-800 uppercase text-xxs tracking-wide font-medium pb-px">
            Details
          </h4>
          <p className="text-base text-indigo-900 mb-5 font-medium word-break">
            {summary?.length > 100
              ? `${summary.substring(0, 100)}...`
              : summary}
          </p>
          <Feature label="Host" value={host} />
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  host: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}
