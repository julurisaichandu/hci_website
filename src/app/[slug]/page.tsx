"use client";
import { useParams } from "next/navigation";
import Hero from "@/app/components/Hero";
import Abstract from "@/app/components/Abstract";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/Layout";
import Bibtex from "@/app/components/Bibtex";

interface Project {
  title: string;
  authors: { name: string; link: string; university: string }[];
  abstract: string;
  carouselItems: string[];
  bibtex: string;
}

const projects:ProjectsMap = {
  gigsense: {
    title: "GigSense: An LLM-Infused Tool for Workers’ Collective Intelligence",
    authors: [
      { name: "Kashif Imteyaz", link: "#", university: "Northeastern University" },
      { name: "Claudia Flores-Saviaga", link: "#", university: "Northeastern University" },
      { name: "Saiph Savage", link: "#", university: "Northeastern University" },
    ],
    abstract:
      "GigSense is a platform that empowers gig workers through AI-driven insights.",
    carouselItems: ["image1.jpg", "image2.jpg", "image3.jpg"],
    bibtex: `@misc{huq2025cowpilotframeworkautonomoushumanagent,
    title={CowPilot: A Framework for Autonomous and Human-Agent Collaborative Web Navigation}, 
    author={Faria Huq and Zora Zhiruo Wang and Frank F. Xu and Tianyue Ou and Shuyan Zhou and Jeffrey P. Bigham and Graham Neubig},
    year={2025},
    eprint={2501.16609},
    archivePrefix={arXiv},
    primaryClass={cs.AI},
    url={https://arxiv.org/abs/2501.16609}
  }`,
  },
  project1: {
    title: "Project One",
    authors: [
      { name: "Author One", link: "#", university: "University One" },
      { name: "Author Two", link: "#", university: "University Two" },
    ],
    abstract:
      "Project One is focused on leveraging machine learning for healthcare.",
    carouselItems: ["image4.jpg", "image5.jpg", "image6.jpg"],
    bibtex: "BibTeX entry for Project One",
  },
};

type ProjectsMap = {
  [slug: string]: Project; // Map of slug (string) to Project
};

const ProjectPage = () => {
  const {slug} = useParams(); // Fetch the dynamic route parameter

  const projectSlug = slug as string;
  // Get project-specific data based on the route
  const projectData:Project = projects[projectSlug];

  if (!projectData) {
    return <div>Project not found</div>; // Handle invalid routes
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Hero title={projectData.title} authors={projectData.authors}/>

      {/* Abstract Section */}
      <Abstract abstract={projectData.abstract} />

      {/* Carousel Section */}
      <Carousel />

      {/* BibTeX Section */}
      <Bibtex bibtex={projectData.bibtex} />

      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default ProjectPage;
