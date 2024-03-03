"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { projects as projectsList } from "@/app/lib/portfolio-data.json";
import { useParams, useRouter } from "next/navigation";

const ExperienceContext = createContext({});
export const CONTENTS = {
  companies: "work",
  education: "education",
};

export function ExperienceContextProvider({ children }) {
  const router = useRouter();
  const { content } = useParams();
  // const [selectedProject, setSelectedProject] = useState(projectsList[0]);
  // const [filters, setFilters] = useState([]);

  // const projects = useMemo(() => {
  //   const projectsFiltered = projectsList.filter(({ skills }) => {
  //     const unusedSkills = skills.filter((skill) => !filters.includes(skill));
  //     return unusedSkills.length !== skills.length;
  //   });

  //   return getProjects(filters.length ? projectsFiltered : projectsList, 3);
  // }, [filters]);

  // const onSelectProject = (selectedId) => {
  //   const project = projectsList.find(({ id }) => id === selectedId);
  //   setSelectedProject(project);
  // };

  // const selectFilter = (filter) => {
  //   setFilters((filters) =>
  //     filters.includes(filter)
  //       ? filters.filter((oldFilter) => oldFilter !== filter)
  //       : [...filters, filter]
  //   );
  //   setPage(0);
  // };

  const onSelectContent = () => {
    const selectedContent =
      content === CONTENTS.companies ? CONTENTS.education : CONTENTS.companies;
    router.push(`/experience/${selectedContent}`);
  };

  return (
    <ExperienceContext.Provider
      value={{
        selectedContent: content,
        onSelectContent,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export const useExperienceContext = () => useContext(ExperienceContext);
