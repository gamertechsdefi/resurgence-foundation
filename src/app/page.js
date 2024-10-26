'use client'

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <header className="">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between p-4 items-center">
              <div className="flex">
                <Image src="/images/rf-logo.png" width={50} height={50} alt="rf-logo" />
              </div>
              <div className="hidden md:flex space-x-8 md:items-center">
                <Link href="/">Home</Link>
                <Link href="/">About us</Link>
                <Link href="/">Get involved</Link>
                <Link href="/">Projects</Link>
                <Link href="/" className="bg-neutral-900 font-bold text-white p-2 rounded-lg">Donate</Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-neutral-700 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  Home
                </Link>
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  About us

                </Link>
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                  Get involved
                </Link>
                <Link href="/" className="block text-neutral-900 hover:bg-gray-200 rounded-md px-3 py-2">
                 Projects
                </Link>
                <Link href="/" className="block text-neutral-900 font-bold hover:bg-gray-200 rounded-md px-3 py-2">
                  Donate
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
      <main>
        <div className="h-screen"
          style={{
            backgroundImage: 'url(/images/bg-one.avif)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="flex  flex-col justify-center z-10 bg-neutral-900 h-[100%] bg-opacity-60 text-white">
            <div className="p-8 md:p-16 md:w-[50%]">
              <h1 className="font-bold text-4xl md:text-6xl pb-4">Empowering Communities</h1>
              <p className="pb-4">We are committed to making the world a better place by providing vital support to 
              those in need during times of crisis and empowering communities with access to technology. Join us 
              in creating lasting change, not only through immediate relief but by helping build brighter, 
              sustainable futures—one person and one community at a time. </p>
              <div className="flex gap-8">
                <button className="bg-neutral-900 p-2">Make donation</button>
                <button className="bg-white text-neutral-900 p-2">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-8 md:px-16 md:w-[50%]">
          <h1 className="font-bold text-3xl pb-4">Who we are</h1>
          <p className="flex flex-col gap-2">
            <span>At <span className="font-bold">Resurgence Foundation</span>, we are a humanitarian organization committed to making a lasting impact
            in the lives of those affected by disasters and socio-economic challenges. With a deep sense of empathy
            and innovation, we strive to bridge the gap between urgent relief efforts and long-term sustainability.
            Our team is dedicated to not only providing life-saving assistance during times of crisis but also
            tackling one of Africa greatest challenges—the lack of access to essential technology.</span>
            <span>Through a combination of hands-on relief work and technological empowerment, we aim to uplift
            communities by delivering solutions that address immediate needs while laying the foundation for
            future growth and resilience.</span></p>
        </div>

        <div className="flex justify-end py-16 px-8 md:px-16 bg-neutral-300">
          <div className="md:w-[50%]">
          <h1 className="font-bold text-3xl pb-4">Our Mission</h1>
          <p className="flex flex-col gap-2">
            <span>Our mission is to extend a helping hand to those in need during times of disaster, providing
            immediate relief and long-term recovery. We work tirelessly to restore dignity, hope, and
            opportunities to affected individuals and communities.</span> 
            <span>Beyond disaster relief, we are passionate
            about closing the digital divide in Africa, ensuring that underserved communities have access to
            technology and education that can transform lives and unlock new possibilities.
            By leveraging innovation, collaboration, and compassion, we aim to build a world where every person has the
            tools and support they need to thrive—no matter their circumstances.</span> </p>
            </div>
        </div>

        <div className="py-16 px-8 md:px-16">
          <h1 className="font-bold text-3xl pb-2">Why we need you</h1>
          <p className="pb-4">As a new organization, your support is critical to helping us grow and fulfill our mission.
            Here is how you can get involved:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-200 border-2 border-neutral-500 rounded-lg p-4">
              <h1 className="font-bold text-xl pb-4">Donate</h1>
              <p>Your contribution will help fund our first projects and establish a solid foundation.</p>
            </div>
            <div className="bg-neutral-200 border-2 border-neutral-500 rounded-lg  p-4">
              <h1 className="font-bold text-xl pb-4">Volunteer</h1>
              <p> We need passionate volunteers to help us organize events, spread awareness, and bring
                our initiatives to life.</p>
            </div>
            <div className="bg-neutral-200 border-2 border-neutral-500 rounded-lg p-4">
              <h1 className="font-bold text-xl pb-4">Spread the word</h1>
              <p>Share our mission with your network to help us reach more people.</p>
            </div>
          </div>
        </div>

        <div className="py-16 px-8 md:px-16 bg-neutral-300">
          <h1 className="font-bold text-3xl pb-4">Our First Project</h1>
          <p className="pb-4">
            We are excited to launch our first project aimed at providing essential support to a local 
            non-profit orphanage home that cares for vulnerable children. These children deserve access 
            to basic necessities, including food, clothing, healthcare, education, and a safe, nurturing 
            environment.
          </p>
          <button className="bg-neutral-900 text-white rounded-lg p-4">Learn more</button>
          <div>

          </div>
        </div>

      </main>
    </div>
  );
}
