import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[90vw] p-10 shado  flex flex-col items-center">
          <Image
            src="/image/perfios-logo.jpg"
            alt="perfios logo"
            width={180}
            height={40}
            className=" mb-4"
          />
          <h1 className="text-5xl font-bold text-center">
            CONSENT MANAGEMENT DEMO
          </h1>
          <p className="text-2xl text-center font-medium text-blue-600 mt-5 mb-4">
            Select business vertical
          </p>
          <div className="flex mt-5 gap-10 w-full items-center justify-center">
            <div className=" flex flex-col items-center justify-center w-40 h-52">
              <Link href="/real_state" className="">
                <Image
                  src="/logo.webp"
                  alt="banking img"
                  height={440}
                  width={440}
                  className="h-full w-full rounded-full"
                />
              </Link>
              <h2 className="text-xl font-semibold mt-6">Real State</h2>
            </div>
            <div className=" flex flex-col items-center justify-center w-40 h-52">
              <Link href="/educational-Institute" className="">
                <Image
                  src="/image/logo.png"
                  alt="banking img"
                  height={240}
                  width={240}
                  className="rounded-full shadow-2xl"
                />
              </Link>
              <h2 className="text-xl font-semibold mt-6">University</h2>
            </div>
            <div className=" flex flex-col items-center justify-center w-40 h-52">
              <Link href="/health_care" className="">
                <Image
                  src="/image/healthCare.webp"
                  alt="banking img"
                  height={240}
                  width={240}
                  className="rounded-full"
                />
              </Link>
              <h2 className="text-xl font-semibold mt-6">Health Care</h2>
            </div>
            <div className=" flex flex-col items-center justify-center w-40 h-52">
              <Link href="/matrimonial" className="">
                <Image
                  src="/image/matrimonial.webp"
                  alt="e-commerce image"
                  height={240}
                  width={240}
                  className="rounded-full"
                />
              </Link>
              <h2 className="text-xl font-semibold mt-6">Matrimonial</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
