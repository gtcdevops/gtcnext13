import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingSummary from "../components/BookingSummary"





const Page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />

    <BookingSummary
    />

  <Footer />
  </main>  
  )
}

export default Page;