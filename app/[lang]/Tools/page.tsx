import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { ToolCard } from "../components/tool-card";

export default async function Tools({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-2xl font-bold">{dictionary.tools.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl p-4">
        {dictionary.tools.cards.map((tool) => {
          return (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              href={tool.link}
            />
          );
        })}
      </div>
    </div>
  );
}
