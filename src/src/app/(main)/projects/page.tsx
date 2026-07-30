import HeadlineSection from "@/components/projectpage/HeadlineSection";
import ProjectGrid from "@/components/projectpage/ProjectGrid";
export default function Home() {
  return (
    <main className="flex-1">
      <HeadlineSection />
      <ProjectGrid />
    </main>
  );
}