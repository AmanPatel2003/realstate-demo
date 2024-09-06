import ExpertiseCard from "@/components/HealthCareComp/ExpertiseCard";
import Healthcare from "@/components/HealthCareComp/Healthcare";
import ImageSlider from "@/components/HealthCareComp/ImageSlider";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen ">
        <ImageSlider />
        <div className="">
          <h1 className="text-4xl my-10  font-medium text-center">
            Message From Our Chairman
          </h1>

          <div className="flex w-[70%] gap-5 m-auto mb-10 ">
            <Image
              src="/doctor.webp"
              alt="doctor"
              height={400}
              width={600}
            ></Image>
            <div className="">
              <span className="text-xl font-medium ">
                <p className="ml-5 w-full">
                  Back in the day, we realised that just as innovation in
                  medical science is elementary to the growth of healthcare, we
                  need to bring innovation in how we take quality healthcare to
                  everyone.
                </p>
                <p className="mt-4 ml-5 w-full">
                  We realised that it is not merely a transaction of health
                  services between a patient and doctor. It is trust that
                  fosters a healthy relationship in the journey of health.
                </p>
                <p className="mt-4 ml-5 w-full">
                  As we move with the times, we realise that technology has a
                  huge role in making our services way more efficient. And by
                  its application, way more human as well.
                </p>
                <p className="mt-4 ml-5 w-full">
                  We have a dream. Our dream is to be available to you round the
                  clock, wherever you are and whenever you want. We want to be
                  just one tap away from you, and this will be the beginning of
                  consumer-centric healthcare.
                </p>
              </span>
              <p className="text-xl text-gray-500 font-bold mt-10 ml-5">
                Take Care
              </p>
            </div>
          </div>
          <div className="">
            <ExpertiseCard />
            <Healthcare />
          </div>
        </div>
      </main>
    </div>
  );
}
