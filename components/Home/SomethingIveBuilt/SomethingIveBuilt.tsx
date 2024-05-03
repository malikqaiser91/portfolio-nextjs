import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { NextRouter } from "next/router";

export default function SomethingIveBuilt() {
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Img
                src={"/project1.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/hackme.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://www.sunhub.com/"} target="_blank">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Sunhub: Ecommerce Platform
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                {/* <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project is a{" "}
                  <span className="text-AAsecondary"> SAAS </span>
                  e-commerce project, it helps the store owner to manage their
                  store and products, and also help them to track their orders
                  and customers. It also provides a{" "}
                  <span className="text-AAsecondary"> store front </span> for
                  the customers to buy products.
                </p> */}
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  SunHub is an{" "}
                  <span className="text-AAsecondary text-base">
                    ecommerce platform
                  </span>{" "}
                  dedicated to providing high-quality solar panels and related
                  products to customers seeking sustainable energy solutions
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Node js</span>
                <span className="pr-4 z-10">React js</span>
                <span className="pr-4 z-10">Express js</span>
                <span className="pr-4 z-10">Socket.io</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">Github</span>
                <span className="pr-4 z-10">AWS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.sunhub.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url="https://www.sunhub.com/" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://abhi.com.pk/"} target="_blank">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/project2.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/project2.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <Link
                  href={"https://abhi.com.pk/"}
                  // target="_blank"
                  target={"_blank"}
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Abhi Financial Services
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                {/* <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project is a{" "}
                  <span className="text-AAsecondary"> Andriod </span> app, it
                  helps the user to learn and memorize the{" "}
                  <span className="text-AAsecondary"> Ramadhan Dua </span> in a
                  fun way. It also provides a{" "}
                  <span className="text-AAsecondary"> Typing </span> game to
                  help the user to memorize the Dua.
                </p> */}
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  ABHI Finance is a{" "}
                  <span className="text-AAsecondary">Fintech SAAS</span> at the
                  forefront of the embedded finance revolution providing a
                  comprehensive suite of solutions including Earned Wage Access,
                  Payroll Solutions, and SME Financing. The fintech company has
                  established partnerships with over 450 companies driving
                  economic growth and creating lasting social impact
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Node js</span>
                <span className="pr-4 z-10">React js</span>
                <span className="pr-4 z-10">Express js</span>
                <span className="pr-4 z-10">PostgreSQL</span>
                <span className="pr-4 z-10">Docker</span>
                <span className="pr-4 z-10">Sentry</span>
                <span className="pr-4 z-10">AWS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://abhi.com.pk/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url="https://abhi.com.pk/" />
                </a>
              </div>
              {/* <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url={"typing"} />
              </div> */}
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://www.domain.com.au/"} target="_blank">
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/project3.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/hackme.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <Link href={"https://www.domain.com.au/"} target="_blank">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Domain.com.au | Real Estate & Properties <br /> For Sale &
                    Rent
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Domain.com.au is a popular real estate website in Australia.
                  It lists properties for sale and rent across the country,
                  offering a platform for users to search for residential and
                  commercial properties. The website provides detailed property
                  listings, including photos, descriptions, and information
                  about the local area. Users can also find resources and tools
                  to help them in their property search, such as property price
                  estimates, suburb profiles, and market trends.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Cookies</span>
                <span className="pr-4 z-10">Google APi</span>
                <span className="pr-4 z-10">Data collecting</span>
                <span className="pr-4 z-10">IP Address</span>
                <span className="pr-4 z-10">Location</span>
              </ul>
              {/* <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url={"https://www.domain.com.au/"} />
              </div> */}
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.domain.com.au/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url="https://www.domain.com.au/" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"/typing"} onClick={(e) => e.preventDefault()}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/project4.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/project4.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <Link href={"/typing"} onClick={(e) => e.preventDefault()}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Travel Booking Platform
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Explore the world with our{" "}
                  <span className="text-AAsecondary">Next.js 13-powered</span>{" "}
                  travel booking platform. Seamlessly plan your next adventure
                  with a user-friendly interface that ensures a smooth booking
                  experience. Discover a wide range of destinations, find the
                  perfect accommodations, and customize your itinerary with
                  ease. Whether you're seeking a relaxing getaway or an
                  action-packed journey, our platform is designed to make your
                  travel dreams a reality. Book your next trip with confidence
                  and embark on unforgettable experiences.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js 13</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url="https://valleywoods.in/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
