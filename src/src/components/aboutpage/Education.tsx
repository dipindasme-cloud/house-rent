import Container from "@/components/ui/Container";

const education = {
  degree: "Bachelor of Design",
  school: "University of Creative Arts",
  period: "2019 — 2023",
  description:
    "Focused on UI/UX design, interaction design, and visual communication. Graduated with honours and developed a strong foundation in user-centered design methodologies.",
};

export default function Education() {
  return (
    <section className="w-full bg-background pb-8 sm:pb-12 lg:pb-16">
      <Container className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24">
        <div className="flex-1 w-full">
          <h2 id="education-title" className="t-heading text-foreground">
            Education
          </h2>
        </div>

        <div className="flex-1 w-full max-w-[42rem]">
          
           
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                <div className="flex-1">
                  <h3 className="t-subheading text-foreground">
                    B.Tech- Mechanical Engineering
                  </h3>
                  <p className="t-body-lg text-muted mt-1">
                    University of Kerala, India
                  </p>
                </div>
                <span className="t-label text-muted-400 shrink-0">
                  2014-2018
                </span>
              </div>
              <p className="t-body text-muted mt-4 md:mt-6 leading-relaxed">
                I developed strong analytical thinking and systematic problem-solving skills. I apply this engineering background to UI/UX design to build structured, intuitive, and user-centered digital experiences.
              </p>
            </div>
          
        
      </Container>
    </section>
  );
}
