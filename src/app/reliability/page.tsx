import Image from "next/image";
import reliabilityImg from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <div>
      Reliability Page
      <Image alt="image for reliability page" src={reliabilityImg} />
    </div>
  );
}
