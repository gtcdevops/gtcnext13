import Navbar from "./components/Navbar"
import Contenttop from "./components/Contenttop";
import Vehicles from "./components/Vehicles";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Navbar />
      <Contenttop />
      <Vehicles />
      <Footer />
      </main>
  )
}
