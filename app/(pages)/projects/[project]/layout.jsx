import Info from "@/app/components/Info";
import { projects } from "@/app/lib/portfolio-data";

export default function RootLayout({ children, params }) {
  const project = projects.find((p) => p.id === params.project);
  return (
    <>
      <Info page={project.name}>
        This is a longer sample text containing twenty-eight example words for
        you to see how it looks in the layout.
      </Info>
      {children}
    </>
  );
}
