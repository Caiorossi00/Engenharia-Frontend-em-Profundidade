import Link from "next/link";
import { reactStructure } from "@/app/data/react";

export default async function ModulePage({ params }) {
  const { module } = await params;

  const moduleData = reactStructure.modules.find((m) => m.slug === module);

  if (!moduleData) {
    return <div>Módulo não encontrado</div>;
  }

  return (
    <div>
      <h2>{moduleData.title}</h2>

      <ul>
        {moduleData.topics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/react/${moduleData.slug}/${topic.slug}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
