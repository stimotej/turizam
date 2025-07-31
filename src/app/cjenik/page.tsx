import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cjenik",
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <h1 className="sr-only">Cjenik</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium uppercase font-display">
          SD “STJEPAN RADIĆ“
        </h2>
        <p className="text-center mt-6 text-neutral-500">
          Cijene izražene: po noći i osobi
        </p>
        <div className="flex flex-col md:flex-row gap-16 mt-16">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display uppercase">
              DVOKREVETNE SOBE
            </h3>
            <p className="text-neutral-500 mt-6">s kupaonicom i kuhinjom</p>
            <dl className="divide-y mt-12 font-semibold">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-black/15">
                <dt>NOĆENJE U DVOKREVETNOJ SOBI</dt>
                <dd className="whitespace-nowrap">23,00 €</dd>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start sm:justify-between md:justify-start gap-4 py-6 border-black/15">
                <dt>DODATNE USLUGE</dt>
                <dd className="sm:text-right md:text-left">
                  Kada se dvokrevetna soba koristi kao jednokrevetna, cijena
                  iznosi 28,00 €
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display uppercase">
              DVOKREVETNE SOBE
            </h3>
            <p className="text-neutral-500 mt-6">
              sa zajedničkom kupaonicom i čajnom kuhinjom na katu
            </p>
            <dl className="divide-y mt-12 font-semibold">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-black/15">
                <dt>NOĆENJE U DVOKREVETNOJ SOBI</dt>
                <dd className="whitespace-nowrap">18,00 €</dd>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start sm:justify-between md:justify-start gap-4 py-6 border-black/15">
                <dt>DODATNE USLUGE</dt>
                <dd className="sm:text-right md:text-left">
                  Kada se dvokrevetna soba koristi kao jednokrevetna, cijena
                  iznosi 23,00 €
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium uppercase font-display mt-32">
          SD “CVJETNO NASELJE“
        </h2>
        <p className="text-center mt-6 text-neutral-500">
          Cijene izražene: po noći i osobi
        </p>
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display uppercase">
            DVOKREVETNE SOBE
          </h3>
          <p className="text-neutral-500 mt-6">s kupaonicom</p>
          <dl className="divide-y mt-12 font-semibold">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-black/15">
              <dt>NOĆENJE U DVOKREVETNOJ SOBI</dt>
              <dd className="whitespace-nowrap">23,00 €</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-black/15">
              <dt>DODATNE USLUGE</dt>
              <dd className="sm:text-right">
                Kada se dvokrevetna soba koristi kao jednokrevetna, cijena
                iznosi 28,00 €
              </dd>
            </div>
          </dl>
        </div>

        <p className="text-neutral-500 mt-32">
          Boravišna pristojba i obavezna taksa osiguranja nisu uključene u
          cijenu. Visina boravišne pristojbe iznosi 1,86€ osoba/noć. Visina
          takse osiguranja iznosi 0,13€ osoba/noć.
        </p>
        <p className="text-neutral-500 mt-4">
          U sve iskazane cijene uključen je PDV.
        </p>
      </div>
    </main>
  );
}
