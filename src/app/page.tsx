import Image from "next/image";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <Image alt="image for home page" src={homeImg} />
    </div>
  );
}
