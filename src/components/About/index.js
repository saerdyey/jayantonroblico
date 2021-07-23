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
} from "./AboutElements";
// import profile2 from "../../images/profile2.png";

const index = () => {
  return (
    <AboutContainer>
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
              I love building things specially web apps and mobile apps.
            </AboutP>
            <AboutP>
              Personally, I prefer working in the backend because I'm not good
              at designing, but I'm still learning. I'm also interested in
              DevOps :)
            </AboutP>
            <AboutP>
              My goal is to become successful software developer and my dream is
              to become a CTO of a company.
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
            <AboutH3>EDUCATION</AboutH3>
            <AboutH4>
              Polytechnic University of the Philippines - Manila
            </AboutH4>
            <AboutP>Senior High School (2016-2018)</AboutP>
            <AboutH4>Judge Feliciano Belmonte Sr. High School</AboutH4>
            <AboutP>High School (2012-2016)</AboutP>
            <AboutH3>WORK EXPERIENCE</AboutH3>
            <AboutH4>Web Developer</AboutH4>
            <AboutP>Freelance | PUP-Manila, Philippines</AboutP>
            <AboutP>January 2021 - March 2021</AboutP>
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
                width="400px"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </Spotify>
            <AboutP>
              <b>Fun fact:</b> I want to become a turtle not unicorn.
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
