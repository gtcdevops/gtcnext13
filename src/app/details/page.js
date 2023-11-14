import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Details from "../components/Details"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <Details />
    <Footer />
  </main>  )
}

export default page