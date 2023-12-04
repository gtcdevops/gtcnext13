import React from 'react';
import Link from 'next/link';

export default function Quote() {
  return (
    <div className='mx-auto font-sans lg:px-[10rem;] px-8 py-8 max-w-5xl'>
{/* heading */}
      <div className="px-4 sm:px-0">
        <h1 className="font-mono text-5xl font-semibold leading-7 text-fuchsia-700">Your Booking Fare</h1>
        <p className="mt-6 max-w-2xl text-sm font-light leading-5 text-gray-500">We are pleased to bring you the most optimised fare base on your selection</p>
      </div>
{/* display booking fare */}
      <div className="px-4 sm:px-0">
        <h1 className="text-4xl font-semibold leading-7 mt-4 text-gray-700">S${}</h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Vehicle Type:</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">5-Seater</dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Pax:</dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">5</dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Luggage:</dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              5
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Type of Transfer</dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Arrival in Singapore</dd>
          </div>
         
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Pick Up Location</dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Changi Airport Terminal 3
            </dd>
          </div>
          <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">Drop Off </dt>
            <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Intercontinental Hotel Singapore 11 Somerset Road Singapore 553312
            </dd>
          </div>
          <div className="col-span-12 flex gap-4 pt-4 px-4 lg:px-0">
          <Link
            href="/details"
            className="flex justify-center bg-purple-800 px-14 py-3 mt-4 text-lg font-light leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            GET THIS RIDE
          </Link>
          <Link
            href="/details"
            className="flex w-16 justify-center bg-gray-300 px-14 py-3 mt-4 text-lg font-light leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            AMEND
          </Link>
          </div>
        </dl>
      </div>
    </div>
  )
}
