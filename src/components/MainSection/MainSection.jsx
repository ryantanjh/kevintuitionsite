import React, { useState } from "react";
import {
  MainContainer,
  MainContent,
  Mainh1,
  MainBtnWrapper,
  Mainp,
  ArrowForward,
  ArrowRight,
  Icon,
  ImgContainer,
} from "./MainSectionElements";
import { Button } from "../ButtonElement";
import Icon1 from "../../images/svg-2.svg";

const MainSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <MainContainer>
        <MainContent>
          <Mainh1>Kevin's Tuition Center</Mainh1>
          <Mainp>
            Here at Kevin's Tution center, your child is guaranteed an A
          </Mainp>
          <MainBtnWrapper>
            <Button
              to="book"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Book a class {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </MainBtnWrapper>
        </MainContent>
        <Icon src={Icon1} />
      </MainContainer>
    </>
  );
};

export default MainSection;
