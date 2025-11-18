

// src/pages/LandingPage.jsx
import React from "react";

import Navbar from "../components/landingpage/navbar.jsx";
import Hero from "../components/landingpage/hero.jsx";
import Footer from "../components/landingpage/footer.jsx";
import Trending from "../components/landingpage/trending.jsx";
import Mentorship from "../components/landingpage/mentorship.jsx";
import Internships from "../components/landingpage/internships.jsx";
import JoinCollege from "../components/landingpage/joincollege.jsx";
import Freshers from "../components/landingpage/freshers.jsx";
import Feedback from "../components/landingpage/feedback.jsx";
import Companies from "../components/landingpage/companies.jsx";
import About from "../components/landingpage/about.jsx";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />
      <Hero />
      <Trending />
      <Mentorship />
      <Internships />
      <JoinCollege />
      <Freshers />
      <Feedback />
      <Companies />
      <About />
      <Footer />
    </div>
  );
}






