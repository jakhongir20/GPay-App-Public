import { notFound } from "next/navigation";
import { getSlugConfig, getAllSlugs } from "./config";

interface Props {
  params: { lang: string; slug: string; };
}

// Generate static params for all slugs (optional, for better performance)
export function generateStaticParams() {
  const slugs = getAllSlugs();
  const langs = ["uz", "ru", "en"];

  return langs.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export default function FormSlugPage({ params }: Props) {
  const { slug } = params;
  const config = getSlugConfig(slug);

  // Return 404 if slug doesn't exist
  if (!config) {
    notFound();
  }

  return (
    <div className="container-custom py-10">
      <div className="mb-6">
        <h1 className="text-h1">{config.title}</h1>
        {config.description && (
          <p className="text-section-subtitle mt-2">{config.description}</p>
        )}
      </div>
      {config.component}
    </div>
  );
}
