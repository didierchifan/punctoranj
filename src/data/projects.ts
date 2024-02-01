interface ProjectList {
  //e dynamic key -> [slug];
  // banana:ProjectData
  // accomodation:ProjectData -> obiectul trebuie sa contina neaparat accomodation
  [slug: string]: ProjectData;
}

interface ProjectData {
  id: number;
  name: string;
  heroImage: string;
  alt: string;
  text: string;
}

// export enum LayoutType {
//   DEFAULT = "default",
//   CUSTOM = "custom",
// }
//ProjectData[]

export const projectList: ProjectList = {
  accomodations: {
    id: 1,
    name: "Accomodations - CTP",
    heroImage: "/accomodations/accomodations-hero.webp",
    alt: "Front perspective af an apartment block",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  coresi: {
    id: 2,
    name: "Coresi foodcourt terrace",
    heroImage: "",
    alt: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  "ping-pong6": {
    id: 2,
    name: "PING-PONG+6 x RDW",
    heroImage: "/pingpong+6/pp-rdw-hero.jpg",
    alt: "People playing ping-pong on a hexagonal, 6 people ping-pong table",
    text: "Introducing the ultimate ping pong table for social gatherings and group play - the Ping Pong+6, a party table for 6 players! Designed with six playing positions, this table offers the perfect solution for larger groups who want to play ping pong together. Each position has its own designated playing area with ample space to move around and make those killer shots.",
  },
  gardenHouse: {
    id: 3,
    name: "pipi",
    heroImage: "",
    alt: "",
    text: "caca",
    // layout: LayoutType.CUSTOM,
  },
  beyondDwelling: {
    id: 4,
    name: "PING-PONG + 6",
    heroImage: "",
    alt: "",
    text: `Winning project of Romanian Design Week design competition, Ping-Pong + 6 is a hexagonal ping-pong table, delivered as a pack of 6 equilateral triangles. The hexagonal shape allows countless play scenarios, for 2-6 players, with balls simultaneously bouncing in 6+ directions. The game can be played by 2,4 or 6 players (even an odd number of players), using how many balls they want, 1, 2, 3, 4....`,
    // layout: LayoutType.DEFAULT
  },
  interview: {
    id: 5,
    name: "BEYOND DWELLING",
    heroImage: "",
    alt: "alt",
    text: `What may motivate us to make long-term commitments? Maybe there was only a constraint coming from the society and the always growing freedom has helped us detach ourselves and discern it from a different perspective. Or maybe there is a need in the essence of every person, a need to dig oneself in something/somewhere – a need for a stable affiliation both rooted in a certain place or in certain people who become “ours”.

    We all live in a time of quickly consuming things. We tend to be free from any oppression that interfere with our freedom. It is way easier to replace what is not working, instead of finding a smart solution for that specific problem and even if we start looking for it, we often quit fast. There is a tumult of life that makes us have no more respite, so a path that involves attempts in many directions is preferred rather than a single path assumed by a determined decision. Modern human lifestyle emphasizes on a diversity of experiences and not on a monotony of steadiness.
    
    That being said, what could be an architectural response in relation to the life of contemporary human beings? Reducing the search area to one of the necessities of life – dwelling – with the help of this project I brought into discussion certain terms and concepts that potentiate a way to follow. The dwelling program is analyzed using tools to investigate the validity of an answer, discussed on the basis of a criteria considered relevant for understanding the issue. A balance is being sought in the current tendencies of the consumerism person between its positive aspects and those that could harm in the long run.
    The aims of the project are identifying and solving an existing, extremely visible problem, represented by a derelict area, situated on the eastern boundary of the old city center of Ljubljana. The adaptive reuse of the former sugar factory involves primarily the integration of the living / co-living function, together with other functions for the general public interest, revitalizing the place and redefining its relationship with the old city center. In addition to this, the project describes different ways of living, the varied communities representing the primary element that guides the entire design process. The representation of the project, inspired by the comic book illustrations, complements the architectural solution.`,
    // layout: LayoutType.DEFAULT
  },
};
