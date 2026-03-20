import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem04() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/jeju/mk_3.png`}
        alt="제주3"
        fill
        className="min-[900px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/jeju/pk_3.png`}
        alt="제주3"
        fill
        className="object-fill hidden min-[900px]:block"
        priority
      />
    </div>
  );
}
