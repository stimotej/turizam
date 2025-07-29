import { cn } from "@/lib/utils/cn";
import {
  cvjetnoNaseljeImages,
  stjepanRadicImages,
} from "@/lib/utils/constants";
import { buttonClassName } from "@/modules/common/components/button";
import {
  PhotoProvider,
  PhotoView,
} from "@/modules/common/components/photo-view";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Smještaj",
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-center">
          Smještaj
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <figure>
            <Image
              src="/turizam/stjepan-radic.webp"
              alt='SD "Stjepan Radić"'
              width={700}
              height={256}
              className="w-full h-64 object-cover"
            />
            <figcaption className="text-neutral-500 text-center mt-2">
              SD &quot;Stjepan Radić&quot;
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/turizam/cvjetno-naselje.webp"
              alt='SD "Cvjetno naselje"'
              width={700}
              height={256}
              className="w-full h-64 object-cover"
            />
            <figcaption className="text-neutral-500 text-center mt-2">
              SD &quot;Cvjetno naselje&quot;
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16 mt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display uppercase">
              SD &quot;STJEPAN RADIĆ&quot;
            </h2>
            <a
              href="https://turizam.sczg.hr/hostel"
              className={cn(buttonClassName, "mt-12 mx-auto")}
            >
              REZERVIRAJ
            </a>
            <p className="text-neutral-500 mt-12">
              Studentski dom &quot;Stjepan Radić&quot; smješten je na
              atraktivnoj i prometno povezanoj lokaciji u zapadnom dijelu
              Zagreba, uz rijeku Savu i u blizini brojnih sportskih i
              rekreativnih sadržaja.
            </p>
            <p className="text-neutral-500">
              Jedan je od najvećih smještajnih kompleksa u gradu i tijekom
              ljetnih mjeseci nudi kvalitetan i povoljan smještaj turistima,
              sportskim ekipama, sudionicima konferencija i svim posjetiteljima
              Zagreba.
            </p>
            <p className="text-neutral-500 mt-4">
              U neposrednoj blizini nalaze se Sportski park Mladost, Savski
              nasip, Hipodrom (3 km) i park Bundek (3,5 km). Popularno izletište
              Jarun, s brojnim sadržajima poput plivanja, veslanja, trčanja i
              rolanja, udaljeno je oko 1 km. Botanički vrt je desetak minuta
              vožnje, a Trg bana Josipa Jelačića i Zagrebačka katedrala dostupni
              su tramvajem za manje od 15 minuta.
            </p>
            <p className="text-neutral-500 mt-4">
              Dom nudi dvije vrste dvokrevetnih soba – s vlastitom kupaonicom i
              kuhinjom te sobe koje dijele zajedničku kupaonicu i čajnu kuhinju
              na katu. Sve sobe imaju besplatan Wi-Fi, a gostima su na
              raspolaganju 24-satna recepcija i dodatni sadržaji. U blizini se
              nalaze trgovine, pekarnice i stanice javnog prijevoza.
            </p>
            <p className="text-neutral-500 mt-4">
              Smještaj se plaća isključivo online putem službenog sustava
              Studentskog centra.
            </p>
            <p className="text-neutral-500">
              Sve informacije o cijenama i uvjetima dostupne su ovdje: Cjenik
              smještaja, a detalji o načinu plaćanja prikazani su prilikom
              potvrde rezervacije.
            </p>
          </div>
          <div className="lg:min-w-96">
            <PhotoProvider maskOpacity={0.8}>
              <div className="grid grid-cols-2 gap-4">
                {stjepanRadicImages.map((img, index) => (
                  <PhotoView key={img.src} src={img.src}>
                    <div
                      className={cn(
                        index === 0 ? "col-span-2" : "col-span-1",
                        "overflow-hidden"
                      )}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={440}
                        height={192}
                        className="w-full h-48 object-cover transition-transform hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11129.235974995849!2d15.947312000000002!3d45.785037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6a1c234eea3%3A0x7a28902ac4bfc0eb!2sJarunska%20ul.%202%2C%2010000%2C%20Zagreb%2C%20Hrvatska!5e0!3m2!1shr!2sus!4v1753290771209!5m2!1shr!2sus"
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 mt-6"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display uppercase">
              SD &quot;CVJETNO NASELJE&quot;
            </h2>
            <a
              href="https://turizam.sczg.hr/hostel"
              className={cn(buttonClassName, "mt-12 mx-auto")}
            >
              REZERVIRAJ
            </a>
            <p className="text-neutral-500 mt-12">
              Studentski dom &quot;Cvjetno naselje&quot; smješten je u mirnoj i
              zelenoj četvrti Trnje, južno od centra Zagreba. Tijekom ljetnih
              mjeseci nudi ugodan i povoljan smještaj za turiste, sportske
              ekipe, sudionike konferencija i sve posjetitelje koji traže
              funkcionalan boravak u glavnom gradu Hrvatske. Sklad
              funkcionalnosti, jednostavnosti i izvrsne lokacije čini ga
              idealnim izborom za opušteno istraživanje Zagreba.
            </p>
            <p className="text-neutral-500 mt-4">
              U blizini doma nalazi se Savski nasip, Hipodrom (1,2 km),
              Zagrebački Velesajam (1,3 km) te Muzej suvremene umjetnosti (MSU).
              Park Bundek, popularno gradsko jezero s uređenim stazama i roštilj
              zonama, udaljen je svega 2 km. Za kupovinu i zabavu tu je Avenue
              Mall s brojnim trgovinama, restoranima i kinom. Do Trga bana
              Josipa Jelačića moguće je stići tramvajem za manje od 10 minuta.
            </p>
            <p className="text-neutral-500 mt-4">
              Dom nudi dvokrevetne sobe s vlastitom kupaonicom te mogućnost
              korištenja čajne kuhinje na svakom drugom katu. Sve sobe imaju
              besplatan Wi-Fi, a gostima su na raspolaganju i dodatni sadržaji.
              Recepcija radi 24 sata, a u neposrednoj blizini nalaze se
              trgovine, pekarnice i stanice javnog prijevoza.
            </p>
            <p className="text-neutral-500 mt-4">
              Smještaj se plaća isključivo online putem službenog sustava
              Studentskog centra.
            </p>
            <p className="text-neutral-500">
              Sve informacije o cijenama i uvjetima smještaja dostupne su ovdje:
              Cjenik smještaja. Detalji o plaćanju prikazuju se prilikom potvrde
              rezervacije.
            </p>
          </div>
          <div className="lg:min-w-96">
            <PhotoProvider maskOpacity={0.8}>
              <div className="grid grid-cols-2 gap-4">
                {cvjetnoNaseljeImages.map((img, index) => (
                  <PhotoView key={img.src} src={img.src}>
                    <div
                      className={cn(
                        index === 0 ? "col-span-2" : "col-span-1",
                        "overflow-hidden"
                      )}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={440}
                        height={192}
                        className="w-full h-48 object-cover transition-transform hover:scale-110 cursor-pointer"
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11127.853793669889!2d15.961648000000002!3d45.79196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d68e7220872d%3A0x399c090b2851dd28!2sOdranska%20ul.%208%2C%2010000%2C%20Zagreb%2C%20Hrvatska!5e0!3m2!1shr!2sus!4v1753291425899!5m2!1shr!2sus"
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 mt-6"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
