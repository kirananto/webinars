import React, { Component } from "react"

export class Search extends Component {
  render() {
    return (
      <div className="bg-purple-900 px-2 flex justify-center">
        <input
            value={this.props.searchValue}
            onChange={this.props.onChange}
          placeholder="Search for webinars"
          className="appearance-none block w-full sm:w-1/2 xl:w-1/3 mt-3 bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
    )
  }
}
