'use client'

import { useState } from 'react'
import Link from 'next/link';


export default function Form5s() {

  let HandleClick = "TransferType";

  function TransferType() {
    const [type, setType] = useState("");
    const [sign, setSign] = useState("");
  }

  return (
    <div className='px-4 py-8 sm:py-8 lg:px-8'>

    <div className="container mx-auto w-full text-center">

    <p className="mt-3 mb-8 text-sm text-gray-600 tracking-wide underline underline-offset-8">
BOOKING FORM    
</p>
    <h2 className="text-6xl font-semibold leading-7 text-slate-700">5-SEATER</h2>
    <p className="mt-6 text-1xl font-light text-slate-700"><span className='font-semibold'>S$58</span> PER STOP • 5 LUGGAGES MAX</p>
  </div> 
  
    <form className='flex mx-auto max-w-4xl p-8 mt-10'>       
    <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-12">
        
{/* name */}
            <div className="lg:col-span-6 col-span-12">
              <label htmlFor="name" className="block text-md font-medium leading-6 text-gray-700">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* email */}
            <div className="lg:col-span-6 col-span-12">
            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* contact no. */}
            <div className="lg:col-span-4 col-span-12">
            <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-700">
                Contact No.
              </label>
              <div className="mt-2">
                <input
                  id="contactno"
                  name="contactno"
                  type="tel"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* divider */}
            {/* <div className="col-span-12 border-t border-gray-400"></div> */}
{/* type of service */}
            <div className="lg:col-span-4 col-span-12">
              <label htmlFor="noofpax" className="block text-md font-medium leading-6 text-gray-700">
                Type of Transfer
              </label>
              <div className="mt-2">
                <select
                  id="typeservice"
                  name="typeservice"
                  placeholder="Select"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-7"
                >
                  <option>Select Choice</option>
                  <option>- - - - - - - - - - </option>
                  <option value="arrival">ARRIVAL IN SINGAPORE</option>
                  <option value="departure">DEPARTURE FROM SINGAPORE</option>
                </select>
              </div>
            </div>
{/* arrival date */}
            <div className="lg:col-span-4 col-span-6">
              <label htmlFor="arrivaldate" className="block text-md font-medium leading-6 text-gray-700">
                Date
              </label>
              <div className="mt-2">
                <input
                  id="arrivaldate"
                  name="arrivaldate"
                  type="date"
                  autoComplete="date"
                  className="block w-full h-fit rounded-md border-0 py-[10px] px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
            
{/* pick time */}
            <div className="lg:col-span-3 col-span-6">
            <label htmlFor="phone-number" className="block text-md font-medium leading-6 text-gray-700">
              Pick Up Time
            </label>
            <div className="mt-2">
              <div className="flex">
                <label htmlFor="pickuptime" className="sr-only">
                  Time
                </label>
        
              <input
                type="time"
                name="pickuptime"
                id="pickuptime"
                placeholder="0:00"
                className="block w-full rounded-md border-0 py-2.5 px-2.5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg leading-7"
              /></div>             
            </div>
          </div>
{/* Flight No. */}
          <div className="lg:col-span-3 col-span-4">
              <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-700">
                Flight No.
              </label>
              <div className="mt-2">
                <input
                  type="flightno"
                  name="flightno"
                  id="flight"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* pax */}
<div className="lg:col-span-3 col-span-4">
              <label htmlFor="noofpax" className="block text-md font-medium leading-6 text-gray-700">
                Pax
              </label>
              <div className="mt-2">
                <select
                  id="noofpax"
                  name="noofpax"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-7"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
{/* luggage  */}
<div className="lg:col-span-3 col-span-4">
              <label htmlFor="noofpax" className="block text-md font-medium leading-6 text-gray-700">
                Luggage
              </label>
              <div className="mt-2">
                <select
                  id="noofpax"
                  name="noofpax"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-lg sm:leading-7"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
{/* Pick up from */}
            <div className="col-span-12">
              <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-700">
                Pick Up Location
              </label>
              <div className="mt-2">
                <input onChange={''}
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
{/* Drop off */}
            <div className="col-span-12">
              <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-700">
                Drop Off Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                />
              </div>
            </div>
            <div className="col-span-12 text-sm font-light">
        Important:
        <p>Please check booking details before submitting.</p>
        <p>Booking once confirmed cannot be amended and payment will not be refunded.</p>
        <p>Luggages allowance are subjected to the type of vehicles.</p>
        <p>Terms and conditions applies.</p>
        </div>

        <div className="col-span-12">
        <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="agreed"
                      name="agrees"
                      type="checkbox"
                      className="h-7 w-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-md leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-800">
                      Agree to all terms and conditions
                    </label>
                  </div>
                </div>

        </div>

        <div className="col-span-12">
        <Link
            href="/details"
            className="flex w-100 justify-center bg-purple-800 px-20 py-3 mt-4 text-lg font-light leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            BOOK NOW
          </Link>
          </div>

          </div>
        

    </form>     
    </div>
  )
}
