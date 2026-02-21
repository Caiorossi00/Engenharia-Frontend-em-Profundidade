import { reactStructure } from "@/data/react-structure";

export function getModule(moduleSlug) {
  return reactStructure.modules.find((m) => m.slug === moduleSlug);
}

export function getTopic(moduleSlug, topicSlug) {
  const module = getModule(moduleSlug);
  if (!module) return null;

  const index = module.topics.findIndex((t) => t.slug === topicSlug);

  if (index === -1) return null;

  const topic = module.topics[index];

  const previous = module.topics[index - 1] || null;
  const next = module.topics[index + 1] || null;

  return {
    topic,
    module,
    previous,
    next,
  };
}
