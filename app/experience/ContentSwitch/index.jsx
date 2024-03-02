"use client";
import Toggle from "@/app/components/Toggle";
import {
  useExperienceContext,
  CONTENTS,
} from "@/app/experience/experience-context";

const ContentSwitch = ({}) => {
  const { selectedContent, onSelectContent } = useExperienceContext();
  return (
    <Toggle
      firstOpt={{ value: CONTENTS.companies, content: <span>Companies</span> }}
      lastOpt={{ value: CONTENTS.education, content: <span>Education</span> }}
      onChange={onSelectContent}
      value={selectedContent}
    />
  );
};

export default ContentSwitch;
