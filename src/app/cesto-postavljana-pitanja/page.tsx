import { getPosts } from "@/lib/data/posts";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { faqCategoryId } from "@/lib/utils/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/common/components/accordion";
import DisplayHTML from "@/modules/common/components/display-html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Često postavljana pitanja",
};

export default async function Home() {
  const posts = await getPosts();

  const faqPostsList = posts.filter((post) =>
    post.categories.includes(faqCategoryId)
  );

  return (
    <main className="max-w-6xl mx-auto bg-(--background) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 border-y border-neutral-200 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-center">
          Često postavljana pitanja
        </h1>
        <Accordion type="multiple" className="w-full mt-12">
          {faqPostsList.map((post) => (
            <AccordionItem key={post.id} value={post.id.toString()}>
              <AccordionTrigger>
                <DisplayHTML html={clearHtmlFromString(post.title.rendered)} />
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <DisplayHTML html={post.content.rendered} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
