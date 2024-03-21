"use client";
import Toggle from "@/app/components/Toggle";
import { useExperienceContext } from "@/app/(pages)/experience/experience-context";
import { EXPERIENCE_CONTENTS } from "@/app/lib/router.constants";

const ContentSwitch = ({}) => {
  const { selectedContent, onSelectContent } = useExperienceContext();
  return (
    <Toggle
      firstOpt={{ value: EXPERIENCE_CONTENTS.work, content: <span>Work</span> }}
      lastOpt={{
        value: EXPERIENCE_CONTENTS.education,
        content: <span>Education</span>,
      }}
      onChange={onSelectContent}
      value={selectedContent}
    />
  );
};

export default ContentSwitch;
