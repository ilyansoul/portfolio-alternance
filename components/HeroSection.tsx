"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section className="" id="home">
      <div className=" flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/cool-min.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Ilyan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Web Developer , {" "}
            </span>
            I am thrilled to introduce myself as a   {" "}
            <span className="font-semibold text-teal-600">
              
             Next.js , TypeScript , Tailwind CSS , PostgreSQL and Prisma   {" "}
             </span>
             developer. My passion lies in creating robust and efficient web applications that provide seamless user experiences.
            With a strong foundation in modern web development technologies, I bring creativity and innovation to every project I undertake.
          </p>
          <Link
            to="projects"
            className="text-black font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
