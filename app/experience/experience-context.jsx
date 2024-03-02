"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { projects as projectsList } from "@/portfolio-data.json";

const ExperienceContext = createContext({});
export const CONTENTS = {
  companies: "companies",
  education: "education",
};

export function ExperienceContextProvider({ children }) {
  const [selectedContent, setSelectedContent] = useState(CONTENTS.companies);
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
    console.log("onSelectContent");
    setSelectedContent((content) =>
      content === CONTENTS.companies ? CONTENTS.education : CONTENTS.companies
    );
  };

  return (
    <ExperienceContext.Provider
      value={{
        selectedContent,
        onSelectContent,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export const useExperienceContext = () => useContext(ExperienceContext);
