import React from "react";
import {
  WorksContainer,
  WorksWrapper,
  WorksH1,
  CardsWrapper,
  Cards,
  StyledCard,
} from "./WorksElements";
import project1 from "../../images/project1.PNG";
import project2 from "../../images/project2.PNG";
import project3 from "../../images/project3.PNG";
import project4 from "../../images/project4.PNG";
import project5 from "../../images/project5.PNG";
import project6 from "../../images/project6.png";
import project7 from "../../images/project7.png";


const Works = () => {
  return (
    <WorksContainer id="projects">
      <WorksH1>my projects</WorksH1>
      <WorksWrapper>
        <CardsWrapper>
          <Cards>
            <StyledCard
              src={project1}
              text="Fully responsive web portfolio using React JS"
              label="JAR"
              path=""
            />
            <StyledCard
              src={project2}
              text="PH covid19 tracker using open source API"
              label="covid19-tracker"
              path="https://saerdyey.github.io/covid19ph-tracker/"
            />
            <StyledCard
              src={project6}
              text="Emergency mobile application"
              label="JuanTapp"
              path="https://youtu.be/ZitxCpD_skE"
            />
          </Cards>
          <Cards>
            <StyledCard
              src={project7}
              text="Movie Reviews created with ReactJS"
              label="React Movies"
              path="https://react-movie-reviews.netlify.app"
            />
            <StyledCard
              src={project5}
              text="Barangay website for automating processes "
              label="brgyappforms"
              path="https://saerdyey.github.io/brgyappforms/"
            />
            <StyledCard
              src={project3}
              text="Website for SSS North Village"
              label="TripleS Home Village"
              path="https://tripleshomeowners.netlify.app"
            />
          </Cards>
        </CardsWrapper>
      </WorksWrapper>
    </WorksContainer>
  );
};

export default Works;
