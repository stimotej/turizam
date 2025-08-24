import { getPosts } from "@/lib/data/posts";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { cn } from "@/lib/utils/cn";
import { smjestajCategoryId, smjestajPostId } from "@/lib/utils/constants";
import { buttonClassName } from "@/modules/common/components/button";
import DisplayHTML from "@/modules/common/components/display-html";
import {
  PhotoProvider,
  PhotoView,
} from "@/modules/common/components/photo-view";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getPosts();
  const smjestajPost = posts.find((post) => post.id === smjestajPostId);
  if (!smjestajPost) notFound();

  const title = clearHtmlFromString(smjestajPost.title.rendered);

  return {
    title: title,
  };
}

export default async function Home() {
  const posts = await getPosts();

  const smjestajPost = posts.find((post) => post.id === smjestajPostId);
  const smjestajPostsList = posts.filter((post) =>
    post.categories.includes(smjestajCategoryId)
  );

  if (!smjestajPost) notFound();

  return (
    <main className="max-w-6xl mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-8 md:py-10 lg:py-14 min-h-[80vh]">
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <DisplayHTML
          html={clearHtmlFromString(smjestajPost.title.rendered)}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-center"
          as="h1"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {smjestajPostsList.map((post) => (
            <figure key={post.id}>
              <Image
                src={post.image_url}
                alt={clearHtmlFromString(post.title.rendered)}
                width={700}
                height={256}
                className="w-full h-64 object-cover"
              />
              <DisplayHTML
                as="figcaption"
                html={clearHtmlFromString(post.title.rendered)}
                className="text-neutral-500 text-center mt-2"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16 mt-24">
        {smjestajPostsList.map((post, index) => (
          <div
            key={post.id}
            className={cn(
              "flex flex-col lg:flex-row gap-8",
              index !== 0 && "mt-16"
            )}
          >
            <div>
              <DisplayHTML
                as="h2"
                html={clearHtmlFromString(post.title.rendered)}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display uppercase"
              />

              <a
                href="https://turizam.sczg.hr/hostel"
                className={cn(buttonClassName, "mt-12 mx-auto")}
              >
                REZERVIRAJ
              </a>
              <DisplayHTML
                html={post.content.rendered}
                documents={post.meta.documents}
                className="text-neutral-500 mt-12"
              />
            </div>
            <div className="lg:min-w-96">
              <PhotoProvider maskOpacity={0.8}>
                <div className="grid grid-cols-2 gap-4">
                  {post.meta.images.map((img, index) => (
                    <PhotoView key={index} src={img}>
                      <div
                        className={cn(
                          index === 0 ? "col-span-2" : "col-span-1",
                          "overflow-hidden"
                        )}
                      >
                        <Image
                          src={img}
                          alt={clearHtmlFromString(post.title.rendered)}
                          width={440}
                          height={192}
                          className="w-full h-48 object-cover transition-transform hover:scale-110 cursor-pointer"
                        />
                      </div>
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
              {!!post.meta.lokacija && (
                <DisplayHTML
                  html={post.meta.lokacija}
                  className="border-0 mt-6"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
