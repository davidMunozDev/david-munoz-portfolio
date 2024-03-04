"use client";
import Toggle from "@/app/components/Toggle";
import {
  useExperienceContext,
  CONTENTS,
} from "@/app/experience/[content]/experience-context";

const ContentSwitch = ({}) => {
  const { selectedContent, onSelectContent } = useExperienceContext();
  return (
    <Toggle
      firstOpt={{ value: CONTENTS.work, content: <span>Work</span> }}
      lastOpt={{ value: CONTENTS.education, content: <span>Education</span> }}
      onChange={onSelectContent}
      value={selectedContent}
    />
  );
};

export default ContentSwitch;
