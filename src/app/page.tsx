import Link from "next/link";

export default function Home() {
  return (
    <>
      <body>
        <div className="hero">
          <div className="container">
            <div className="navbar">
              <Link href="/about">
                <button className="btn nav-item">About</button>
              </Link>
              <Link href="/contact">
                <button className="btn nav-item">Contact</button>
              </Link>
            </div>

            <div>
              <p className="welcome-message">WELCOME TO PUNCTORANJ</p>
            </div>
          </div>
        </div>

        <section id="fulfilled" className="container">
          <p className="section-title">PROJECTS</p>
          <div className="section-projects">
            <Link href="/projects/1" className="project">
              CORESI-INCLUDE
            </Link>
            <Link href="/projects/2" className="project">
              MONDELEZ OFFICE
            </Link>
            <Link href="/projects/3" className="project">
              GHEORGHIENI 34
            </Link>
            <Link href="/projects/4" className="project">
              RAILWAY STATIONS
            </Link>
            <Link href="/projects/5" className="project">
              CTP ACCOMODATIONS-rendering
            </Link>
            <Link href="/projects/6" className="project">
              HI-TECH CENTER-graphics
            </Link>
            <Link href="/projects/7" className="project">
              PARISH HOUSE-tangible
            </Link>
            <Link href="/projects/8" className="project">
              LONG-HOUSE-tangible
            </Link>
            <Link href="/projects/9" className="project">
              GARDEN-HOUSE-tangible
            </Link>
            <Link href="/projects/10" className="project">
              PAPERCLIP-competition
            </Link>
            <Link href="/projects/11" className="project">
              PINGPONG+6-competition
            </Link>
            <Link href="/projects/12" className="project">
              RELIGIOUS CENTER-competition
            </Link>
            <Link href="/projects/13" className="project">
              BEYOND DWELLING-imagination
            </Link>
          </div>
        </section>
      </body>
    </>
  );
}
