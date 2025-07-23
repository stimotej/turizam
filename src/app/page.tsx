import { cn } from "@/lib/utils/cn";
import { buttonClassName } from "@/modules/common/components/button";
import Image from "next/image";
import Link from "next/link";
import {
  PhotoProvider,
  PhotoView,
} from "@/modules/common/components/photo-view";
import { homepageImages } from "@/lib/utils/constants";

export default function Home() {
  return (
    <main className="max-w-[1520px] mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <Image
          alt="Studentski Centar u Zagrebu"
          src="/hero.webp"
          width={730}
          height={270}
          className="mx-auto object-cover w-full h-auto max-w-[730px]"
        />
        <Link href="/smjestaj" className={cn(buttonClassName, "mx-auto mt-16")}>
          REZERVIRAJ SMJEŠTAJ
        </Link>
        <div className="text-center mt-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase font-display">
            REZERVACIJE
          </h1>
          <p className="text-base md:text-lg text-neutral-500 mt-2">
            Registracije potvrđujemo u roku od jednog dana
          </p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium">
              Dobrodošli u SC Hostel!{" "}
            </h2>
            <p className="text-neutral-500 mt-2">Vaš odmor u stilu</p>
          </div>
          <p className="flex-1 text-neutral-500">
            Tijekom ljetnih mjeseci Studentski centar u Zagrebu nudi udoban i
            povoljan turistički smještaj u studentskim domovima SD &quot;Stjepan
            Radić&quot; i SD &quot;Cvjetno naselje&quot;. Idealno za putnike,
            grupe i sve koji traže praktičan boravak blizu centra grada po
            pristupačnijim cijenama.
          </p>
        </div>
        <PhotoProvider maskOpacity={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {homepageImages.map((img) => (
              <PhotoView key={img.src} src={img.src}>
                <div className="overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={700}
                    height={256}
                    className="w-full h-64 object-cover transition-transform hover:scale-110 cursor-pointer"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <Link href="/smjestaj" className={cn(buttonClassName, "mx-auto mt-16")}>
          REZERVIRAJ SMJEŠTAJ
        </Link>
      </div>
    </main>
  );
}
