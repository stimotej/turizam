"use client";

import { contactEmail } from "@/lib/data/contact";
import { cn } from "@/lib/utils/cn";
import { useActionState } from "react";
import SubmitButton from "./submit-btn";

export default function ContactForm() {
  const [response, formAction] = useActionState(contactEmail, null);

  return (
    <>
      <form className="mt-6 space-y-4" action={formAction}>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-neutral-800">
            Vaše ime
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold text-neutral-800">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold text-neutral-800">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-0.5 p-2 rounded-md border border-neutral-300 transition-colors hover:border-neutral-800 focus:!border-(--primary) invalid:!border-red-500 outline-none"
          />
        </div>
        <SubmitButton>Pošalji</SubmitButton>
      </form>

      {response && !!response.message && (
        <p
          className={cn(
            "mt-4",
            response.success ? "text-green-600" : "text-red-600"
          )}
        >
          {response.message}
        </p>
      )}
    </>
  );
}
