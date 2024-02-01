import GardenHouse from "../assets/GardenHouse.svg";
import PingPong from "../assets/PingpongRdw.svg";
import BeyondDwelling from "../assets/BeyondDwelling.svg";
import Interview from "../assets/BeyondDwellingInterview.svg";
import PaperClip from "../assets/Paperclip.svg";
import LongHouse from "../assets/Restoration.svg";
import Accomodations from "../assets/Accomodations.svg";

export interface ProjectData {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  slug: string;
}

const projects: ProjectData[] = [
  {
    logo: Accomodations,
    title: "CTP Accomodations",
    slug: "accomodations",
  },

  {
    logo: GardenHouse,
    title: "garden-house",
    slug: "garden-house",
  },
  {
    logo: PingPong,
    title: "ping-pong",
    slug: "ping-pong6",
  },
  {
    logo: BeyondDwelling,
    title: "beyond-dwelling",
    slug: "beyond-dwelling",
  },
  {
    logo: Interview,
    title: "interview",
    slug: "interview",
  },
  {
    logo: PaperClip,
    title: "paperclip",
    slug: "paperclip",
  },
  {
    logo: LongHouse,
    title: "longhouse",
    slug: "longhouse",
  },
];

export default projects;
