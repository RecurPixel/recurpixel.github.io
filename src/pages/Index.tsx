import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import BooksSection from "@/components/BooksSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PostsSection from "@/components/PostsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => (
  <>
    <Navbar />
    <main className="max-w-2xl mx-auto px-6">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <BooksSection />
      <PostsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
