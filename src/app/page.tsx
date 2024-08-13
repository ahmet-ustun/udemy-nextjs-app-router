import Hero from "@/components/Hero";
import homeImg from "public/home.jpg";

export default function Homepage() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="an image of a car factory"
      title="Professional Cloud Hosting"
    />
  );
}
