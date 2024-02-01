import Image from "next/image";
import Link from "next/link";

import { projectList } from "@/data/projects";

interface ProjectDetailsProps {
  params: {
    projectSlug: string;
  };
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  const currentProject = projectList[props.params.projectSlug];

  if (!currentProject) {
    return <p>Sorry, but your project does not exist</p>;
  }

  // if (currentProject.layout === LayoutType.CUSTOM)
  //   return <div> Custom Layout </div>;

  return (
    <>
      <div className="container">
        <Link href="/" className="project--header">
          x
        </Link>
        <div className="center_img">
          <Image
            className="project--header--img"
            src={currentProject.heroImage}
            width={1920}
            height={1920}
            alt={currentProject.alt}
          />
        </div>
        <h1 className="project--title">{currentProject.name}</h1>

        <div className="project--section--text">
          <p className="project--description">{currentProject.text}</p>
        </div>
      </div>
    </>
  );
}
