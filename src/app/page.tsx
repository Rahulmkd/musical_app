import ChooseScroll from "@/components/ChooseScroll";
import FeaturedCards from "@/components/FeaturedCards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicalServiceTestimonial from "@/components/TestimonialCard";
import UpcamingWebinar from "@/components/UpcamingWebinar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black antialiased overflow-hidden">
      <div id="Hero">
        <HeroSection />
      </div>
      <div id="FeaturedCards">
        <FeaturedCards />
      </div>
      <div id="ChooseScroll">
        <ChooseScroll />
      </div>

      <div id="Music">
        <MusicalServiceTestimonial />
      </div>
      <div id="Webinar">
        <UpcamingWebinar />
      </div>
      <div id="Instructors">
        <Instructors />
      </div>

      <Footer />
    </main>
  );
}
