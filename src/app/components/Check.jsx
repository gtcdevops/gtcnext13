'use client'

import React from 'react'
import Link from 'next/link';




 
 export default function Check() {

  return (
    <div className="px-8 py-20 sm:py-22 lg:px-8">

      <div className="mx-auto max-w-2xl">
        <div className="lg:text-4xl font-bold tracking-tight text-slate-700 text-4xl">CHECK BOOKING</div>
        <p className="mt-1 text-base leading-6 text-gray-600 ">
          Check your booking status with your booking reference no. and email address.
        </p>
        <p className="text-lg leading-6 text-gray-600 ">
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="first-name" className="block text-md font-normal leading-6 text-gray-900">
              Booking Reference No.
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="reference"
                id="reference"
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>
          <div>
          <label htmlFor="email" className="block text-md font-normal leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
              />
            </div>
          </div>
        
        </div>
        <div className="mt-16">
        <Link
            href="/status"
            className="flex w-100 justify-center bg-purple-800 px-20 py-3 mt-4 text-lg font-light leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ENQUIRE NOW
          </Link>
        </div>
      </form>
    </div>
  )
}
