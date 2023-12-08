
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


// import { generateClient } from "aws-amplify/api";
import { createBookingData } from './graphql/mutations';
// import { Amplify } from 'aws-amplify';
// Amplify.configure(awsconfig);


// import awsconfig from './aws-exports';

// import "@aws-amplify/ui-react/styles.css";
import { BookingDataCreateForm } from "@/ui-components";

// Amplify.configure(awsconfig);


export default function page() {
  return (
    <main className="min-h-screen items-center">
      <Navbar />
<BookingDataCreateForm />

      <Footer />
      </main>
  )
}
