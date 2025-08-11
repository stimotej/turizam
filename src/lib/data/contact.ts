"use server";

import fetchApi from "../utils/api";

interface NewsletterResponse {
  success: boolean;
  message: string;
}

export async function contactEmail(
  _currentState: unknown,
  formData: FormData
): Promise<NewsletterResponse> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("website") as string;

  if (honeypot) {
    return {
      success: true,
      message: "Poruka je uspješno poslana! Hvala Vam!",
    };
  }

  if (
    !name ||
    !email ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return { success: false, message: "Neispravan unos" };
  }

  try {
    await fetchApi("/contact/submit", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    return {
      success: true,
      message: "Poruka je uspješno poslana! Hvala Vam!",
    };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      success: false,
      message:
        "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovno kasnije.",
    };
  }
}
