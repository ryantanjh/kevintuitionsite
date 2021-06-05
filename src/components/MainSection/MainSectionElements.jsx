import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const MainContainer = styled.div`
  background: rgb(0, 92, 178);
  background: radial-gradient(
    circle,
    rgba(0, 92, 178, 1) 0%,
    rgba(106, 183, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  z-index: 1;
  border-radius: 0% 0% 50% 50%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 130px;
  }
`;

export const Mainh1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Mainp = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const MainBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Icon = styled.img`
  height: 400px;
  width: 400px;
  margin-bottom: 10px;
`;
