import Image from "next/image";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
  return (
    <div>
      Scale Page
      <div className="absolute -z-10 inset-0">
        <Image
          alt="image for scale page"
          src={scaleImg}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
