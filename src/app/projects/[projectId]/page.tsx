import Link from "next/link";
import { projectList } from "@/data/projects";
interface ProjectDetailsProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const currentProject = projectList.find((project) => {
    return project.slug === props.params.projectId;
  });

  if (!currentProject) {
    return <p>Sorry, but your project does not exist</p>;
  }

  // if (currentProject.layout === LayoutType.CUSTOM)
  //   return <div> Custom Layout </div>;

  return (
    <>
      <div className="container">
        <h1 className="main-title">{currentProject.name}</h1>
        <p className="generic__text">{currentProject.text}</p>
      </div>
    </>
  );
}
