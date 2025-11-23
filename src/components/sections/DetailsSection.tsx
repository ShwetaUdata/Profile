import { Card } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <section id="details" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">About Me</h2>
      <Card className="p-6 md:p-8 card-hover shadow-lg bg-gradient-to-br from-card to-secondary/30">
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Motivated developer skilled in <span className="text-primary font-semibold">JavaScript, React.js, Node.js, Express, and MySQL</span>. 
          Experienced in building scalable web applications and developing full-stack features. Hands-on with AWS services like 
          <span className="text-accent font-semibold"> Lambda, DynamoDB, API Gateway, S3, MQTT, and AWS IoT Core</span> for 
          real-time cloud integrations. Strong in problem-solving, code optimization, and creating reliable digital solutions.
        </p>
      </Card>
    </section>
  );
};

export default DetailsSection;
