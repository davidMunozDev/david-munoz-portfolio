"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { work, education } from "@/app/lib/portfolio-data.json";
import { useSearchParams, useRouter } from "next/navigation";
import { EXPERIENCE_CONTENTS } from "@/app/lib/router.constants";

const ExperienceContext = createContext({});
const getContent = (content) => {
  return content === EXPERIENCE_CONTENTS.work ? work : education;
};

export function ExperienceContextProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = searchParams.get("content") || EXPERIENCE_CONTENTS.work;
  const [contentDetail, setSelectedContentDetail] = useState(
    getContent(content).list[0]
  );

  const onSelectContent = () => {
    const selectedContent =
      content === EXPERIENCE_CONTENTS.work
        ? EXPERIENCE_CONTENTS.education
        : EXPERIENCE_CONTENTS.work;
    router.push(`/experience?content=${selectedContent}`);
  };

  const onSelectContentDetail = (detail) => {
    setSelectedContentDetail(detail);
  };

  return (
    <ExperienceContext.Provider
      value={{
        selectedContent: content,
        content: getContent(content),
        contentDetail,
        onSelectContent,
        onSelectContentDetail,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export const useExperienceContext = () => useContext(ExperienceContext);
