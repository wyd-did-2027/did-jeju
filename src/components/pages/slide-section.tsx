import MainSlider from "../main-slider";
import type { Locale } from "@/lib/content";

export default function SliderSection({ locale = "kr" }: { locale?: Locale }) {
  return (
    <section
      id="home"
      className="w-full aspect-video max-[900px]:aspect-2/3 max-h-[calc(100vh-100px)] max-[900px]:max-h-[90vh]"
    >
      <MainSlider locale={locale} />
    </section>
  );
}
