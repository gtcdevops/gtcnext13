import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import StatusDetails from "../components/StatusDetails"

const page = () => {
  return (
    <main className="min-h-screen items-center">
    <Navbar />
    <StatusDetails />
    <Footer />
  </main>  )
}

export default page