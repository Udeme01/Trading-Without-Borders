import Card from "@/components/ui/Card";
import { PodcastEpisode } from "@/types";

export default function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  return (
    <Card
      href={`/podcast/${episode.slug}`}
      eyebrow={episode.guest}
      title={episode.title}
    />
  );
}
