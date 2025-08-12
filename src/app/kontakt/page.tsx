import ContactForm from "@/modules/contact/form";
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
            <dl className="flex items-center gap-x-8 gap-y-4 flex-wrap mt-4">
              <div>
                <dt className="text-neutral-800">Broj telefona</dt>
                <dd>
                  <a
                    className="text-(--primary) hover:underline"
                    href="tel:01/4593-861"
                  >
                    01/4593-861
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-800">Email</dt>
                <dd>
                  <a
                    className="text-(--primary) hover:underline"
                    href="mailto:turizam@sczg.hr"
                  >
                    turizam@sczg.hr
                  </a>
                </dd>
              </div>
            </dl>

            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
