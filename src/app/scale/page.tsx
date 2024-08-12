import Image from "next/image";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      Scale Page
      <Image alt="image for scale page" src={scaleImg} />
    </div>
  );
}
