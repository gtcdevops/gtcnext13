import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Quote from "../components/Quote"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <Quote />
    <Footer />
  </main>  )
}

export default page