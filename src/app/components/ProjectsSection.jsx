"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "An e-commerce website. Leveraging the capabilities of Next.js,typeScript and Prisma, powered by JavaScript, this platform serves as a digital marketplace, connecting buyers and sellers in a seamless online shopping experience.",
    image: "/images/projects/1.png",
    tag: ["All", "dynamic"],
    gitUrl: "https://github.com/Richson-Tech/nike-store",
    previewUrl: "https://nike-store-self.vercel.app/",
  },
  {
    id: 2,
    title: "Todo-list and reminder Website.",
    description: "CRUD operations.",
    image: "/images/projects/2.png",
    tag: ["All", "dynamic"],
    gitUrl: "https://github.com/Richson-Tech/todos",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Password generator Application",
    description:
      "The Password generator utillizes the information the user provides, such as your date of birth and full-name, to craft unique and robust passwords tailored to you. By combining these personal details with advanced algorithms, it generate random passwords that are virtually impossible to guess yet easy to remember. ",
    image: "/images/projects/3.png",
    tag: ["All", "dynamic"],
    gitUrl: "https://github.com/Richson-Tech/password-generator-react",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Authentication and CRUD operations.",
    image: "/images/projects/4.png",
    tag: ["All", "dynamic"],
    gitUrl: "https://github.com/Richson-Tech/foodland",
    previewUrl: "https://foodland-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Website for a gym house",
    description: "A static gym website created with react.js and SASS.",
    image: "/images/projects/5.png",
    tag: ["All", "static"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Youtube clone",
    description: "The Youtube website clone is built using Next.js and enhanced with the sleek design of Tailwind CSS. Leveraging the Unsplash API for stunning visuals and Redux Toolkit for seamless state management.",
    image: "/images/projects/6.png",
    tag: ["All", "dynamic"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="static"
          isSelected={tag === "static"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="dynamic"
          isSelected={tag === "dynamic"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
