import Link from "next/link";
export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <>
      <Link href="/">
        <button className="btn">X</button>
      </Link>
      <h1 className="welcome-message">
        Details about project {params.projectId}
      </h1>
      ;
    </>
  );
}
