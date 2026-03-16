import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/Experience';
import { Contact } from './components/Contact';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { Experience, Project, Education } from './types';

export default function App() {
//   const projects: Project[] = [
//     {
//       title: "1",
//       description: "",
//       tags: [""],
//       link: "",
//       image: "",
//     },
//     {
//       title: "2",
//       description: "",
//       tags: [""],
//       link: "",
//       image: "",
//     },
//     {
//       title: "3",
//       description: "",
//       tags: [""],
//       link: "",
//       image: "",
//     },
//     {
//       title: "4",
//       description: "",
//       tags: [""],
//       link: "",
//       image: "",
//     },
//     {
//       title: "5",
//       description: "",
//       tags: [""],
//       link: "",
//       image: "",
//     },
// ];
  const projects: Project[] = [];

  const experiences: Experience[] = [
    {
      company: "Paycom Software, Inc.",
      role: "AI Engineer",
      period: "Feb. 2024 - Present",
      description: "Architecting enterprise-grade generative AI solutions by implementing robust RAG pipelines and orchestrating multi-agent workflows. Focused on domain-specific automation and ensuring scalable, reliable AI integration into HCM software."
    },
    {
      company: "Bread Financial Holdings, Inc.",
      role: "Data Scientist Intern",
      period: "May. 2023 - Aug. 2023",
      description: "Engineered predictive frameworks for credit risk. Leveraged ensemble learning methods to enhance model precision and automated data ingestion pipelines to support real-time financial decisioning."
    },
    {
      company: "Beijing Kuaishou Technology Co., Ltd.",
      role: "Data Scientist Intern",
      period: "Apr. 2021 - Aug. 2021",
      description: "Optimized user growth strategies by analyzing massive-scale social media datasets. Developed advanced prediction models and conducted A/B testing to enhance user retention."
    },
    {
      company: "Chengdu Chaoyouai Technology Co., Ltd",
      role: "Data Analyst Intern",
      period: "Aug. 2020 - Dec. 2020",
      description: "Streamlined internal reporting workflows, reducing manual data processing time by automating routine KPI tracking."
    }
  ];

  const education: Education[] = [
    {
      school: "Rice University",
      degree: "MS in Data Science",
      period: "2022 - 2023",
      description: "Developed a deep intuition for neural architectures and algorithmic logic, providing the essential 'under-the-hood' context needed to debug and optimize complex AI systems today."
    },
    {
      school: "University of California, Irvine",
      degree: "BS in Data Science",
      period: "2015 - 2019",
      description: "Cultivated a foundation in computational mathematics, data structures, and software engineering principles."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] selection:bg-purple-100 selection:text-purple-900 relative">
      <BackgroundOrbs />
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <Skills />
          <ExperienceSection experiences={experiences} education={education} />
          <Projects projects={projects} />
          <Contact />
        </main>

        <footer className="py-12 px-6 border-t border-black/5 text-center text-black/30 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Yijun Zhou.
        </footer>
      </div>
    </div>
  );
}