"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { projects as projectsList } from "@/portfolio-data.json";

const ProjectsContext = createContext({});

const getProjects = (projectsList, size) => {
  let projectsWindows = Array.from(
    { length: Math.ceil(projectsList.length / size) },
    (v, i) => projectsList.slice(i * size, i * size + size)
  );
  const isEven = (projects) => projects.length % 2 === 0;
  const lastWindow = projectsWindows.at(-1);

  if (lastWindow.length < size) {
    const slice = projectsWindows.slice(0, -1);
    const wipProjects = Array.from(
      { length: size - lastWindow.length },
      () => ({
        id: "wip",
      })
    );

    projectsWindows = [...slice, [...lastWindow, ...wipProjects]];
  }

  if (!isEven(projectsWindows)) {
    projectsWindows = [
      ...projectsWindows,
      Array.from({ length: size }, () => ({ id: "wip" })),
    ];
  }

  return projectsWindows;
};

export function ProjectsContextProvider({ children }) {
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(projectsList[0].id);
  const projects = getProjects(projectsList, 3);

  const goForward = () => setPage((page) => page + 2);
  const goBack = () => setPage((page) => page - 2);
  const onSelectProject = (selectedId) => {
    const project = projectsList.find(({ id }) => id === selectedId);
    setSelectedProject(project);
  };

  const canGoBack = page - 2 >= 0;
  const canGoForward = page + 2 <= projects.length - 1;

  return (
    <ProjectsContext.Provider
      value={{
        projects: [projects[page], projects[page + 1]],
        goForward,
        goBack,
        canGoBack,
        canGoForward,
        onSelectProject,
        selectedProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export const useProjectsContext = () => useContext(ProjectsContext);
