import Navbar from "@/components/RealStateComp/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const container = [
  {
    id: 0,
    imgFront: "/landing/section1-1.webp",
    imgBack: "/landing/section1-4.webp",
    price: "$442,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },

  {
    id: 1,
    imgFront: "/landing/section1-2.webp",
    imgBack: "/landing/section1-3.webp",
    price: "$442,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 2,
    imgFront: "/landing/section1-3.webp",
    imgBack: "/landing/section1-2.webp",
    price: "$442,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 3,
    imgFront: "/landing/section1-4.webp",
    imgBack: "/landing/section1-1.webp",
    price: "$442,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
];

const container1 = [
  {
    id: 0,
    imgFront: "/landing/section2-2.webp",
    imgBack: "/landing/section3-1.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 1,
    imgFront: "/landing/section6-3.jpg",
    imgBack: "/landing/section2-4.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 2,
    imgFront: "/landing/section2-4.webp",
    imgBack: "/landing/section2-3.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 3,
    imgFront: "/landing/section3-1.webp",
    imgBack: "/landing/section2-2.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
];

const container2 = [
  {
    id: 0,
    imgFront: "/landing/section3-2.webp",
    imgBack: "/landing/section4-1.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 1,
    imgFront: "/landing/section3-3.webp",
    imgBack: "/landing/section3-4.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 2,
    imgFront: "/landing/section3-4.webp",
    imgBack: "/landing/section3-3.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 3,
    imgFront: "/landing/section4-1.webp",
    imgBack: "/landing/section3-2.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
];

const container3 = [
  {
    id: 0,
    imgFront: "/landing/section4-2.webp",
    imgBack: "/landing/section5-1.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 1,
    imgFront: "/landing/section4-3.webp",
    imgBack: "/landing/section4-4.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 2,
    imgFront: "/landing/section4-4.webp",
    imgBack: "/landing/section4-3.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 3,
    imgFront: "/landing/section5-1.webp",
    imgBack: "/landing/section4-2.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
];

const container4 = [
  {
    id: 0,
    imgFront: "/landing/section5-2.webp",
    imgBack: "/landing/section6-1.jpg",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 1,
    imgFront: "/landing/section5-3.webp",
    imgBack: "/landing/section5-4.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 2,
    imgFront: "/landing/section5-4.webp",
    imgBack: "/landing/section5-3.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
  {
    id: 3,
    imgFront: "/landing/section6-1.jpg",
    imgBack: "/landing/section5-2.webp",
    price: "$819,001",
    details: "3 bed, 2 bath, 1,829 sqft",
    location: "McKinney, TX 75071",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="">
        <main className="bg-white">
          <section
            className="bg-cover bg-center h-[450px] flex items-center justify-center  m-auto flex-col"
            style={{ backgroundImage: "url('/landing/banner.webp')" }}
          >
            <h2 className="text-6xl text-white font-bold w-[60%]  text-center leading-[80px] mb-5">
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
                <span className="w-10 cursor-pointer h-10 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold absolute right-3 top-2 ">
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className=" mb-10">
              <h3 className="text-2xl font-bold ">Homes around $649,999</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {container.map((items) => (
                <div className="card h-[300px]" key={items.id}>
                  <div
                    className="card__front border rounded-lg overflow-hidden shadow-lg "
                    id="highlight"
                  >
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgFront}
                        alt="Home 1"
                        height={208}
                        width={250}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,001</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgBack}
                        alt="Home 1"
                        height={308}
                        width={308}
                        className="h-[190px] w-full -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,000</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600 pb-5">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className=" mb-10">
              <h3 className="text-2xl font-bold">Newest Listings</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {container1.map((items) => (
                <div className="card h-[300px]" key={items.id}>
                  <div
                    className="card__front border rounded-lg overflow-hidden shadow-lg "
                    id="highlight"
                  >
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgFront}
                        alt="Home 1"
                        height={208}
                        width={250}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$819,001</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgBack}
                        alt="Home 1"
                        height={458}
                        width={440}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$819,000</h4>
                        <p className="text-gray-600">
                          4 bed, 3 bath, 2,996 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className=" mb-10">
              <h3 className="text-2xl font-bold">Upcoming Open Houses</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {container2.map((items) => (
                <div className="card h-[300px]" key={items.id}>
                  <div
                    className="card__front border rounded-lg overflow-hidden shadow-lg "
                    id="highlight"
                  >
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgFront}
                        alt="Home 1"
                        height={208}
                        width={250}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,001</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgBack}
                        alt="Home 1"
                        height={308}
                        width={308}
                        className="h-[190px] w-full -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,000</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600 pb-5">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className=" mb-10">
              <h3 className="text-2xl font-bold">Affordable Homes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {container3.map((items) => (
                <div className="card h-[300px]" key={items.id}>
                  <div
                    className="card__front border rounded-lg overflow-hidden shadow-lg "
                    id="highlight"
                  >
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgFront}
                        alt="Home 1"
                        height={208}
                        width={250}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,001</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgBack}
                        alt="Home 1"
                        height={308}
                        width={308}
                        className="h-[190px] w-full -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,000</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600 pb-5">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto py-10 w-[80%] m-auto">
            <div className=" mb-10">
              <h3 className="text-2xl font-bold">Luxury Homes</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {container4.map((items) => (
                <div className="card h-[300px]" key={items.id}>
                  <div
                    className="card__front border rounded-lg overflow-hidden shadow-lg "
                    id="highlight"
                  >
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgFront}
                        alt="Home 1"
                        height={208}
                        width={250}
                        className="w-full h-[190px] -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,001</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                  <div className="card__back border rounded-lg overflow-hidden shadow-lg">
                    <Link
                      href="/real_state/reservation"
                      className="border rounded-lg overflow-hidden shadow-lg"
                    >
                      <Image
                        src={items.imgBack}
                        alt="Home 1"
                        height={308}
                        width={308}
                        className="h-[190px] w-full -mt-6"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-xl">$442,000</h4>
                        <p className="text-gray-600">
                          3 bed, 2 bath, 1,829 sqft
                        </p>
                        <p className="text-gray-600 pb-5">McKinney, TX 75071</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="py-10 m-auto flex items-center justify-center h-[400px] relative overflow-hidden"
            style={{ backgroundImage: "url('/landing/banner-2.jpg')" }}
          >
            <div className="absolute inset-0  backdrop-blur-sm"></div>
            <div className="container mx-auto text-center z-10">
              <div className="h-[100px]">
                <h3 className="text-2xl font-semibold mb-4">
                  The 10 Markets That Could See the Biggest Home Affordability
                  Gains as Mortgage Rates Drop
                </h3>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800">
                  Read Article
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white py-10 w-[80%] m-auto">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <Link
                href="/real_state/add-property"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-1.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className="w-full h-[230px] object-cover -mt-6"
                />

                <p className="text-gray-600 p-3 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/real_state/add-property"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-2.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className="w-full h-[230px] object-cover -mt-6"
                />

                <p className="text-gray-600 p-3 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/real_state/add-property"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-3.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className="w-full h-[230px] object-cover -mt-6"
                />

                <p className="text-gray-600 p-3 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
              <Link
                href="/real_state/add-property"
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/landing/section6-4.jpg"
                  alt="Home 1"
                  height={300}
                  width={300}
                  className="w-full h-[230px] object-cover -mt-6"
                />

                <p className="text-gray-600 p-3 text-sm">
                  Tired of Waiting for Lower Mortgage Rates? 4 Steps That...
                </p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
