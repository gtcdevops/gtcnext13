
import React from "react";
import { useState } from "react";

const BookingStart = () => {

  const [selectedPax, setSelectedPax] = useState("");
  const [selectedLug, setSelectedLug] = useState("");

  const handleSelectPax = (event) => {
    setSelectedPax (event.target.value);
  };
  const handleSelectLug = (event) => {
    setSelectedLug (event.target.value);
  };

  let inputFieldVehicleType;
  if ((selectedPax) === "" && (selectedLug) === "") {
    inputFieldVehicleType = <input type='text' value="" readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) < 3) {
    inputFieldVehicleType = <input type='text' value='4 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) > 2) {
    inputFieldVehicleType = <input type='text' value='5 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else {
    inputFieldVehicleType = <input type='text' value='' readOnly style={{gridColumn: 'span 6'}}/>;
  }

  let inputFieldFare = inputFieldVehicleType;
  if ( inputFieldVehicleType === '4 Seater')   {
    inputFieldFare =  <input type='text' value='223' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ( inputFieldVehicleType === '5 Seater') {
    inputFieldFare = <input type='text' value='333' readOnly style={{gridColumn: 'span 6'}}/>;
  } else {
    inputFieldFare = <input type='text' value='noinput' readOnly style={{gridColumn: 'span 6'}}/>;
  }  
// by chat:
  let inputFieldFare;
if (selectedPax < 5 && selectedLug < 3) {
  inputFieldFare = <input type='text' value='223' readOnly style={{ gridColumn: 'span 6' }} />;
} else if (selectedPax < 5 && selectedLug > 2) {
  inputFieldFare = <input type='text' value='333' readOnly style={{ gridColumn: 'span 6' }} />;
} else {
  inputFieldFare = <input type='text' value='noinput' readOnly style={{ gridColumn: 'span 6' }} />;
}


  return (
    <div className="font-sans mx-auto text-sm mb-10 mt-10 bg-slate-50 shadow-lg lg:rounded-2xl sm:rounded lg:w-8/12 sm:px-6">
      <form>
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 p-8">

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

          <button 
          type="button"
          className="grid col-span-12 w-100 justify-center bg-fuchsia-700 px-20 py-3 mt-[20px] text-lg leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"      
          >
          GET 
          </button>
        </div>
      </form>


{inputFieldVehicleType}
{inputFieldDisplayFare}

  </div>
    
  );
};

export default BookingStart;




import React, { useState } from "react";

const BookingStart = () => {
  // ... (your existing code for state and event handlers)

  const computeFinalFare = (vehicleType) => {
    // Perform additional computations based on vehicleType and other variables
    if (vehicleType === '4 Seater') {
      // Perform computation for 4 Seater
      return 223;
    } else if (vehicleType === '5 Seater') {
      // Perform computation for 5 Seater
      return 333;
    } else {
      // Default case or additional computations
      return 0; // Adjust this based on your actual computation
    }
  };

  const finalFare = computeFinalFare(inputFieldVehicleType);

  return (
    <div className="font-sans mx-auto text-sm mb-10 mt-10 bg-slate-50 shadow-lg lg:rounded-2xl sm:rounded lg:w-8/12 sm:px-6">
      {/* ... (your existing JSX for the form) */}
      
      {inputFieldVehicleType}
      
      {/* Display the final fare */}
      <input
        type='text'
        value={finalFare}
        readOnly
        style={{ gridColumn: 'span 6' }}
      />
    </div>
  );
};

export default BookingStart;


let computeFinalFare = (vehicleType) => {
    if (vehicleType === '4 Seater') {
      computeFinalFare = <input type='text' value='222' readOnly style={{gridColumn: 'span 6'}}/>;
      return 444;
    } else if (vehicleType === '5 Seater') {
      computeFinalFare = <input type='text' value='333' readOnly style={{gridColumn: 'span 6'}}/>;
      return 555;
    } else if (vehicleType === '7 Seater') {
      computeFinalFare = <input type='text' value='444' readOnly style={{gridColumn: 'span 6'}}/>;
      return 777;
    } else {
      computeFinalFare = <input type='text' value='' readOnly style={{gridColumn: 'span 6'}}/>;
      return 0;
    }
  };

  let computeFinalFare = (inputFieldVehicleType) => {
    if (inputFieldVehicleType === '4 Seater') {
      <input type='text' value='222' readOnly style={{gridColumn: 'span 6'}}/>;
    } else if (inputFieldVehicleType === '5 Seater') {
      computeFinalFare = <input type='text' value='333' readOnly style={{gridColumn: 'span 6'}}/>;
    } else if (inputFieldVehicleType === '7 Seater') {
      <input type='text' value='444' readOnly style={{gridColumn: 'span 6'}}/>;
    } else {
      <input type='text' value='' readOnly style={{gridColumn: 'span 6'}}/>;
    }
  };



  let inputFieldVehicleType;

  if ((selectedPax) === "" && (selectedLug) === "") {
    inputFieldVehicleType = <input type='text' value="" readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) < 3) {
    inputFieldVehicleType = <input type='text' value='4 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) > 2) {
    inputFieldVehicleType = <input type='text' value='5 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) > 5) {
    inputFieldVehicleType = <input type='text' value='5 Seaterspecial' style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 5 && (selectedLug) < 5) {
    inputFieldVehicleType = <input type='text' value='5 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) < 6 && (selectedLug) < 6) {
    inputFieldVehicleType = <input type='text' value='5 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) > 7) {
    inputFieldVehicleType = <input type='text' value='Please Contact Us For More Information' readOnly style={{gridColumn: 'span 6'}}/>;
  } else if ((selectedPax) > 5 && (selectedLug) < 8) {
    inputFieldVehicleType = <input type='text' value='7 Seater' readOnly style={{gridColumn: 'span 6'}}/>;
  } else {
    inputFieldVehicleType = <input type='text' value='' readOnly style={{gridColumn: 'span 6'}}/>;
  }




  function computeFinalFare(inputFieldVehicleType) {
    if (inputFieldVehicleType === '4 Seater') {
      return 444;
    } else if (inputFieldVehicleType === '5 Seater') {
      return 555;
    } else if (inputFieldVehicleType === '7 Seater') {
      return 777;
    } else {
      return 0; 
    }
  }
  
    let finalFare = computeFinalFare(inputFieldVehicleType);



    const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
