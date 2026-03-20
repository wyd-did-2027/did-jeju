import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem00() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/jeju/mk_1.png`}
        alt="제주1"
        fill
        className="min-[900px]:hidden block object-fill"
        priority
      />
      <Image
        src={`${R2_URL}/jeju/pk_1.png`}
        alt="제주1"
        fill
        className="object-fill hidden min-[900px]:block"
        priority
      />
    </div>
  );
}
