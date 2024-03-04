"use client";

import { useExperienceContext } from "../experience-context";

const ExperiencesList = () => {
  const { content } = useExperienceContext();
  return (
    <div>
      {content.list.map((experience, i) => (
        <div key={i}>
          <h3>{experience.title}</h3>
          <p>{experience.place}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesList;
