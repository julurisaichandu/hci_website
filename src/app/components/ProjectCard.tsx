import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";


interface ProjectCardProps {
  title?: string;
  authors?: string[];
  venue?: string;
  abstract?: string;
  paperLink?: string;
  githubLink?: string;
  nextPageLink?: string;
}

export function ProjectCard({ title, authors, abstract, githubLink, nextPageLink }: ProjectCardProps) {
  const router = useRouter();
  const truncatedAbstract = abstract &&
    abstract.length > 150 ? `${abstract.slice(0, 150)}...` : abstract;

  return (
    <Card>
               

      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        {/* Project Header with Icon */}
        {/* <Circle className="h-5 w-5 text-sky-400" /> */}
        <div className="flex items-center space-x-2">
          <div className="space-y-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {truncatedAbstract}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent>
        {/* Authors as Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          { authors && authors.map((author, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
            >
              {author}
            </span>
          ))}
        </div>

        {/* Action Buttons - Fixed version */}
        <div className="mt-4 flex space-x-2">
          <Button
            variant="outline"
            onClick={() => window.open(githubLink, "_blank")}
          >
            GitHub
          </Button>
          
          {nextPageLink && (
            <Button
              variant="default"
              onClick={() => router.push(nextPageLink)}
            >
              Learn More
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
