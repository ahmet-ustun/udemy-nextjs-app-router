import Image from "next/image";
import performanceImg from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <div>
      Performance Page
      <div className="absolute -z-10 inset-0">
        <Image
          alt="image for performance page"
          src={performanceImg}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
