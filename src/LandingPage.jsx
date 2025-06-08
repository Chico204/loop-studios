import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger and close
import ResponsiveImage from "./ResponsiveImage";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const creations = [
   {
    title: "DEEP EARTH",
    desktopImage: "/images/images/desktop/image-deep-earth.jpg",
    mobileImage: "/images/images/mobile/image-deep-earth.jpg",
  },
   {
    title: "NIGHT ARCADE",
    desktopImage: "/images/images/desktop/image-night-arcade.jpg",
    mobileImage: "/images/images/mobile/image-night-arcade.jpg",
  },
   {
    title: "SOCCER VR",
    desktopImage: "/images/images/desktop/image-soccer-team.jpg",
    mobileImage: "/images/images/mobile/image-soccer-team.jpg",
  },
  {
    title: "THE GRID",
    desktopImage: "/images/images/desktop/image-grid.jpg",
    mobileImage: "/images/images/mobile/image-grid.jpg",
  },
 {
    title: "FROM UP ABOVE VR",
    desktopImage: "/images/images/desktop/image-from-above.jpg",
    mobileImage: "/images/images/mobile/image-from-above.jpg",
  },
  {
    title: "POCKET BOREALIS",
    desktopImage: "/images/images/desktop/image-pocket-borealis.jpg",
    mobileImage: "/images/images/mobile/image-pocket-borealis.jpg",
  },
  {
    title: "THE CURIOSITY",
    desktopImage: "/images/images/desktop/image-curiosity.jpg",
    mobileImage: "/images/images/mobile/image-curiosity.jpg",
  },
  {
    title: "MAKE IT FISHEYE",
    desktopImage: "/images/images/desktop/image-fisheye.jpg",
    mobileImage: "/images/images/mobile/image-fisheye.jpg",
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-black">
      {/* Navbar */}
     <header className="absolute top-0 left-0 w-full text-white px-6 py-4 flex justify-between items-center z-50">

        <h1 className="text-2xl font-bold">loopstudios</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 px-15">
          {["About", "Careers", "Events", "Products", "Support"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-300 transition duration-200 text-sm"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
       {menuOpen && (
  <div className="fixed inset-0 bg-black text-white z-50 flex flex-col animate-fadeIn">
    {/* Top bar with logo and close button */}
    <div className="flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold">loopstudios</h1>
      <button
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
      >
        <X size={32} />
      </button>
    </div>

    {/* Centered menu items */}
    <nav className="flex-1 flex flex-col items-center justify-center space-y-8 text-2xl">
      {["About", "Careers", "Events", "Products", "Support"].map((item) => (
        <a
          key={item}
          href="#"
          onClick={() => setMenuOpen(false)}
          className="hover:text-purple-300 transition duration-200"
        >
          {item}
        </a>
      ))}
    </nav>
  </div>
)}

      </header>

      {/* Hero Section with responsive image */}
   <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
  {/* Desktop Image */}
  <img
    src="/images/images/desktop/image-hero.jpg"
    alt="Hero Desktop"
    className="hidden md:block absolute inset-0 w-full h-full object-cover -z-10"
  />
  {/* Mobile Image */}
  <img
    src="/images/images/mobile/image-hero.jpg"
    alt="Hero Mobile"
    className="block md:hidden absolute inset-0 w-full h-full object-cover  -z-10"
  />

  <div className="relative px-4">
    <h2 className="text-4xl md:text-6xl font-semibold border-2 inline-block p-4">
      IMMERSIVE EXPERIENCES THAT DELIVER
    </h2>
  </div>
</section>


      {/* VR Leader Section */}
      <section className="px-6 py-16 md:flex md:items-center md:justify-between max-w-6xl mx-auto">
       <ResponsiveImage
  desktopSrc="/images/images/desktop/image-interactive.jpg"  
  mobileSrc="/images/images/mobile/image-interactive.jpg"    
  alt="User with VR"
  className="w-full md:w-1/2 mb-6 md:mb-0"
/>

        <div className="md:w-1/2 md:pl-10 md:relative md:right-30 bg-white md:pt-20 md:mt-30">
          <h3 className="text-4xl font-normal mb-4 md:6xl ">THE LEADER IN INTERACTIVE VR</h3>
          <p className="text-gray-700">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe. Our
            award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </div>
      </section>

      {/* Our Creations */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-3xl font-normal">OUR CREATIONS</h4>
          <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
            SEE ALL
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
         {creations.map(({ title, desktopImage, mobileImage }) => (
  <div
    key={title}
    className="relative group overflow-hidden cursor-pointer font-normal "
  >
    <ResponsiveImage
      desktopSrc={desktopImage}
      mobileSrc={mobileImage}
      alt={title}
      className="w-full h-60 md:h-100 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black text-white w-full">
      <h5 className="text-4xl font-light ">{title}</h5>
    </div>
  </div>
))}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-16 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center "><h1 className="text-2xl font-bold text-left">loopstudios</h1>
          <nav className="flex flex-col gap-4 mt-4 md:mt-0 md:flex-row">
            {["About", "Careers", "Events", "Products", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:underline transition duration-200"
              >
                {item}
              </a>
            ))}
          </nav></div>
          <div className="text-center items-center flex flex-col">
          <div className="flex text-xl space-x-2 pt-4 text-center items-center ">
       <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
        <FaInstagram />
       </div>
          <p className="md:pt-2 text-sm text-gray-400">
      © {new Date().getFullYear()} Loopstudios. All rights reserved.
    </p></div>
        </div>
       
      </footer>
    </div>
  );
}
