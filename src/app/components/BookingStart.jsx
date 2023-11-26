"use client";

import React from "react";
import { useState } from "react";

const BookingStart = () => {

  const [eventType, setEventType] = useState("");
  const [selectedPax, setSelectedPax] = useState("");
  const [selectedLug, setSelectedLug] = useState("");
  const [selectedPickupA, setSelectedPickupA] = useState("");
  const [selectedDropoffA, setSelectedDropoffA] = useState("");
  const [selectedPickupD, setSelectedPickupD] = useState("");
  const [selectedDropoffD, setSelectedDropoffD] = useState("");
  const [selectedPostal, setSelectedPostal] = useState("");


  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleSelectPickupA = (event) => {
    setSelectedPickupA (event.target.value);
  };
  const handleSelectDropoffA = (event) => {
    setSelectedDropoffA (event.target.value);
  };
  const handleSelectPickupD = (event) => {
    setSelectedPickupD (event.target.value);
  };
  const handleSelectDropoffD = (event) => {
    setSelectedDropoffD (event.target.value);
  };

  const handleSelectPostal = (event) => {
    setSelectedPostal (event.target.value);
  };

  const handleSelectPax = (event) => {
    setSelectedPax (event.target.value);
  };
  
  const handleSelectLug = (event) => {
    setSelectedLug (event.target.value);
  };




  let inputFieldVehicleType;

  if ((selectedPax) === '' && (selectedLug) === '') {
    inputFieldVehicleType = '';
  } else if ((selectedPax) < 5 && (selectedLug) < 3) {
    inputFieldVehicleType = '4 Seater';
  } else if ((selectedPax) < 5 && (selectedLug) > 2) {
    inputFieldVehicleType = '5 Seater';
  } else if ((selectedPax) < 5 && (selectedLug) > 5) {
    inputFieldVehicleType = '5 Seater';
  } else if ((selectedPax) < 5 && (selectedLug) < 5) {
    inputFieldVehicleType = '5 Seater';
  } else if ((selectedPax) < 6 && (selectedLug) < 6) {
    inputFieldVehicleType = '5 Seater';
  } else if ((selectedPax) > 7) {
    inputFieldVehicleType = 'Please Contact Us For More Information';
  } else if ((selectedPax) > 5 && (selectedLug) < 8) {
    inputFieldVehicleType = '7 Seater';
  } else {
    inputFieldVehicleType = '';
  }

let vehicleFare;
    if (inputFieldVehicleType === '4 Seater') {
      vehicleFare = 444;
    } else if (inputFieldVehicleType === '5 Seater') {
      vehicleFare = 555;
    } else if (inputFieldVehicleType === '7 Seater') {
      vehicleFare = 777;
    } else {
      vehicleFare = 0;
    }
    
  

  let postalFare;

  if (parseInt(selectedPostal) < 69999 ) {
    postalFare = '23';
  } else if ((parseInt(selectedPostal) < 89999 )) {
    postalFare = '33';
  } else if ((parseInt(selectedPostal) < 109999 )) {
    postalFare = '48';
  } else if ((parseInt(selectedPostal) < 139999 )) {
    postalFare = '58';
  } else if ((parseInt(selectedPostal) < 169999 )) {
    postalFare = '68';
  } else if ((parseInt(selectedPostal) < 179999 )) {
    postalFare = '78';x
  } else if ((parseInt(selectedPostal) < 199999 )) {
    postalFare = '88';
  } else if ((parseInt(selectedPostal) < 219999 )) {
    postalFare = '98';
  } else if ((parseInt(selectedPostal) < 239999 )) {
    postalFare = '108';
  } else if ((parseInt(selectedPostal) < 279999 )) {
    postalFare = '208';
  } else {
    postalFare = '';
  }

let FinalFare = +postalFare + +vehicleFare;


  return (
    <div className="font-sans mx-auto text-sm mb-10 mt-10 bg-slate-50 shadow-lg lg:rounded-2xl sm:rounded lg:w-8/12 sm:px-6">
      <form>
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 p-8">
          {/* typez of transfer */}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="eventType"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              Type of Transfer
            </label>
            <div className="mt-2">
              <select
                id="eventType"
                value={eventType}
                onChange={handleEventTypeChange}
                className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="arrival">Arrival in Singapore</option>
                <option value="departure">Departure from Singapore</option>
              </select>
            </div>
          </div>

          {/* pax */}
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="pax"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              No. of Pax
            </label>
            <div className="mt-2">
            <select
                id="pax"
                value={selectedPax}
                onChange={handleSelectPax}
                className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">More than 7</option>
              </select>
            </div>
          </div>
  {/* luggage  */}
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="luggage"
              className="block text-md font-medium leading-6 text-gray-600"
            >
              No. of Luggage(s)
            </label>
            <div className="mt-2">
            <select
                id="luggage"
                value={selectedLug}
                onChange={handleSelectLug}
                className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
          </div>
          <div className="mt-2 border-t border-gray-300 col-span-12"></div>

  {/* arrival terminals */}

          {eventType === "arrival" && (
            <>
              <div className="col-span-12 md:col-span-12">
                <label
                  htmlFor="pickupairport"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Pick Up Location
                </label>
                <div className="mt-2">
                  <select
                  value={selectedPickupA}
                  onChange={handleSelectPickupA}
                    id="pickupairport"
                    name="pickupairport"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  >
                    <option value="" disabled>
                    Select Terminal
                    </option>
                    <option value="T1">
                      Singapore Changi Airport, Terminal 1
                    </option>
                    <option value="T2">
                      Singapore Changi Airport, Terminal 2
                    </option>
                    <option value="T3">
                      Singapore Changi Airport, Terminal 3
                    </option>
                    <option value="T4">
                      Singapore Changi Airport, Terminal 4
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-span-12 text-sm h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
  {/* dropoff location  */}
              <div className="col-span-12 md:col-span-9">
                <label
                  htmlFor="dropofflocation"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Drop Off Location
                </label>
                <div className="mt-2">
                  <input
                  value={selectedDropoffA}
                  onChange={handleSelectDropoffA}
                    type="text"
                    name="dropofflocation"
                    id="dropofflocation"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
                </div>
              </div>
  {/* dropoff postal  */}
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="dropoffpostal"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Postal Code
                </label>
                <div className="mt-2">
                  <input
                    value={selectedPostal}
                    onChange={handleSelectPostal}
                    type="text"
                    name="dropoffpostal"
                    id="dropoffpostal"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
                </div>
              </div>
            </>
          )}

  {/* departure terminals */}

          {eventType === "departure" && (
            <>
        {/* pickup location  */}
              <div className="col-span-12 md:col-span-9">
                <label
                  htmlFor="pickuplocation"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Pick Up Location
                </label>
                <div className="mt-2">
                  <input
                value={selectedPickupD}
                onChange={handleSelectPickupD}
                    type="text"
                    name="pickuplocation"
                    id="pickuplocation"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
                </div>
              </div>

        {/* pickup postal  */}
              <div className="col-span-6 md:col-span-3">
                <label
                  htmlFor="pickuppostal"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Postal Code
                </label>
                <div className="mt-2">
                  <input
                    value={selectedPostal}
                    onChange={handleSelectPostal}
                    type="text"
                    name="pickuppostal"
                    id="pickuppostal"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  />
                </div>
              </div>
              <div className="col-span-12 text-sm h-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

    {/* dropoff airport */}
              <div className="col-span-12 md:col-span-12">
                <label
                  htmlFor="dropoffairport"
                  className="block text-md font-medium leading-6 text-gray-600"
                >
                  Drop Off Location
                </label>
                <div className="mt-2">
                  <select
                    value={selectedDropoffD}
                    onChange={handleSelectDropoffD}
                    id="dropoffairport"
                    name="dropoffairport"
                    className="block w-full rounded-md border-0 py-2.5 px-2.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-7"
                  >
                    <option value="" disabled>
                    Select Terminal
                    </option>
                    <option value="T1">
                      Singapore Changi Airport, Terminal 1
                    </option>
                    <option value="T2">
                      Singapore Changi Airport, Terminal 2
                    </option>
                    <option value="T3">
                      Singapore Changi Airport, Terminal 3
                    </option>
                    <option value="T4">
                      Singapore Changi Airport, Terminal 4
                    </option>
                  </select>
                </div>
              </div>
            </>
          )}

          <button 
          type="button"
          className="grid col-span-12 w-100 justify-center bg-fuchsia-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"      
          >
          GET 
          </button>
        </div>
      </form>
{/* hidden fields */}
<div className="grid p-8">


{/* 
<input
        type='text'
        value={selectedPl}
        onChange={handleSelectFare}
        readOnly
        style={{ gridColumn: 'span 6' }}
        id='seOu'
      /> */}

{inputFieldVehicleType}
{postalFare}
<p>{vehicleFare}</p>

  <div>{eventType}</div>
  <div>{selectedPickupA}</div>
  <div>{selectedDropoffA}</div>
  <div>{selectedPickupD}</div>
  <div>{selectedDropoffD}</div>
  <div>{selectedPostal}</div>
  <div>{selectedPax}</div>
  <div>{selectedLug}</div>
  {FinalFare}
  </div>
    </div>
  );
};

export default BookingStart;


