import NavBar from "./components/navbar";
import HeroGallery from "./components/hero-gallery";
import ProjectGrid from "./components/project-grid";

export default function Home() {
  return (
    <body>
      <NavBar />

      <div style={{ padding: "1.5rem 0 3rem 0" }}></div>

      <HeroGallery />

      <div style={{ padding: "3rem 0 3rem 0" }}></div>

      <ProjectGrid />
    </body>
  );
}
