import PropTypes from "prop-types"
import React from "react"

export const Feature = ({ label, value }) => {
  if (typeof value === "string") {
    if (value.startsWith("http") || value.startsWith("mailto")) {
      value = (
        <div className="truncate">
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-indigo-700 transition-colors duration-200"
          >
            {value}
          </a>
        </div>
      )
    } else {
      value = <div className="truncate">{value}</div>
    }
  } else if (Array.isArray(value)) {
    value = value.map((item, i) => (
      <span key={`${label}_${i}`} className="inline-block mr-4 break-normal">
        {item}
      </span>
    ))
  }

  return (
    <>
      <h4 className="text-indigo-800 uppercase text-xxs tracking-wide font-medium pb-px">
        {label}
      </h4>

      <div className={`font-medium text-indigo-800 text-base leading-loose mb-4`}>
        {value}
      </div>
    </>
  )
}

Feature.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}
