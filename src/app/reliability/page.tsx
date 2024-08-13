import Image from "next/image";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      Reliability Page
      <div className="absolute -z-10 inset-0">
        <Image
          alt="image for reliability page"
          src={reliabilityImg}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
