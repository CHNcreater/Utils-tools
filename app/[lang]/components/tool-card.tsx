import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="w-full h-full h-50 w-50 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300 dark:shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter>
        <CardAction>
          <a href={href} target="_blank" rel="noopener noreferrer">
            Open Tool
          </a>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
