'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion, MotionConfig } from "framer-motion";

import aboutIcon from "/public/images/charity-01.png"
import p1 from "/public/images/first-event/01.jpg";
import p2 from "/public/images/first-event/02.jpg";
import p3 from "/public/images/first-event/03.jpg";
import p4 from "/public/images/first-event/04.jpg";
import p5 from "/public/images/first-event/05.jpg";
import p6 from "/public/images/first-event/06.jpg";
import p7 from "/public/images/first-event/07.jpg";
import p8 from "/public/images/first-event/08.jpg";
import p9 from "/public/images/first-event/09.jpg";
import p10 from "/public/images/first-event/10.jpg";
import p11 from "/public/images/first-event/11.jpg";
import p12 from "/public/images/first-event/12.jpg";
import p13 from "/public/images/first-event/13.jpg";
import p14 from "/public/images/first-event/14.jpg";
import Header from "@/components/Header";

const images = [
  { src: p1, alt: "JavaScript logo" },
  { src: p2, alt: "Next.js logo" },
  { src: p3, alt: "React logo" },
  { src: p4, alt: "Node.js logo" },
  { src: p5, alt: "Web3.js logo" },
  { src: p6, alt: "Adobe Photoshop logo" },
  { src: p7, alt: "CorelDRAW logo" },
  { src: p8, alt: "Flutter logo" },
  { src: p9, alt: "Motion logo" },
  { src: p10, alt: "Motion logo" },
  { src: p11, alt: "Motion logo" },
  { src: p12, alt: "Motion logo" },
  { src: p13, alt: "Motion logo" },
  { src: p14, alt: "Motion logo" },
];

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2; // Get width of half (original images)
      setScrollWidth(totalWidth);

      controls.start({
        x: [0, -totalWidth],
        transition: { ease: "linear", duration: 20, repeat: Infinity },
      });
    }
  }, [controls]);
  return (
    <div className="grayscale bg-neutral-900 text-white">
      <Header />
      <main>
        <div className="h-screen"
          style={{
            backgroundImage: 'url(/images/bgg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="flex  flex-col justify-center z-10 bg-neutral-900 h-[100%] bg-opacity-60 text-white">
            <div className="flex flex-col items-center p-8 md:p-16 text-center">
              <h1 className="font-bold text-4xl md:text-6xl pb-4">Empowering individuals & Communities</h1>
              <p className="pb-4 md:px-32">We are committed to making the world a better place by providing vital support to
                those in need during times of crisis and empowering communities with access to technology. Join us
                in creating lasting change, not only through immediate relief but by helping build brighter,
                sustainable futures—one person and one community at a time. </p>
              <div className="flex gap-8">
                <Link className="bg-neutral-800 p-4 rounded-lg shadow-sm font-bold" href="">Donate</Link>
                <Link className="bg-[#f9f9f9] text-black p-4 rounded-lg shadow-sm font-bold" href="https://bit.ly/4hfhDYq">Check event </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-neutral-900 text-white pt-16 pb-32 px-8 md:px-24 flex flex-col-reverse md:flex-row md:justify-between relative overflow-hidden"
        >
          {/* Background Circle Image */}
          <div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bottom-0 md:bottom-auto md:right-0 md:translate-x-1/2 md:translate-y-0 translate-y-1/2">
            <Image
              src="/images/cha-bg1.png"
              fill
              className="object-contain opacity-10"
              alt="background circle"
              sizes="(max-width: 768px) 800px, 2000px"
              priority
            />
          </div>

          {/* Existing content */}
          <div className="relative z-10">
            <h1 className="font-bold text-3xl pb-4">Who we are</h1>
            <p>At Resurgence Foundation, we are a humanitarian organization committed to making a lasting
            impact in the lives of those affected by disasters and socio-economic challenges. With a
            deep sense of empathy and innovation, we strive to bridge the gap between urgent relief
            efforts and long-term sustainability. Our team is dedicated to not only providing
            life-saving assistance during times of crisis but also tackling one of Africa greatest
            challenges—the lack of access to essential technology.
            Through a combination of hands-on relief work and technological empowerment, we aim to
            uplift communities by delivering solutions that address immediate needs while laying the
            foundation for future growth and resilience.</p>
          </div>

          <div className="w-full md:w-[32rem] aspect-square relative z-10">
            <Image
              src={aboutIcon}
              fill
              className="object-contain p-8 md:p-0"
              alt="about icon"
              sizes="(max-width: 768px) 100vw, 32rem"
            />
          </div>
        </div>

        <div className="py-32 px-8 md:px-16 bg-gradient-to-b from-neutral-600 to-neutral-900 relative overflow-hidden">
          {/* Background Circle Image for Mission */}
          {/* Background Circle Image for Mission */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/mission-bg.png"
              fill
              className="object-cover opacity-10"
              alt="mission background circle"
              sizes="100vw"
              priority
            />
          </div>

          {/* Mission Content */}
          <div className="text-white relative z-10">
            <h1 className="font-bold text-3xl pb-4">Our Mission</h1>
            <p className="flex flex-col gap-2">
              <span>Our mission is to extend a helping hand to those in need during times of disaster, providing
                immediate relief and long-term recovery. We work tirelessly to restore dignity, hope, and
                opportunities to affected individuals and communities.</span>
              <span>Beyond disaster relief, we are passionate
                about closing the digital divide in Africa, ensuring that underserved communities have access to
                technology and education that can transform lives and unlock new possibilities.
                By leveraging innovation, collaboration, and compassion, we aim to build a world where every person has the
                tools and support they need to thrive—no matter their circumstances.</span>
            </p>
          </div>
        </div>

        <section className="md:px-16 my-16 mx-4 p-4 md:p-16 border-2 border-neutral-700 rounded-3xl">
          <h1 className="text-2xl font-bold">First Donation Event</h1>
          <p className="pb-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit </p>
          <button className="bg-neutral-300 text-neutral-900 px-8 py-2 mb-8 rounded-md font-bold">Read more</button>
          <div className="relative w-full overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex gap-4 md:gap-8"
              animate={controls}
            >
              {[...images, ...images].map((img, index) => (
                <div key={index} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="py-16 px-8 md:px-16">
          <h1 className="font-bold text-3xl pb-2">Why we need you</h1>
          <p className="pb-4">As a new organization, your support is critical to helping us grow and fulfill our mission.
            Here is how you can get involved:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-neutral-800 border-2 border-neutral-500 rounded-lg p-4">
              <div className="flex flex-row items-center gap-2 pb-2">
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                <h1 className="font-bold text-xl">Donate</h1>
              </div>
              <p>Your contribution will help fund our first projects and establish a solid foundation.</p>
            </div>
            <div className="bg-neutral-800 border-2 border-neutral-500 rounded-lg p-4">
              <div className="flex flex-row items-center gap-2 pb-2">
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" /></svg>
                <h1 className="font-bold text-xl">Volunteer</h1>
              </div>
              <p>We need passionate volunteers to help us organize events, spread awareness, and bring
                our initiatives to life.</p>
            </div>
            <div className="bg-neutral-800 border-2 border-neutral-500 rounded-lg p-4">
              <div className="flex flex-row items-center gap-2 pb-2">
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" /></svg>
                <h1 className="font-bold text-xl">Spread the word</h1>
              </div>
              <p>Share our mission with your network to help us reach more people.</p>
            </div>
          </div>
        </div>

      </main>

      <footer className="flex flex-col md:flex-row justify-between px-8 py-16 md:px-16 gap-4">
        <div className="flex-col">
          <h1 className="font-bold text-xl">Resurgence Foundation</h1>
          <p className="text-sm">Empowering individuals & Communities.</p>
        </div>
        <div>
          <a href="https://x.com/rf_org">
            <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
