import React from "react"

export const SignupForm = () => {
  return (
    <form action="//" target="_blank" method="post">
      <div className="flex flex-wrap lg:justify-between lg:items-center">
        <div>
          <h3 className="text-2xl lg:text-4xl font-bold text-purple-700 tracking-tight">
            Sign up for our newsletter
          </h3>
          <p className="text-indigo-800 font-medium text-base lg:text-lg pb-4 lg:pb-0">
            Every 2 weeks we'll send you a list of a popular and new
            destinations.
          </p>
        </div>
        <div className="flex w-full md:w-1/2 lg:w-auto">
          <input
            aria-label="E-mail address"
            className="flex-1 lg:w-64 rounded-l-lg placeholder-indigo-800 text-indigo-800 px-4 py-1 border border-indigo-700 appearance-none rounded-left text-lg leading-loose focus:outline-none focus:shadow-outline"
            maxLength="60"
            name="email"
            placeholder="Your e-mail"
            required
            type="email"
          />
          <input
            className="rounded-r-lg text-center px-4 py-1 leading-loose text-lg font-medium transition-colors duration-200 focus:outline-none focus:shadow-outline bg-indigo-700 text-white cursor-pointer hover:bg-indigo-500"
            type="submit"
            value="Sign up"
          />
        </div>
      </div>
    </form>
  )
}
