import { Input } from "@/components/ui/input"

export default function UUIDPage() {
  return (
    <div className="flex flex-col h-full w-full m-8 p-4">
      <h1 className="text-2xl font-bold">GUID/UUID Generator</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Generate unique identifiers easily.
      </p>
      <div className="flex mt-6 w-full">
        <p className="whitespace-nowrap">How many GUIDs do you want to generate (1-1000): </p>
        <Input className="ml-4 max-w-[50px]"/>
      </div>
      <div className="mt-8">
        {/* UUID generation logic will go here */}
        <p className="text-lg">UUID will be displayed here.</p>
      </div>
    </div>
  );
}