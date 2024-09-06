
import CustomCarousel from "@/components/matrimonialComp/Crousel";
import Find from "@/components/matrimonialComp/Find";
import Introducing from "@/components/matrimonialComp/Introducing";
import MembershipPlans from "@/components/matrimonialComp/MembershipPlans ";
import MyApp from "@/components/matrimonialComp/MyApp ";
import NavBar from "@/components/matrimonialComp/NavBar";
import Profile from "@/components/matrimonialComp/Profile";
import FeaturesSection from "@/components/matrimonialComp/FeaturesSection";
import Image from "next/image";
import Footer from "@/components/matrimonialComp/Footer";


export default function Home() {
  return (
    <div className=" h-screen ">
      <div className="relative ">
        <Image
          src="/photo1.png"
          alt="image"
          width={1600}
          height={1}
          className=" w-full h-[85vh] -z-50"
        />
        <div className="absolute z-50 top-0 ">
          <NavBar />
          <FeaturesSection />
          <Find />
          <MembershipPlans />
          <Introducing />
          <CustomCarousel />
          <MyApp />
          <Profile />
          <Footer />
        </div>
      </div>
    </div>
  );
}
