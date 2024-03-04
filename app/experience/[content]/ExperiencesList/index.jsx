"use client";

import { useExperienceContext } from "../experience-context";

const ExperiencesList = () => {
  const { content } = useExperienceContext();
  return (
    <div>
      {content.list.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.title}</h3>
          <p>{experience.place}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesList;
