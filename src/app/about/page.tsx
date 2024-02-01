import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <Link className="project--header" href="/">
        <div>X</div>
      </Link>
      <div className="project--section--text">
        <p className="about--description">
          WE ARE A CREATIVE STUDIO THAT MAKES MEMORABLE STORIES FOR YOU
        </p>
      </div>
    </div>
  );
}
