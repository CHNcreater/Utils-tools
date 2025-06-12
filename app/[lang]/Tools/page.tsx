import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Tools({
  params
} : {
  params: Promise<{ lang: Locale }>;
}) {
  const {lang} = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">{dictionary.tools.title}</h1>
    </div>
  );
}