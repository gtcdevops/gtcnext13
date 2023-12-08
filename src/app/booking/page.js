'use CLient'

import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingSummary from '../components/BookingSummary'


const Page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
          <BookingSummary onSubmit={(fields) => {
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
          />
    <Footer />
  </main>  )
}

export default Page