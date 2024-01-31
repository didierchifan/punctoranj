import Link from "next/link";

import projects from "@/data";

export default function ProjectGrid() {
  return (
    <section className="container">
      <div className="section-projects">
        <section className="wrapper--grid">
          {projects.map((project) => (
            <div key={project.slug} className="project--icon">
              <Link href={`/projects/${project.slug}`}>
                <project.image className="project--icon__svg" />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
