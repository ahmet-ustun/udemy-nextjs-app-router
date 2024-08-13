import Hero from "@/components/Hero";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="an image of welding metal"
      title="Super high reliability hosting"
    />
  );
}
