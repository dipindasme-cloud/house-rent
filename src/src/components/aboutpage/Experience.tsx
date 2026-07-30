import Container from "@/components/ui/Container";

const experience = {
  role: "UI/UX Designer",
  company: "Tech Studio",
  period: "2023 — Present",
  description:
    "Designing and shipping user-centered digital products — from wireframes to high-fidelity prototypes. Collaborating closely with developers to ensure pixel-perfect implementation and cohesive brand experiences.",
};

export default function Experience() {
  return (
    <section className="w-full bg-background pb-8 sm:pb-12 lg:pb-16">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        <div className="flex-1 w-full">
          <h2 className="t-heading text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="flex-1 w-full max-w-[42rem]">
         
            
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                <div className="flex-1">
                  <h3 className="t-subheading text-foreground">
                    UI/UX Designer Internship
                  </h3>
                  <p className="t-body-lg text-muted mt-1">
                    Srishti Innovative, Trivandrum, Kerala
                  </p>
                </div>
                <span className="t-label text-muted-400 shrink-0">
                  2025-2026
                </span>
              </div>
              <p className="t-body text-muted mt-4 md:mt-6 leading-relaxed">
                Worked on web and mobile projects where I translated real user needs into practical, intuitive design solutions. Developed a strong foundation in user-centered design methodologies and end-to-end interface creation.
              </p>
            </div>
          
      </Container>
    </section>
  );
}
