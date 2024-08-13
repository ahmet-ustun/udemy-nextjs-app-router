import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="an image of a steel factory"
      title="Scale your app to infinity"
    />
  );
}
