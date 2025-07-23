import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cjenik",
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <h1 className="sr-only">Cjenik</h1>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display text-center uppercase">
              DVOKREVETNE SOBE
            </h2>
            <p className="text-neutral-500 mt-6">s kupaonicom i kuhinjom</p>
            <dl className="divide-y mt-12 font-semibold">
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>1 noćenje</dt>
                <dd>15€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>2 noćenje</dt>
                <dd>30€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>5 noćenje</dt>
                <dd>60€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>7 noćenje</dt>
                <dd>90€</dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display text-center uppercase">
              DVOKREVETNE SOBE
            </h2>
            <p className="text-neutral-500 mt-6">
              sa zajedničkom kupaonicom i čajnom kuhinjom na katu
            </p>
            <dl className="divide-y mt-12 font-semibold">
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>1 noćenje</dt>
                <dd>15€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>2 noćenje</dt>
                <dd>30€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>5 noćenje</dt>
                <dd>60€</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-6 border-black/15">
                <dt>7 noćenje</dt>
                <dd>90€</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
