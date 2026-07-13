export const runtime = "edge";
import BlogClient from "./BlogClient";

type Params = { id: string };
type Props = { params: Params };

export default function BlogDetailPage({ params }: Props) {
  return <BlogClient slug={params.id} />;
}
