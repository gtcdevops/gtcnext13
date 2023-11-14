'use client'

import React from 'react'

 export default function Contactform() {

  return (
    <div className="px-8 py-20 sm:py-22 lg:px-8">

      <div className="mx-auto max-w-2xl">
        <div className="lg:text-4xl font-bold tracking-tight text-slate-700 text-4xl">CONTACT US</div>
        <p className="mt-2 text-base leading-6 font-light text-gray-600 ">
          For 24/7 enquiries or assistance, we can be reach via:  SMS / WhatsApp / Line / WeChat:  <span className='font-semibold'>+65 99887755</span>
        </p>
      </div>

      <form action="#" method="POST" className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="first-name" className="block text-md font-normal leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
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
      
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-md font-normal leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={12}
                className="block w-full rounded-md border-0 px-2.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>         
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="flex w-full justify-center bg-purple-700 p-3 mt-4 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}
