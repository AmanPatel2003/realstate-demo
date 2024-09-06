'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { SlBell } from "react-icons/sl";

const Page = () => {

    const [showModal, setShowModal] = useState(false)

    const stories = [
        {
            id: 1,
            image: 'https://imagecdn.jeevansathi.com/53344/12/1066892719-1725030144.jpg',
           
            name: 'Nitin Bhagwani ~ Payal Sachdeva',
            description: 'Firstly I want to thank this platform (JS), as I had found my partner via your platform. I have been searching since 2020 but I was disheartened, but suddenly at...',
            link: '#',
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/ac/84/b1/ac84b110731961f3e64d59190413dce0.jpg',
            name: 'Neelesh Vishwakarma ~ Jimi Singh',
            description: '❤️ I found my soul-mate through Jeevansathi.com.',
            link: '#',
        },
        {
            id: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1P4dhuPQ8RSYjc4Ef5U23T9PRxBtFh5BLA&s',
            name: 'Lova Raju ~ Gantyada Saraswati',
            description: 'This is a great app to find the perfect match. Thanks to Jeevansathi.com',
            link: '#',
        },
        {
            id: 4,
            image: 'https://imagecdn.jeevansathi.com/53319/8/1066388881-1724909924.jpg',
            name: 'Porus Bhagwat ~ Rutuja Gumas',
            description: 'I found my suitable match here. I am happy and thankful to Jeevansathi.com',
            link: '#',
        },
        {
            id: 5,
            image: 'https://imagecdn.jeevansathi.com/53319/5/1066385021-1724909204.jpg',
            name: 'Shubham Pathak ~ Richa Sharma',
            description: 'We found a perfect match for our sister as per our expectations. I would like to thank Jeevansathi.com. Marriage is done in July. Both are living happily and...',
            link: '#',
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/564x/9b/cb/1f/9bcb1f30e6e2974faa8d59847979abd1.jpg',
            name: 'Sahil Sharma ~ Palak Sharma',
            description: 'He is very loving and caring. Thanks to Jeevansathi.com',
            link: '#',
        },
    ];

    const handlemodal = () => {
        // console.log('point')
        setShowModal(!showModal)
    }

    return (
        <>

            <div className="bg-gray-100 min-h-screen ">
                {/* Header Section */}
                <header className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5a8341d74c0dbfe48dba9903/1550884275730-NMXOP1CNZ5K3GWKK6N2C/tips-young-married-couples.jpeg')` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-50"></div>
                    <div className="relative z-10 pt-4 ">
                        <div className='flex items-center justify-between  bg-[#384d64]/50 mx-64 h-12'>
                            <div className='text-pink-500 bg-white h-full w-32 flex items-center justify-center'>
                               <h1 className='text-xl font-semibold'> Soul Match</h1>
                            </div>
                            <nav className="space-x-4 flex">
                                <div className="text-white">MATCHES</div>
                                <div className="text-white">ACTIVITY</div>
                                <Link href='/preference'>
                                    <div className="text-white">PREWFERENCE</div>
                                </Link>

                                <Link href='/upgrade_plans'>
                                    <div className="text-white">UPGRADE</div>
                                </Link>

                                <div className="text-white">HELP</div>
                            </nav>
                            <div className="flex items-center space-x-3">
                                
                                <div className="text-white">
                                    <i onClick={handlemodal} className="fas fa-bell cursor-pointer "><SlBell /></i>
                                </div>


                                <div className="relative ">
                                    <div className="absolute  top-3">
                                        {/* <div className="cursor-pointer" onClick={toggleDropdown}>
                                            <FaBell size={22} />
                                        </div> */}

                                        {showModal && (
                                            <div className="absolute right-0 mt-2 w-96 z-50   bg-white shadow-2xl rounded-lg  px-4 py-4">
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2 border-b border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            {" "}
                                                            22, August, 2024
                                                        </h1>
                                                        <h1 className="text-[#FF0000] font-semibold text-sm">
                                                            Your consent for email address has expired. Reconsent
                                                            to continue with service experience.
                                                        </h1>
                                                    </div>
                                                </Link>
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2 border-b border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            {" "}
                                                            22, August, 2024
                                                        </h1>
                                                        <h1 className="text-gray-600 font-semibold text-sm ">
                                                            Your account balance is now ₹ 15,250.00.
                                                        </h1>
                                                    </div>
                                                </Link>
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2 border-b border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            {" "}
                                                            23,August,2024
                                                        </h1>
                                                        <h1 className="text-[#FF0000] font-semibold text-sm">
                                                            Your consent for CIBL report processing has expired.
                                                            Reconsent to continue with service experience
                                                        </h1>
                                                    </div>
                                                </Link>
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2 border-b border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            {" "}
                                                            23,August,2024
                                                        </h1>
                                                        <h1 className="text-gray-600 font-semibold text-sm">
                                                            Transaction Alert: ₹ 5000.00 has been withdrawn from
                                                            your account ending in 1234.
                                                        </h1>
                                                    </div>
                                                </Link>
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2 border-b border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            {" "}
                                                            23,August,2024
                                                        </h1>
                                                        <h1 className="text-[#FF0000] font-semibold text-sm">
                                                            Your consent for mobile number has expired. Reconsent
                                                            to continue wit service experience.
                                                        </h1>
                                                    </div>
                                                </Link>
                                                <Link href="/trust-bank/preference-center">
                                                    <div className="p-2  border-gray-400 cursor-pointer">
                                                        <h1 className="text-gray-500 font-normal text-xs">
                                                            24,August,2024
                                                        </h1>
                                                        <h1 className="text-gray-600 font-semibold text-sm">
                                                            Your account balance is now ₹ 10,250.00.
                                                        </h1>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>



                                <div className="text-white pr-4">
                                    <Link href='/user_profile'>
                                        <i className="fas fa-user-circle "><LuUserCircle2 /></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative  text-white text-center mt-16">
                        <h1 className="text-4xl font-semibold">More than 204,123 Success Stories and counting</h1>
                        <p className="mt-4 max-w-xl mx-auto">
                            As our numerous success stories prove, marriages are really made at Jeevansathi.com. Here's wishing all our members who found their ideal partner here a lifetime of happiness!
                        </p>
                        <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded">Send us your success story</button>
                    </div>
                </header>

                {/* Year Navigation */}
                <div className="flex justify-center mt-8  relative ">
                    <button className="px-4 py-2 bg-gray-300">{"<"}</button>
                    <div className="flex space-x-4 overflow-x-auto">
                        {Array.from({ length: 9 }, (_, i) => 2024 - i).map(year => (
                            <button key={year} className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-200">
                                {year}
                            </button>
                        ))}
                    </div>
                    <button className="px-4 py-2 bg-gray-300">{">"}</button>
                </div>

                {/* Success Stories */}
                <section className="max-w-7xl mx-auto px-6 mt-10">
                    {/* <h2 className="text-xl font-semibold mb-4">Jeevansathi Success Stories - Year 2024</h2> */}
                    <section className="py-8 bg-gray-100">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                Jeevansathi Success Stories - Year 2024
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {stories.map((story) => (
                                    <div
                                        key={story.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden"
                                    >
                                        <Image
                                            src={story.image}
                                            alt={story.name}
                                            className="w-96 h-48 object-center"
                                            width={4000}
                                            height={4000}
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800 truncate">
                                                {story.name}
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-600">{story.description}</p>
                                            <a
                                                href={story.link}
                                                className="text-blue-600 hover:text-blue-800 text-sm mt-4 block"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </section>
            </div>

            <footer className="bg-gray-800 text-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Explore</h4>
                            <ul>
                                <li><a href="#" className="hover:text-white">Home</a></li>
                                <li><a href="#" className="hover:text-white">Advanced search</a></li>
                                <li><a href="#" className="hover:text-white">Success stories</a></li>
                                <li><a href="#" className="hover:text-white">Sitemap</a></li>
                                <li><a href="#" className="hover:text-white">Create Horoscope</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Services</h4>
                            <ul>
                                <li><a href="#" className="hover:text-white">Membership Options</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Help</h4>
                            <ul>
                                <li><a href="#" className="hover:text-white">Contact us</a></li>
                                <li><a href="#" className="hover:text-white">Jeevansathi centers (32)</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-semibold text-white">Legal</h4>
                            <ul>
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Fraud Alert</a></li>
                                <li><a href="#" className="hover:text-white">Terms of use</a></li>
                                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                                <li><a href="#" className="hover:text-white">Cookie policy</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Features</a></li>
                                <li><a href="#" className="hover:text-white">Summons/Notices</a></li>
                                <li><a href="#" className="hover:text-white">Grievances</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="space-x-4">
                            {/* <a ><Image src="/images/android.png" alt="Google Play" className="h-8" /></a>
                            <a ><Image src="/images/apple.png" alt="App Store" className="h-8" /></a> */}
                        </div>
                        <div className="space-x-4 text-white">
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-google-plus-g"></i></a>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                        <p>Partner Sites</p>
                        <div className="mt-2 flex justify-center space-x-6">
                            <a href="#" className="hover:text-white">99acres.com</a>
                            <a href="#" className="hover:text-white">Naukri.com</a>
                            <a href="#" className="hover:text-white">NaukriGulf.com</a>
                        </div>
                        <p className="mt-4">© 2016 Jeevansathi Internet Services. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Page
