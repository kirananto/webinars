import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
    <a href="https://forms.gle/kAm6wpjArPmyj7uJ7" target="__blank" className="container text-right pt-6 text-white	absolute top-0 right-0 mr-8" style={{ width: 'auto'}}  >Subscribe to newsletter</a>
      <header className="bg-purple-900 pt-32 pb-2">
        <div className="container text-center">
          <h1 className="text-3xl text-purple-100 font-bold tracking-wider cursor-pointer" onClick={() => window.location.replace('/')}>Webinar Chief</h1>
        </div>
      </header>
      {children}
      {/* <div className="bg-white py-8 lg:py-16 mt-8">
        <div className="container">
          <SignupForm />
        </div>
      </div> */}
      <Footer />
    </>
  )
}
