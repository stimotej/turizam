import { getPosts } from "@/lib/data/posts";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { cn } from "@/lib/utils/cn";
import { cjenikCategoryId, cjenikPostId } from "@/lib/utils/constants";
import DisplayHTML from "@/modules/common/components/display-html";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const cjenikPost = posts.find((post) => post.id === cjenikPostId);
  if (!cjenikPost) notFound();

  const title = clearHtmlFromString(cjenikPost.title.rendered);

  return {
    title: title,
  };
}

export default async function Home() {
  const posts = await getPosts();

  const cjenikPost = posts.find((post) => post.id === cjenikPostId);
  const cjenikPostsList = posts.filter((post) =>
    post.categories.includes(cjenikCategoryId)
  );

  if (!cjenikPost) notFound();

  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <h1 className="sr-only">
          {clearHtmlFromString(cjenikPost.title.rendered)}
        </h1>

        {cjenikPostsList.map((post, index) => (
          <Fragment key={post.id}>
            <DisplayHTML
              as="h2"
              html={clearHtmlFromString(post.title.rendered)}
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl text-center font-medium uppercase font-display",
                index !== 0 && "mt-32"
              )}
            />

            <DisplayHTML
              as="p"
              html={clearHtmlFromString(post.excerpt.rendered)}
              className="text-center mt-6 text-neutral-500"
            />

            <div className="flex flex-col md:flex-row gap-16 mt-16">
              {post.meta.rental_options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display uppercase">
                    {option.title}
                  </h3>
                  <p className="text-neutral-500 mt-6">{option.subtitle}</p>
                  <dl className="divide-y mt-12 font-semibold">
                    {option.items.map((optionItem, optionItemIndex) => (
                      <div
                        key={optionItemIndex}
                        className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start sm:justify-between md:justify-start gap-4 py-6 border-black/15"
                      >
                        <dt>{optionItem.title}</dt>
                        <dd className="sm:text-right md:text-left">
                          {optionItem.price}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </Fragment>
        ))}

        <DisplayHTML
          html={cjenikPost.content.rendered}
          className="text-neutral-500 mt-32"
        />
      </div>
    </main>
  );
}
