import type { ProjectOverview } from "../../types";

const pyromanimals : ProjectOverview = {
  slug: "pyromanimals",
  year: 2026,
  image: "images/pyromanimals/cover.png",
  type: "design",
  title: "Pyromanimals",
  description: "Concept art and UI design for a monster hunting video game",
  tags: ["blender", "illustrator", "writing"],
};
const geminate : ProjectOverview = {
  slug: "geminate",
  year: 2026,
  image: "images/geminate/geminate_cover.png",
  type: "coding",
  link: "https://github.com/skandula08/GemiNate",
  demo: "https://gamenite-gs0z.onrender.com/",
  title: "GemiNate",
  description: "A collaborative gaming and social platform!",
  tags: ["react", "express", "mongoDB", "audio", "websockets"],
};


const tactus : ProjectOverview = {
  slug: "tactus",
  year: 2025,
  image: "images/tactuscover.png",
  type: "coding",
  title: "Tactus Music",
  demo: "https://www.tactusmusic.com/",
  description: "Customer facing e-commerce website for a wearable tech startup",
  tags: ["nextjs", "cms", "branding", "uiux"],
};

const starmapper : ProjectOverview = {
  slug: "starmapper",
  year: 2026,
  link: "https://github.com/skandula08/StarMapper2",
  image: "images/starmapper/starmapper_cover.png",
  type: "coding",
  title: "StarMapper(2)",
  description: "AR/XR starfield in Unity3D using real life astronomical data",
  tags: ["unity", "c#", "shaderlab", "astronomy"],
};

const skillsphere : ProjectOverview = {
  slug: "skillsphere",
  year: 2024,
  image: "images/skillsphere/skillsphere_cover.png",
  link: "https://github.com/skandula08/SkillSphere",
  type: "coding",
  title: "SkillSphereBot",
  description:
    "A Discord bot that uses AI to help you manage your hobbies and skill development",
  tags: ["discordpy", "python", "ai"],
};

const mbtrivia : ProjectOverview = {
  slug: "mbtrivia",
  year: 2024,
  image: "images/mbtrivia/mbtrivia_cover.png",
  link : "https://www.figma.com/design/Fmzu8tJfsDkvs6Fhp6YJGf/Sree--Jerry--Mia--Anqi--Sammi?node-id=216-26&p=f",
  type: "design",
  title: "MBTriviA",
  description: "Digitizing MBTA navigation and positioning with a mobile game",
  tags: ["figma", "videography", "ui/ux"],
};

const cooperrates : ProjectOverview = {
  slug: "cooperrates",
  year: 2024,
  image: "images/cooperrates_cover.png",
  type: "coding",
  link: "https://github.com/skandula08/cooper-rates",
  title: "CooperRates",
  description: "Data driven co-op search and reviewing app",
  tags: ["flask", "python", "mysql", "datagrip"],
};
const travelnote : ProjectOverview = {
  slug: "travelnote",
  year: 2025,
  image: "images/travelnote/cover.png",
  type: "design",
  link: "https://www.figma.com/design/5Fa1WB9dHRmVzmqLP9u9KG/Travel-Note?node-id=0-1&t=4KI107Y3cfqMAQwN-1",
  title: "Travel Note",
  description: "A bullet journalling inspired travel site",
  tags: ["figma", "ui/ux"],
};



const khoury : ProjectOverview = {
  slug: "khoury",
  year: 2026,
  image: "images/travelnote/cover.png",
  type: "design",
  // link: "https://www.figma.com/design/5Fa1WB9dHRmVzmqLP9u9KG/Travel-Note?node-id=0-1&t=4KI107Y3cfqMAQwN-1",
  title: "Khoury College",
  description: "Collected work as designer for Khoury College's Communications and Media team",
  tags: ["graphics", "contract"],
};



const worldview: ProjectOverview  = {
  slug: "worldview",
  year: 2024,
  image: "/images/worldviewcover.png",
  type: "design",
  link: "https://www.figma.com/design/YUTBf7ypjAhCVUoH7zzdsy/NASA-Worldview?node-id=0-1&t=oscekNejzzSecMhr-1",
  title: "Adobe World View",
  description:
    "A atmospheric mapping app concept inspired by NASA WorldView and the Adobe design system",
  tags: ["figma", "ui/ux"],
};

// const thousandislands : ProjectOverview = {
//   slug: "thousandislands",
//   year: 2025,
//   image: "1000 islands",
//   type: "coding",
//   title: "The Thousand Islands Nuclear Disaster",
//   description:
//     "Step by step web game/story based on a fictional nuclear disasters",
//   tags: ["react", "web", "game"],
// };

export const selected : ProjectOverview[] = [
  pyromanimals,
  geminate,
  starmapper,
  mbtrivia,
  skillsphere,
];

export const programming : ProjectOverview[] = [geminate, tactus, starmapper, cooperrates, skillsphere];

export const design : ProjectOverview[] = [
  khoury,
  pyromanimals,
  tactus,
  mbtrivia,
  travelnote,
  worldview,
  // thousandislands,
];
