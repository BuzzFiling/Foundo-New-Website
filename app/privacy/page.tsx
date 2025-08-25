"use client"

import Navbar from "@/Navbar" // adjust path as needed
import Privacycomp from "../privacycomp"
import Footer from "@/footer"

export default function Privacy() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
    <Privacycomp/>
    <Footer/>
    </main>
  )
}
