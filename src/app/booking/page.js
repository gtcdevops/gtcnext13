// 'use server'
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingSummary from "../components/BookingSummary"


// import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
// import { cookies } from 'next/headers';
// import * as mutations from '@/graphql/mutations';
// import config from '@/amplifyconfiguration.json';

// const cookiesClient = generateServerClientUsingCookies({
//   config,
//   cookies
// });

// async function createBooking(searchParams) {
//   const { data } = await cookiesClient.graphql({
//     query: mutations.createBooking,
//     variables: {
//       input: {
//         name: searchParams.get('name')?.toString() ?? ''
//       }
//     }
//   });
//   console.log("Created Todo: ", data?.createBooking )

//   revalidatePath('/booking')
// }

const Page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />

    <BookingSummary
    />

  <Footer />
  </main>  )
}

export default Page;