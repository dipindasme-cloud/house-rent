import TextReveal from "../ui/TextReveal";
import Container from "../ui/Container";

export default function HeadlineSection() {
  return (
   <section className="w-full bg-background pt-26 pb-5 md:pt-29 md:pb-10 lg:pt-32">
      <Container>
        
        
<TextReveal 
  words="PROJECTS" 
  as="h1" 
  className="t-display-hero text-foreground" 
/>

      </Container>
    </section>
  );
}