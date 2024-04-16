"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Git & Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Computer Science</li>
        <li className="text-base font-thin text-[#A7A7A7]">
          University of Lagos, Nigeria
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:flex justify-between py-8 space-x-5 px-4 xl:gap-1p sm:py-16 xl:px-16">
        {/* First About Me Part */}
        <div className="md:w-1/2 mt-1 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My line of Expertise I help in finding solutions and solve problems
            with my technical skills, making the unreachable services available
            at the click of a button.I also provide technical services for
            brands and work for companies to fix world problems with the use of
            my technical experience.
          </p>
          <div className="flex flex-row justify-between mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        {/* Second About Me Part */}
        <div className="md:w-1/2 mt-1 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Work Experience
          </h2>
          <div className="space-y-4">
            <div className="flex flex-row justify-between text-white">
              <div className="flex flex-col">
                <p>Frontend Developer Intern</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                  Global Axis
                </li>
              </div>
              <div className="flex flex-col">
                <p>Full-time</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                  April 2022 - Sep 2022
                </li>
              </div>
            </div>

            <div className="flex flex-row justify-between text-white">
              <div className="flex flex-col">
                <p>Frontend Developer</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                  Ajian Labs
                </li>
              </div>
              <div className="flex flex-col">
                <p>part-time</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                Jan 2023 - Nov 2023.
                </li>
              </div>
            </div>
            <div className="flex flex-row justify-between text-white">
              <div className="flex flex-col">
                <p>Frontend Developer</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                  Freelance
                </li>
              </div>
              <div className="flex flex-col">
                <p>Full-time</p>
                <li className="text-base font-thin text-[#A7A7A7]">
                  Dec 2023 - Till now.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
