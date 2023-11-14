import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Check from "../components/Check"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <Check />
    <Footer />
  </main>  )
}

export default page