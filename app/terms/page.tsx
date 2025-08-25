"use client"

import Navbar from "@/Navbar" // adjust path as needed
import Footer from "@/footer"
import Termscomp from "../termscomp"

export default function Privacy() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
    <Termscomp/>
    <Footer/>
    </main>
  )
}
