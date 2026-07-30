import Hero from "@/components/homepage/hero";
import ProjectGrid from "@/components/projectpage/ProjectGrid";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProjectGrid />
    </main>
  );
}
