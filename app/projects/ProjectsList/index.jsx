"use client";

import { applyStyles } from "@/app/lib/styleHelpers.util";
import styles from "./styles.module.scss";
import { useProjectsContext } from "@/app/projects/projects-context";
import Image from "next/image";

const getUnionStyle = (part, i) => {
  const positionStyle = part === 0 ? { right: "-26px" } : { left: "-26px" };
  const indexStyle = i !== 1 ? { [i === 0 ? "bottom" : "top"]: "15%" } : {};
  return { ...positionStyle, ...indexStyle };
};

const ProjectsList = ({ part }) => {
  const { projects, onSelectProject, selectedProject } = useProjectsContext();
  //TODO move to a constants file
  const blurredProjectImage =
    "data:image/webp;base64,UklGRq4EAABXRUJQVlA4WAoAAAAgAAAAcwIAggEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggwAIAAHBEAJ0BKnQCgwE+0WiwUyglpKKgCAEAGglpbuF2fwHjzmu5sACgx27k5D32ych77ZOQ99snRUoxlqQIOKr4qDaxR3uSNcdWZJJLmrx0OsKAU+Jc/uSuuk8lU30S2nHXkTBW9snJ0w6TrZDOJ4WqydMd7noMHqbZHCDdG8WFjJJ+siwTXi8d7noMHrxq99tCR4aJuLCx5K/WRYJl0UnLJ3O82vI8S5/cldkrBus8lfqclCJE9T2yXbYIshovWSREgSlWyIaLqcEPleWntlM94sG6JErobRfuciEr7qcT3gdpUFCAsPcV/fQhMLjhxWyIOh9zHXZORRKcalLkvVWTpj2EwtxKKBOYW3CC7hvokPkgUMI4azkgeduegwevGr320JHhom4sLHkr9ZFgmXRScsnc7za8mhsrslFfeTBYwBo6iiwlQ9x7xJyH7RnIoHoOYSBKVbIhoupwQ+V5ae2Uz3iwbokSuhtF+5yISvupxPeB2lQWFcN/He5Le26LeLAg9Crb86HIsA+GNeg3uG/j2EwuOHFbIg6H3Mddk5E25CQ+SBQwjhrOSB5256DB68avfbSDIr7yOGGANHUXMWqmUmzrNjygHvz4lz+5K7JWDdZ5K/U5KESJ6ntku2mVIE5eg5hIEpVsiGi6nBD5Xlp7ZUU+3JbvveSdhvJqDYJX3U4nvA7SoKEBYe4r++hCYXHDitkQdD7mOuycibchIfJAoYRw1nJA87c9Bg9eNPAA/v6rT/523e0v3+hlZyVJfPIH1Cspm3Bp/NjN8ZzRvXP65XCiwU9iO0G1OsB5x1Lj2gyDah7ZpBnNB5DXZVrA5cRQUCjywWI+od87D/ny+L4CibECozHqhIbIgXIgf6/qEhsiBciB/r+oSGyIFyIH+v6hIbIgXIgf6/qEhsiBciB/r+oSGyIFyIH+v6hIbIgXIgAA";
  return (
    <div className={styles.Wrapper}>
      {projects[part].map(({ id, name }, i) =>
        id !== "wip" ? (
          <div
            onClick={() => onSelectProject(id)}
            className={applyStyles([
              styles.Project__content,
              id === selectedProject.id && styles.Project__selected,
            ])}
            key={id}
          >
            <Image
              src={`/projects/project-${id}.png`}
              alt={`project ${name}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={blurredProjectImage}
            />
            <Image
              className={styles.Union}
              style={getUnionStyle(part, i)}
              src={`/img/union.svg`}
              alt="union"
              width={22}
              height={40}
            />
            <div className={styles.MoreInfo}>View</div>
            <span className={styles.ProjectName}>{name}</span>
            <span className={styles.ProjectNumber}>{id}</span>
          </div>
        ) : (
          <div key={i} className={styles.Project__wip}>
            wip..
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsList;
