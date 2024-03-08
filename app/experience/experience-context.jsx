"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { work, education } from "@/app/lib/portfolio-data.json";
import { useSearchParams, useRouter } from "next/navigation";

const ExperienceContext = createContext({});
export const CONTENTS = {
  work: "work",
  education: "education",
};

export function ExperienceContextProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = searchParams.get("content") || CONTENTS.work;
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
      content === CONTENTS.work ? CONTENTS.education : CONTENTS.work;
    router.push(`/experience?content=${selectedContent}`);
  };

  const getContent = () => {
    return content === CONTENTS.work ? work : education;
  };

  return (
    <ExperienceContext.Provider
      value={{
        selectedContent: content,
        onSelectContent,
        content: getContent(),
        contentDetail: getContent().list[0],
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export const useExperienceContext = () => useContext(ExperienceContext);
