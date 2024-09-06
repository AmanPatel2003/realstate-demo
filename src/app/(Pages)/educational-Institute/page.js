import IntroPage from "@/components/EducationalComp/landingPage/IntroPage";
import OurProgram from "@/components/EducationalComp/landingPage/OurProgram";
import Recognition from "@/components/EducationalComp/landingPage/Recognition";
import Recruiters from "@/components/EducationalComp/landingPage/Recruiters";
import Navbar from "@/components/EducationalComp/Navbar";

export default function Home() {
  return (
    <div>
      <IntroPage />
      <OurProgram />
      <Recognition />
      <Recruiters />
    </div>
  );
}
