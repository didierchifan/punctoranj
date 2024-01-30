import Link from "next/link";

interface ProjectDetailsProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails(props: ProjectDetailsProps) {
  return (
    <>
      <Link href="/">
        <button className="btn">X</button>
      </Link>
      <h1 className="main-title">
        Details about project {props.params.projectId}
      </h1>
      ;
    </>
  );
}
