import { cn } from "@/lib/utils/cn";
import { buttonClassName } from "@/modules/common/components/button";
import Image from "next/image";
import Link from "next/link";
import {
  PhotoProvider,
  PhotoView,
} from "@/modules/common/components/photo-view";
import { pocetnaPostId } from "@/lib/utils/constants";
import { getPosts } from "@/lib/data/posts";
import { notFound } from "next/navigation";
import DisplayHTML from "@/modules/common/components/display-html";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";

export default async function Home() {
  const posts = await getPosts();

  const homepagePost = posts.find((post) => post.id === pocetnaPostId);

  if (!homepagePost) notFound();

  return (
    <main className="max-w-[1520px] mx-auto bg-(--primary) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16 min-h-[80vh]">
      <h1 className="sr-only">SC HOSTEL</h1>

      <div className="bg-(--background) px-4 md:px-6 lg:px-10 py-10 md:py-12 lg:py-16">
        <Image
          alt="Studentski Centar u Zagrebu"
          src={homepagePost.image_url}
          width={730}
          height={270}
          className="mx-auto object-cover w-full h-auto max-w-[730px]"
        />
        <Link href="/smjestaj" className={cn(buttonClassName, "mx-auto mt-16")}>
          REZERVIRAJ SMJEŠTAJ
        </Link>
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <DisplayHTML
              html={clearHtmlFromString(homepagePost.title.rendered)}
              className="text-2xl md:text-3xl lg:text-4xl font-display font-medium"
              as="h2"
            />

            <DisplayHTML
              html={clearHtmlFromString(homepagePost.excerpt.rendered)}
              className="text-neutral-500 mt-2"
              as="p"
            />
          </div>
          <DisplayHTML
            html={clearHtmlFromString(homepagePost.content.rendered)}
            className="flex-1 text-neutral-500"
            as="p"
          />
        </div>
        <PhotoProvider maskOpacity={0.8}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {homepagePost.meta.images.map((img, index) => (
              <PhotoView key={index} src={img}>
                <div className="overflow-hidden">
                  <Image
                    src={img}
                    alt="SC hostel"
                    width={700}
                    height={256}
                    className="w-full h-64 object-cover transition-transform hover:scale-110 cursor-pointer"
                  />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <Link href="/smjestaj" className={cn(buttonClassName, "mx-auto mt-16")}>
          REZERVIRAJ SMJEŠTAJ
        </Link>
      </div>
    </main>
  );
}
