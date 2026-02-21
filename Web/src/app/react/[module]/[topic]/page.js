import { reactStructure } from "@/app/data/react";

export default async function TopicPage({ params }) {
  const { module, topic } = await params;

  const moduleData = reactStructure.modules.find((m) => m.slug === module);

  const topicData = moduleData?.topics.find((t) => t.slug === topic);

  if (!topicData) return <div>Tópico não encontrado</div>;

  return (
    <article>
      <h1>{topicData.title}</h1>
      <p>{topicData.content}</p>
    </article>
  );
}
