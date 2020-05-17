import React, { Component } from "react"

export class Filters extends Component {
  render() {
    return (
      <div className="bg-purple-900 pb-8 pt-2 flex justify-center">
        <ul class="flex flex-wrap justify-center">
          {this.props.tags.map((item) => {
            return (
              <li class="px-2 py-2">
                <span
                  className={
                    item.selected
                      ? "cursor-pointer inline-block border border-purple-600 rounded py-1 px-3 bg-purple-600 text-white"
                      : "cursor-pointer inline-block border border-purple-100 rounded hover:border-gray-200 text-purple-100 hover:bg-gray-200 hover:text-purple-600 py-1 px-3"
                  }
                  onClick={() => {
                    const tags = this.props.tags.map((mapItem) => {
                      if (
                        mapItem.value === item.value 
                        // || (mapItem.selected && mapItem.value === "paid" && item.value === "Free") ||
                        // (mapItem.selected && mapItem.value === "Free" && item.value === "paid")
                      ) {
                        return { ...mapItem, selected: !mapItem.selected }
                      } else {
                        return {...mapItem, selected: false}
                      }
                    })

                     this.props.changeTag(tags)
                  }}
                >
                  #{item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
