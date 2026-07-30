import AboutMeSection from "@/components/aboutpage/AboutMeSection";
import SkillsAndAwards from "@/components/aboutpage/SkillsAndAwards";
import Experience from "@/components/aboutpage/Experience";
import Education from "@/components/aboutpage/Education";

export default function Home() {
  return (
    <main className="flex-1">
      <AboutMeSection />
      <Experience />
      <Education />
      <SkillsAndAwards />
    </main>
  );
}