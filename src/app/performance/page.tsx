import Hero from "@/components/Hero";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="an image of welding metal"
      title="We serve high performance applications"
    />
  );
}
