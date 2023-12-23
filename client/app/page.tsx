import HeroSection from "@/app/components/HeroSection";
import Separator from "@/app/components/Separator";
import FirstSection from "@/app/components/FirstSection";
import SecondSection from "@/app/components/SecondSection";
import ThirdSection from "@/app/components/ThirdSection";
import FourthSection from "@/app/components/FourthSection";
import QuestionSection from "@/app/components/QuestionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Separator />
      <FirstSection />
      <Separator />
      <SecondSection />
      <Separator />
      <ThirdSection />
      <Separator />
      <FourthSection />
      <Separator />
      <QuestionSection />
    </>
  );
}
