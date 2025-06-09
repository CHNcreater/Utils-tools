import { Locale } from "../../i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Introduction } from "./components/introduction";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return <Introduction dictionary={dictionary["introduction"]}/>;
}
