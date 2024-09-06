
import PreferenceCenter from '@/components/PreferenceCenter'
import Link from 'next/link';
import React from 'react'
import { ImArrowLeft2 } from "react-icons/im";


const Page = () => {
  return (
    <div className='relative'>
     <Link href='/matrimonial/dashboard' >
     <div className='absolute top-14 left-24 text-center h-20 py-1'>
     <ImArrowLeft2 />
     </div>
     </Link>
      <PreferenceCenter/>
    </div>
  )
}

export default Page
