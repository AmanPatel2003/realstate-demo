import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
export default function Home() {
  return (
    <div className="">
      <div className="">
        <header className="bg-gray-800 text-white ">
          <div className="container mx-auto flex justify-between items-center py-4 px-6 w-[80%] m-auto">
            <h1 className="text-2xl font-bold">Real Estate Platform</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/application" className="hover:text-yellow-300">
                    Application
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="hover:text-yellow-300">
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/reservation" className="hover:text-yellow-300">
                    Reservation
                  </a>
                </li>
                <li>
                  <a href="/register" className="hover:text-yellow-300">
                    Register
                  </a>
                </li>
              
              </ul>
            </nav>
          </div>
        </header>

        <main className="bg-white">
          <section
            className="bg-cover bg-center h-[450px] flex items-center justify-center  m-auto flex-col"
            style={{ backgroundImage: "url('/landing/banner.webp')" }}
          >
            <h2 className="text-6xl text-white font-bold w-[60%]  text-center leading-[80px]">
              The #1 site real estate professionals trust
            </h2>
            <div className="w-full flex justify-center items-center  ">
              <div className="w-[35%] p-4 rounded-full bg-white relative">
                <input
                  type="text"
                  className="w-[90%] outline-none"
                  placeholder="Address, School, City, Zip or Neighborhood
"
                />
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold absolute right-3 top-2 ">
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Homes around $649,999</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card h-[300px]">
                <div
                  className="card__front border rounded-lg overflow-hidden shadow-lg "
                  id="highlight"
                >
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-1.webp"
                      alt="Home 1"
                      height={208}
                      width={250}
                      className="object-cover h-[190px] -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
                <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={308}
                      width={308}
                      className="object-cover -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__front border rounded-lg overflow-hidden shadow-lg "
                  id="highlight"
                >
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={458}
                      width={450}
                      className="object-cover  -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
                <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={308}
                      width={350}
                      className="object-cover -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__front border rounded-lg overflow-hidden shadow-lg "
                  id="highlight"
                >
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={458}
                      width={450}
                      className="object-cover  -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
                <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={308}
                      width={350}
                      className="object-cover -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div
                  className="card__front border rounded-lg overflow-hidden shadow-lg "
                  id="highlight"
                >
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={458}
                      width={450}
                      className="object-cover  -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
                <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                  <Link
                    href="/register"
                    className="border rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src="/landing/section1-3.webp"
                      alt="Home 1"
                      height={308}
                      width={350}
                      className="object-cover -mt-6"
                    />
                    <div className="p-4">
                      <h4 className="font-bold text-xl">$442,000</h4>
                      <p className="text-gray-600">3 bed, 2 bath, 1,829 sqft</p>
                      <p className="text-gray-600">McKinney, TX 75071</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Newest Listings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section1-1.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section2-2.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section2-3.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section2-4.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Upcoming Open Houses</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section3-1.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section3-2.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section3-3.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section3-4.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Affordable Homes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section4-1.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section4-2.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section4-3.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section4-4.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold">Luxury Homes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section5-1.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section5-2.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section5-3.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section5-4.webp"
                  alt="Home 1"
                  height={458}
                  width={440}
                  className=" object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-xl">$819,000</h4>
                  <p className="text-gray-600">4 bed, 3 bath, 2,996 sqft</p>
                  <p className="text-gray-600">McKinney, TX 75071</p>
                </div>
              </Link>
            </div>
          </section>

          <section
            className="py-10 m-auto flex items-center justify-center h-[400px] relative overflow-hidden"
            style={{ backgroundImage: "url('/landing/banner-2.jpg')" }}
          >
            <div className="absolute inset-0  backdrop-blur-sm"></div>
            <div className="container mx-auto text-center z-10">
              <div className="h-[100px]">
                <h3 className="text-2xl font-bold mb-4">
                  The 10 Markets That Could See the Biggest Home Affordability
                  Gains as Mortgage Rates Drop
                </h3>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Read Article
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white py-10 w-[80%] m-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-1.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className=" object-cover"
                />

                <p className="text-gray-600 p-2 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-2.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className=" object-cover"
                />

                <p className="text-gray-600 p-2 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-3.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className=" object-cover"
                />

                <p className="text-gray-600 p-2 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/landing"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-4.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className=" object-cover"
                />

                <p className="text-gray-600 p-2 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[80%] m-auto">
            <div>
              <h4 className="font-bold mb-2">Get Local Info</h4>
              <p className="text-gray-400">
                Does it have pet-friendly rentals? How are the schools? Get
                important local information on the areas you're most interested
                in.
              </p>
              <input
                type="text"
                className="mt-4 px-4 py-2 w-full rounded bg-gray-700 text-white"
                placeholder="75069, McKinney, TX"
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">
                Need a home loan? Get pre-approved
              </h4>
              <p className="text-gray-400">
                Find a lender who can offer competitive mortgage rates and help
                you with pre-approval.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Get pre-approved now
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-2">Learn About NAR</h4>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About NAR
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Agent vs. REALTOR®
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Find an Appraiser
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Commercial Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">For REALTORS®</h4>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Create personalized social media content with RPR® Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How to Properly Price a Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    RESPA Guidance Tips for REALTORS®
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
