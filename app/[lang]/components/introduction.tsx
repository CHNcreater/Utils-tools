"use client";
import { type getDictionary } from "@/get-dictionary";

export function Introduction({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["introduction"];
}) {
  return (
    <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
      <h1 className="text-3xl font-bold">{dictionary.title}</h1>
      <p className="text-lg">{dictionary.description}</p>
    </div>
  );
}
