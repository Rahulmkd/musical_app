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
      <HeroSection />
      <FeaturedCards />
      <ChooseScroll />
      <MusicalServiceTestimonial />
      <UpcamingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
