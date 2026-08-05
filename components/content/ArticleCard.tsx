import Card from "@/components/ui/Card";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card
      href={`/trade-intelligence/${article.category}/${article.slug}`}
      eyebrow={`${article.category} · ${formatDate(article.date)}`}
      title={article.title}
      description={article.excerpt}
    />
  );
}
