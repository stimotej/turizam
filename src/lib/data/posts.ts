import type { Post } from "@/models/post";
import fetchApi from "../utils/api";
import {
  revalidateTime,
  adminTurizamCategoryId,
  faqCategoryId,
} from "@/lib/utils/constants";

export function getPosts(props?: { limit?: number }) {
  const params = {
    categories: [adminTurizamCategoryId, faqCategoryId].toString(),
    per_page: props?.limit ? props.limit.toString() : "100",
    orderby: "date",
    order: "desc",
  };

  const queryParams = new URLSearchParams(params).toString();

  return fetchApi<Post[]>(`/posts?${queryParams}`, {
    next: {
      revalidate: revalidateTime,
      tags: ["posts"],
    },
    cache: "force-cache",
  });
}

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}
