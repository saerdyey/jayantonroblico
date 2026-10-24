import React from "react";
import profile1 from "../../images/profile1.jpg";
import profile2 from "../../images/profile2.jpg";
import profile3 from "../../images/profile3.jpg";
import motorcycle from "../../images/motorcycle.png";
import { Window, SectionHeading } from "../Retro";
import {
  AboutContainer,
  AboutContent,
  Row,
  AboutP,
  Lead,
  Note,
  Photos,
  Polaroid,
  Timeline,
  TimelineItem,
  DateChip,
  Spotify,
  Interests,
  Stats,
  Jobs,
  Job,
  Company,
  NowBadge,
  Highlights,
  Tags,
  CertList,
  SubHead,
} from "./AboutElements";

const stats = [
  { value: "5 yrs", label: "in the IT field" },
  { value: "85%+", label: "faster deployments" },
  { value: "~40%", label: "less manual reporting" },
  { value: "~25%", label: "SaaS costs cut" },
];

const experiences = [
  {
    role: "Part Time Data Engineer",
    company: "MEDVA",
    date: "09/2024 - Present",
    current: true,
    highlights: [
      <>
        Designed ETL services consolidating data from{" "}
        <b>4 operational systems</b> into BigQuery-powered reporting
        dashboards.
      </>,
      "Restructured BigQuery datasets to improve reporting performance and reduce redundant storage costs.",
      "Contributed to the planning and cost analysis of a scalable data warehouse architecture.",
      <>
        Built Power Automate workflows and helped migrate internal workflows
        to the Microsoft ecosystem, cutting recurring SaaS costs by{" "}
        <b>~25%</b>.
      </>,
    ],
    tags: ["BigQuery", "ETL", "Data Warehouse", "Power Automate"],
  },
  {
    role: "Software Developer (Backend Lead Responsibilities)",
    company: "Smart Works International",
    date: "08/2022 - Present",
    current: true,
    highlights: [
      "Led backend/API development for a Revenue Cycle Management (RCM) platform serving US-based healthcare providers.",
      "Designed the system architecture and database ERD for scalable billing, collections, and reporting workflows.",
      <>
        Introduced containerization and CI/CD pipelines, turning 100-150 min
        manual SSH releases into a 15-minute automated deploy,{" "}
        <b>85%+ faster</b>.
      </>,
      <>
        Built Synapse Workspace, an internal work-tracking platform that
        replaced spreadsheets and reduced manual reporting by <b>~40%</b>.
      </>,
    ],
    tags: ["Node.js", "NestJS", "Express", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    role: "Frontend Software Engineer Intern",
    company: "InnoVantage, Inc.",
    date: "11/2021 - 05/2022",
    highlights: [
      "Built the frontend of a procurement automation platform using Nuxt.js, with global state managed in Vuex.",
      "Translated Figma designs into responsive, production-ready components.",
      "Refactored large components into reusable modules, speeding up feature development across the team.",
      "Kept code quality high with SonarQube and fixed QA-reported defects up to critical severity.",
    ],
    tags: ["Nuxt.js", "Vue", "Vuex", "REST APIs", "SonarQube"],
  },
  {
    role: "Software Quality Assurance Intern",
    company: "Wizy Software Labs, Inc.",
    date: "08/2021 - 09/2021",
    highlights: [
      "Ran functional and regression testing for web and mobile applications.",
      "Improved coverage by migrating test cases to Qase and adding edge-case scenarios.",
      "Isolated bugs with browser developer tools and wrote detailed reports with reproduction steps.",
    ],
    tags: ["QA", "Regression Testing", "Qase"],
  },
];

const educations = [
  {
    school: "Polytechnic University of the Philippines",
    detail: "Bachelor of Science in Computer Engineering",
    notes: [
      "Majored in Enterprise Software Systems",
      "Capstone: JuanTapp - Emergency mobile application",
      "Thesis: Solar Powered Water Purifier with Quality Monitoring System",
    ],
    date: "2018 - 2022",
  },
  {
    school: "Polytechnic University of the Philippines",
    detail: "Senior High School | Science, Technology, Engineering, and Mathematics (STEM)",
    notes: ["With Honor"],
    date: "2016 - 2018",
  },
];

const certificates = [
  "HIPAA Workforce Proficiency",
  "HIPAA Awareness for Business Associates",
  "HIPAA Security",
  "Google IT Support Professional Certificate",
];

const interests = [
  "IT operations",
  "hiking",
  "classic motorcycles",
  "anime",
  "music",
  "cats",
  "coffee",
  "guitar",
];

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <SectionHeading index="01">about me</SectionHeading>

        {/* Intro */}
        <Row cols="1.4fr 1fr" align="center">
          <Window title="readme.txt">
            <Lead>
              Hello, I am Jay Anton Roblico, a <em>backend-focused</em>{" "}
              fullstack engineer from Quezon City, Philippines.
            </Lead>
            <AboutP>
              I lead API development, system architecture design, and data
              engineering work in healthcare and enterprise environments.
            </AboutP>
            <AboutP>
              I enjoy turning business requirements into scalable,
              maintainable systems: architecture decisions, database design,
              and deployment automation. My daily tools are Node.js
              (Express/Nest), PostgreSQL, MongoDB, and cloud-based deployments.
            </AboutP>
            <AboutP>
              My dream is to become a CTO or a software architect.
            </AboutP>
            <Stats>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </Stats>
            <Note>&gt; why the picture? nvm him, that's Chrollo Lucifer with his cat.</Note>
          </Window>

          <Photos>
            <Polaroid tilt={-4}>
              <img src={profile1} alt="Chrollo Lucifer with his cat" />
              <figcaption>chrollo + cat</figcaption>
            </Polaroid>
          </Photos>
        </Row>

        {/* Work */}
        <Window title="work_history.log" accent="var(--orange)">
          <Jobs>
            {experiences.map((exp) => (
              <Job key={exp.company}>
                <DateChip>{exp.date}</DateChip>
                {exp.current && <NowBadge>now</NowBadge>}
                <h4>{exp.role}</h4>
                <Company>@ {exp.company}</Company>
                <Highlights>
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Highlights>
                <Tags>
                  {exp.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </Tags>
              </Job>
            ))}
          </Jobs>
        </Window>

        {/* Education + Certificates */}
        <Row cols="1.3fr 1fr">
          <Window title="education.log" accent="var(--mint)">
            <Timeline>
              {educations.map((edu) => (
                <TimelineItem key={edu.date} accent="var(--teal)">
                  <DateChip>{edu.date}</DateChip>
                  <h4>{edu.detail}</h4>
                  <p>{edu.school}</p>
                  {edu.notes.map((note) => (
                    <p key={note}>▸ {note}</p>
                  ))}
                </TimelineItem>
              ))}
            </Timeline>
          </Window>

          <Window title="certificates.txt" accent="var(--mustard)">
            <CertList>
              {certificates.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </CertList>
            <SubHead>languages</SubHead>
            <Interests>
              <li>Filipino</li>
              <li>English</li>
            </Interests>
          </Window>
        </Row>

        {/* Other stuff */}
        <Row cols="1fr 1.4fr" align="center">
          <Photos>
            <Polaroid small tilt={-6} z={1}>
              <img src={profile2} alt="Profile" />
              <figcaption>side quest</figcaption>
            </Polaroid>
            <Polaroid small tilt={2} z={3} overlap>
              <img src={motorcycle} alt="Jay's black classic motorcycle parked by the road" />
              <figcaption>the ride</figcaption>
            </Polaroid>
            <Polaroid small tilt={6} z={2} overlap>
              <img src={profile3} alt="Profile" />
              <figcaption>main quest</figcaption>
            </Polaroid>
          </Photos>

          <Window title="other_stuff.txt" accent="var(--mustard)">
            <AboutP>
              My personal interests are IT operations, hiking, classic
              motorcycles, watching anime, and music. I love cats, and I drink a lot of coffee. The best
              moment in life is playing the guitar while your friends are
              singing.
            </AboutP>
            <Interests>
              {interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </Interests>
            <AboutP>
              <b>Go-to song:</b> Champagne Supernova - Oasis
            </AboutP>
            <Spotify>
              <iframe
                src="https://open.spotify.com/embed/track/1wo3UYTeizJHkwYIuLuBPF"
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="spotify"
              ></iframe>
            </Spotify>
            <AboutP>
              <b>Fun fact:</b> I want to become a tortoise, not a unicorn.
            </AboutP>
          </Window>
        </Row>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
