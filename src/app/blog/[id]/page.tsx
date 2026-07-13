'use client'

// 第一行必须放这里，不能写在带 'use client' 的组件里
export const runtime = "edge";
import BlogClient from "./BlogClient";

type PageParams = { slug: string };
type PageProps = { params: PageParams };

export default function WriteEditPage({ params }: PageProps) {
  return <BlogClient slug={params.slug} />;
}
