import Image from "next/image";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      Performance Page
      <Image alt="image for performance page" src={performanceImg} />
    </div>
  );
}
