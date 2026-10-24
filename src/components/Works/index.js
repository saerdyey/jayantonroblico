import React from "react";
import { SectionHeading } from "../Retro";
import {
  WorksContainer,
  WorksWrapper,
  Cards,
  StyledCard,
} from "./WorksElements";
import project1 from "../../images/project1.PNG";
import project2 from "../../images/project2.PNG";
import project3 from "../../images/project3.PNG";
import project5 from "../../images/project5.PNG";
import project6 from "../../images/project6.png";
import project7 from "../../images/project7.png";
import utiligo from "../../images/utiligo.png";
import synapse from "../../images/synapse.png";
import workspace from "../../images/workspace.png";

const projects = [
  {
    src: utiligo,
    text: "Everyday errands app: order water refills, gas, laundry pickup, and garbage collection from local merchants, delivered by motorcycle",
    label: "UtiliGo",
    path: "https://utiligo-web.vercel.app/",
    stack: "Next.js · Expo · NestJS · Firebase Auth · Firestore · Firebase Storage",
    featured: true,
    badge: "★ latest project",
  },
  {
    src: synapse,
    text: "Revenue cycle management platform for US healthcare providers: real-time A/R dashboards, payer reports, and claims tracking. I led the backend/API development and system architecture.",
    label: "Synapse RCM",
    path: "https://synhs.com/",
    stack: "Next.js · Express · PostgreSQL · MongoDB · Redis · Firebase Auth · DigitalOcean · Docker",
    featured: true,
    reverse: true,
    badge: "◆ work project",
  },
  {
    src: workspace,
    text: "Internal work-tracking and HRIS platform: time tracking, attendance, leave requests, and admin reporting with real-time updates, 2FA, and CSV/Excel exports. It replaced spreadsheet workflows and cut manual reporting by about 40%.",
    label: "Synapse Workspace",
    path: "",
    stack: "Next.js · Tailwind · Radix UI · Recharts · NestJS · PostgreSQL · TypeORM · Redis · Bull · Socket.IO · AWS S3",
    featured: true,
    badge: "◆ work project",
    cta: "internal tool · ui concept shown",
  },
  {
    src: project1,
    text: "Fully responsive web portfolio using React JS",
    label: "JAR",
    path: "",
  },
  {
    src: project2,
    text: "PH health tracker: live COVID-19 counts and the country's top diseases using open source APIs",
    label: "covid19-tracker",
    path: "https://saerdyey.github.io/covid19ph-tracker/",
  },
  {
    src: project6,
    text: "Emergency mobile application",
    label: "JuanTapp",
    path: "https://youtu.be/ZitxCpD_skE",
  },
  {
    src: project7,
    text: "Movie Reviews created with ReactJS",
    label: "React Movies",
    path: "",
    offline: true,
  },
  {
    src: project5,
    text: "Barangay website for automating processes",
    label: "brgyappforms",
    path: "",
    offline: true,
  },
  {
    src: project3,
    text: "Website for SSS North Village",
    label: "TripleS Home Village",
    path: "",
    offline: true,
  },
];

const Works = () => {
  return (
    <WorksContainer id="projects">
      <WorksWrapper>
        <SectionHeading index="02">my projects</SectionHeading>
        <Cards>
          {projects.map((project, i) => (
            <StyledCard key={project.label} index={i} {...project} />
          ))}
        </Cards>
      </WorksWrapper>
    </WorksContainer>
  );
};

export default Works;
