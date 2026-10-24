import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglebigquery,
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiLinux,
  SiAmazonaws,
  SiGooglecloud,
  SiDigitalocean,
  SiVercel,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiBitbucket,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiMui,
  SiJest,
  SiSonarqube,
  SiPostman,
  SiSentry,
  SiFirebase,
  SiPowerautomate,
  SiVisualstudiocode,
} from "react-icons/si";
import { SiClaude, SiOllama, SiLangchain, SiTypeorm } from "./brandIcons";
import { SectionHeading } from "../Retro";
import {
  TechsContainer,
  TechsWrapper,
  Deck,
  Group,
  GroupLabel,
  Keys,
  TechBox,
  Monogram,
  TechH3,
} from "./TechsElements";

// Order matters on desktop: short groups pack side by side
// (data + ci/cd, frontend + ai, styling + testing).
const groups = [
  {
    label: "languages & backend",
    techs: [
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: SiPython, name: "Python" },
      { Icon: SiNodedotjs, name: "Node.js" },
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: SiExpress, name: "Express" },
      { Icon: SiFastapi, name: "FastAPI" },
      { Icon: SiDjango, name: "Django" },
      { Icon: SiSocketdotio, name: "Socket.IO" },
    ],
  },
  {
    label: "devops & cloud",
    techs: [
      { Icon: SiDocker, name: "Docker" },
      { Icon: SiKubernetes, name: "Kubernetes" },
      { Icon: SiNginx, name: "NGINX" },
      { Icon: SiLinux, name: "Linux" },
      { Icon: SiAmazonaws, name: "AWS" },
      { Icon: SiGooglecloud, name: "Google Cloud" },
      { Icon: SiDigitalocean, name: "DigitalOcean" },
      { Icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    label: "databases & data",
    techs: [
      { Icon: SiPostgresql, name: "PostgreSQL" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: SiRedis, name: "Redis" },
      { Icon: SiGooglebigquery, name: "BigQuery" },
      { Icon: SiTypeorm, name: "TypeORM" },
    ],
  },
  {
    label: "ci/cd & version control",
    techs: [
      { Icon: SiGit, name: "Git" },
      { Icon: SiGithub, name: "GitHub" },
      { Icon: SiGithubactions, name: "GitHub Actions" },
      { Icon: SiGitlab, name: "GitLab CI" },
      { Icon: SiBitbucket, name: "Bitbucket Pipelines" },
    ],
  },
  {
    label: "frontend & mobile",
    techs: [
      { Icon: SiReact, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: SiVuedotjs, name: "Vue / Nuxt" },
      { Icon: SiExpo, name: "Expo / RN" },
      // no official mark: rendered as a typed letter key
      { monogram: "Zu", name: "Zustand" },
    ],
  },
  {
    label: "ai & llms",
    techs: [
      { Icon: SiClaude, name: "Claude API" },
      { Icon: SiLangchain, name: "LangChain" },
      { Icon: SiOllama, name: "Ollama" },
    ],
  },
  {
    label: "styling",
    techs: [
      { Icon: SiHtml5, name: "HTML" },
      { Icon: SiCss3, name: "CSS" },
      { Icon: SiTailwindcss, name: "Tailwind" },
      { Icon: SiSass, name: "Sass" },
      { Icon: SiBootstrap, name: "Bootstrap" },
      { Icon: SiMui, name: "Material UI" },
    ],
  },
  {
    label: "testing & quality",
    techs: [
      { Icon: SiJest, name: "Jest" },
      { Icon: SiSonarqube, name: "SonarQube" },
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiSentry, name: "Sentry" },
    ],
  },
  {
    label: "platforms & tools",
    techs: [
      { Icon: SiFirebase, name: "Firebase" },
      { Icon: SiPowerautomate, name: "Power Automate" },
      { Icon: SiVisualstudiocode, name: "VS Code" },
    ],
  },
];

const Techs = () => {
  return (
    <TechsContainer id="techs">
      <TechsWrapper>
        <SectionHeading index="03">dev techs i use</SectionHeading>
        <Deck>
          {groups.map((group) => (
            <Group key={group.label}>
              <GroupLabel>{group.label}</GroupLabel>
              <Keys style={{ "--cols": group.techs.length }}>
                {group.techs.map(({ Icon, monogram, name }) => (
                  <TechBox key={name} title={name}>
                    {Icon ? (
                      <Icon aria-hidden="true" />
                    ) : (
                      <Monogram aria-hidden="true">{monogram}</Monogram>
                    )}
                    <TechH3>{name}</TechH3>
                  </TechBox>
                ))}
              </Keys>
            </Group>
          ))}
        </Deck>
      </TechsWrapper>
    </TechsContainer>
  );
};

export default Techs;
