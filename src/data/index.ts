import GardenHouse from "../assets/GardenHouse.svg";
import PingPong from "../assets/PingpongRdw.svg";
import BeyondDwelling from "../assets/BeyondDwelling.svg";
import Interview from "../assets/BeyondDwellingInterview.svg";
import PaperClip from "../assets/Paperclip.svg";
import LongHouse from "../assets/Restoration.svg";

export interface ProjectData {
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  slug: string;
}

const projects: ProjectData[] = [
  {
    image: GardenHouse,
    title: "garden-house",
    slug: "garden-house",
  },
  {
    image: PingPong,
    title: "ping-pong",
    slug: "ping-pong",
  },
  {
    image: BeyondDwelling,
    title: "beyond-dwelling",
    slug: "beyond-dwelling",
  },
  {
    image: Interview,
    title: "interview",
    slug: "interview",
  },
  {
    image: PaperClip,
    title: "paperclip",
    slug: "paperclip",
  },
  {
    image: LongHouse,
    title: "longhouse",
    slug: "longhouse",
  },
];

export default projects;
