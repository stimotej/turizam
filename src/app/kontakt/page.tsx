import Button from "@/modules/common/components/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <div className="flex flex-col-reverse md:flex-row gap-16">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11125.55685322405!2d15.966421!3d45.80346300000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f1d72ccf99%3A0x31b9def86283148e!2sSavska%20cesta%2025%2C%2010000%2C%20Zagreb%2C%20Hrvatska!5e0!3m2!1shr!2sus!4v1753272503957!5m2!1shr!2sus"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold font-display uppercase">
              KONTAKTIRAJTE NAS
            </h1>

            <p className="text-neutral-500 mt-4">Veselimo se Vašoj posjeti</p>
            <p className="text-neutral-500 mt-4">Sveučilište u Zagrebu</p>
            <p className="text-neutral-500">Studentski centar u Zagrebu</p>
            <p className="text-neutral-500 mt-4">
              Savska cesta 25, 10 000 Zagreb,
            </p>
            <p className="text-neutral-500">Hrvatska</p>
            <p className="text-neutral-800 mt-4">Broj telefona</p>
            <p className="text-neutral-500">01/4593-671</p>

            <form className="mt-6 space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="font-semibold text-neutral-800"
                >
                  Vaše ime
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="font-semibold text-neutral-800"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="font-semibold text-neutral-800"
                >
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
                />
              </div>
              <Button className="w-full" type="submit">
                Pošalji
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
