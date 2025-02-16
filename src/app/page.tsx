"use client";
import { ProjectCard } from "@/app/components/ProjectCard";
const projectData = [
  {
    year: 2025,
    projects: [
      {
        title: "GigSense: An LLM-Infused Tool for Workers’ Collective Intelligence",
        authors: [

          "Kashif Imteyaz",
          "Claudia Flores-Saviaga",
          "Saiph Savage"
        ],
        venue: "CHI 2025: ACM Conference on Human Factors in Computing Systems",
        abstract: "GigSense first features an intelligent agent that automatically organizes and summarizes workers’ problems. Within short timeframes, workers can zoom in and out to analyze and understand their collective issues. The tool also offers a collaborative space for brainstorming and selecting optimal solutions to address their problems. Moreover, GigSense’s intelligent agent provides AI-enhanced solutions to further support workers’ brainstorming and planning endeavors.",
        paperLink: "#",
        githubLink: "https://github.com/NortheasternAI/Quantifying-Invisible-Labor",
        nextPageLink: "/gigsense"
      },
      {
        title: "A Culturally-Aware AI Tool for Crowdworkers",
        authors: [
          "Carlos Toxtli",
          "Christopher Curtis",
          "Saiph Savage"
        ],
        venue: "CSCW 2024: ACM Conference on Computer-Supported Cooperative Work",
        abstract: "This paper presents the design and evaluation of a culturally-aware AI tool for crowdworkers. We conducted a qualitative study with 20 crowdworkers from diverse cultural backgrounds to understand their preferences and needs when working with AI tools. Based on our findings, we designed an AI tool that adapts to the cultural preferences of crowdworkers. Our evaluation shows that crowdworkers found the culturally-aware AI tool to be more engaging and useful than a standard AI tool. Our work contributes to the growing body of research on culturally-aware AI and has implications for the design of AI tools for crowdworkers.",
        paperLink: "#",
        githubLink: "https://github.com/example/repo2",
        nextPageLink: "/projects/culturally-aware-ai-tool"
      }
    ]
  },
  {
    year: 2024,
    projects: [
      {
        title: "Unveiling AI-Driven Collective Action for a Worker-Centric Future",
        authors: [
          "Saiph Savage"
        ],
        venue: "WSDM: ACM International Conference on Web Search and Data Mining 2024",
        abstract: "This paper presents a vision for AI-driven collective action in the future of work. I argue that AI has the potential to empower workers to organize and advocate for their rights in the digital economy. I propose a research agenda for studying AI-driven collective action and discuss the implications of this work for the design of AI systems that support worker-centric futures.",
        paperLink: "#",
        githubLink: "https://github.com/example/repo3",
        nextPageLink: "/projects/ai-driven-collective-action"
      },
      {
        title: "AI and National Security",
        authors: [
          "Saiph Savage",
          "Gabriela Avila",
          "Norma Elva Chávez",
          "Martha Garcia-Murillo"
        ],
        venue: "Book Chapter in the Handbook of Artificial Intelligence at Work, Edward Elgar Publisher 2024",
        abstract: "This book chapter provides an overview of the role of AI in national security. We discuss the opportunities and challenges of using AI for national security purposes, including intelligence analysis, cyber defense, and autonomous weapons systems. We also examine the ethical and legal implications of AI in national security and propose a research agenda for studying the impact of AI on national security.",
        paperLink: "#",
        githubLink: "https://github.com/example/repo4",
        nextPageLink: "/projects/ai-and-national-security"
      }
    ]
  }
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}


      {/* Main Section */}
      <main className="container mx-auto p-8">
        {projectData.map((section) => (
          <div key={section.year} className="mb-12">
            {/* Year Heading */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {section.year}
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {section.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  authors={project.authors}
                  venue={project.venue}
                  abstract={project.abstract}
                  paperLink={project.paperLink}
                  githubLink={project.githubLink}
                  nextPageLink={project.nextPageLink}

                />
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
