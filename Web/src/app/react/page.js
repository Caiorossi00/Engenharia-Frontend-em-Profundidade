import Link from "next/link";
import { reactStructure } from "@/app/data/react";

export default function ReactModulesPage() {
  const sortedModules = [...reactStructure.modules].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div>
      <h1>{reactStructure.title}</h1>

      <ul>
        {sortedModules.map((module) => (
          <li key={module.slug}>
            <Link href={`/react/${module.slug}`}>
              {`Módulo ${module.order} – ${module.title}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
