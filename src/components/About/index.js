import React from "react";
import profile1 from "../../images/profile1.jpg";
import profile2 from "../../images/profile2.jpg";
import profile3 from "../../images/profile3.jpg";
import {
  AboutContainer,
  AboutH1,
  AboutContent,
  AboutWrapper,
  AboutText,
  AboutP,
  AboutH3,
  AboutH4,
  AboutImgWrapper,
  HexWrapper,
  HexWrapperInner1,
  HexWrapperInner2,
  AboutImg,
  Spotify,
  WorkExperiencesContainer,
  WorkExperiencesFlexWrapper,
  WorkExperience,
  EducationsContainer,
  EducationsFlexWrapper,
  Education,
} from "./AboutElements";

const index = () => {
  return (
    <AboutContainer id="about">
      <AboutH1>about me</AboutH1>
      <AboutContent>
        {/* 1st Section of About */}
        <AboutWrapper>
          <AboutText>
            <AboutP>
              Hello, I am Jay Anton Roblico, a computer engineering student from
              Polytechnic University of the Philippines.
            </AboutP>
            <AboutP>
              I love building things specially web and mobile applications.
            </AboutP>
            <AboutP>
              Personally, I prefer working on backend because I like to do logical solutions for businesses. I'm also interested in
              DevOps :)
            </AboutP>
            <AboutP>
              My goal is to become successful software developer and my dream is
              to become a CTO or a software architect.
            </AboutP>
            <AboutP>
              Why the picture? Nvm him that's Chrollo Lucifer with his cat.
            </AboutP>
          </AboutText>

          <AboutImgWrapper>
            <HexWrapper>
              <HexWrapperInner1>
                <HexWrapperInner2>
                  <AboutImg src={profile1} />
                </HexWrapperInner2>
              </HexWrapperInner1>
            </HexWrapper>
          </AboutImgWrapper>
        </AboutWrapper>

        {/* 3rd Section of About */}
        <AboutWrapper>
          <AboutImgWrapper>
            <HexWrapper>
              <HexWrapperInner1>
                <HexWrapperInner2>
                  <AboutImg src={profile2} />
                </HexWrapperInner2>
              </HexWrapperInner1>
            </HexWrapper>
          </AboutImgWrapper>

          <AboutText>
            {/* EDUCATIONS */}
            <EducationsContainer>
              <AboutH3>EDUCATION</AboutH3>
              <EducationsFlexWrapper>
                <Education>
                  <AboutH4>
                    Polytechnic University of the Philippines - Manila
                  </AboutH4>
                  <AboutP>
                    Bachelor of Science in Computer Engineering (2018-2022)
                  </AboutP>
                </Education>
                <Education>
                  <AboutH4>
                    Polytechnic University of the Philippines - Manila
                  </AboutH4>
                  <AboutP>
                    Senior High School | Science, Technology, Engineering, and
                    Mathematics (2016-2018)
                  </AboutP>
                </Education>
                <Education>
                  <AboutH4>Judge Feliciano Belmonte Sr. High School</AboutH4>
                  <AboutP>High School (2012-2016)</AboutP>
                </Education>
              </EducationsFlexWrapper>
            </EducationsContainer>

            {/* WORK EXPERIENCES */}
            <WorkExperiencesContainer>
              <AboutH3>WORK EXPERIENCE</AboutH3>
              <WorkExperiencesFlexWrapper>
              <WorkExperience>
                  <AboutH4>Frontend Software Engineer Intern</AboutH4>
                  <AboutP>Aiah| Innovantage, Inc. | Makati, Philippines</AboutP>
                  <AboutP>November 2021 - May 2022</AboutP>
                </WorkExperience>
                <WorkExperience>
                  <AboutH4>Fullstack Web Developer</AboutH4>
                  <AboutP>Freelance | Anihan Digital | Manila, Philippines</AboutP>
                  <AboutP>December 2021</AboutP>
                </WorkExperience>
              </WorkExperiencesFlexWrapper>
              <WorkExperiencesFlexWrapper>
                <WorkExperience>
                  <AboutH4>Software Quality Assurance Intern</AboutH4>
                  <AboutP>Wizy Software Labs, Inc | Quezon City, Philippines</AboutP>
                  <AboutP>August 2021 - September 2021</AboutP>
                </WorkExperience>
                <WorkExperience>
                  <AboutH4>Fullstack Web Developer</AboutH4>
                  <AboutP>Freelance | PUP-Manila, Philippines</AboutP>
                  <AboutP>January 2021 - March 2021</AboutP>
                </WorkExperience>
              </WorkExperiencesFlexWrapper>
            </WorkExperiencesContainer>
          </AboutText>
        </AboutWrapper>

        {/* 3rd Section of About */}
        <AboutWrapper>
          <AboutText>
            <AboutH3>OTHER STUFF ABOUT ME</AboutH3>
            <AboutP>
              My personal interest are IT operations, hiking, watching anime,
              music. I love cats, and I drink a lot of coffee. The best moment
              of life is you're playing the guitar while your friends are
              singing
            </AboutP>
            <AboutP>
              <b>Go-to-song: </b> Champagne Supernova - Oasis
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
              <b>Fun fact:</b> I want to become a tortoise not unicorn.
            </AboutP>
          </AboutText>

          <AboutImgWrapper>
            <HexWrapper>
              <HexWrapperInner1>
                <HexWrapperInner2>
                  <AboutImg src={profile3} />
                </HexWrapperInner2>
              </HexWrapperInner1>
            </HexWrapper>
          </AboutImgWrapper>
        </AboutWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default index;
