import React, { useState } from "react";
import {
  TechsH1,
  TechH3,
  TechsContainer,
  TechsContent,
  TechBox,
  TechIcon,
} from "./TechsElements";
import css from "../../images/logos/css.svg";
import django from "../../images/logos/django.svg";
import git from "../../images/logos/git.svg";
import github from "../../images/logos/github.svg";
import html from "../../images/logos/html.svg";
import js from "../../images/logos/js.svg";
import node from "../../images/logos/node.svg";
import python from "../../images/logos/python.svg";
import react from "../../images/logos/react.svg";
import sass from "../../images/logos/sass.svg";
import bootstrap from "../../images/logos/bootstrap.svg";
import vscode from "../../images/logos/vscode.svg";
import materialui from "../../images/logos/materialui.svg";
import mongo from "../../images/logos/mongo.svg";

const Hero = () => {
  return (
    <TechsContainer id="techs">
      <TechsH1>Dev Techs That I Use</TechsH1>
      <TechsContent>
        <TechBox>
          <TechIcon src={html} />
          <TechH3>Html</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={css} />
          <TechH3>Css</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={js} />
          <TechH3>Javascript</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={node} />
          <TechH3>NodeJS</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={react} />
          <TechH3>ReactJS</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={python} />
          <TechH3>Python</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={django} />
          <TechH3>Django</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={bootstrap} />
          <TechH3>Bootstrap</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={git} />
          <TechH3>Git</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={github} />
          <TechH3>Github</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={vscode} />
          <TechH3>VS Code</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={materialui} />
          <TechH3>Material UI</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={mongo} />
          <TechH3>MongoDB</TechH3>
        </TechBox>
        <TechBox>
          <TechIcon src={sass} />
          <TechH3>Sass</TechH3>
        </TechBox>
      </TechsContent>
    </TechsContainer>
  );
};

export default Hero;
