import styled from "@emotion/styled";
import { motion } from "motion/react";

const Backdrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(11, 11, 11, 0.3);
`;

const Dragger = styled.div`
  width: 80px;
  height: 4px;
  background-color: #cccccc99;
  border-radius: 8px;
  margin: 0 auto;
  cursor: pointer;
`;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 24px 24px 0 0;
  padding: 20px 20px 20px 20px;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #cdcdcd;
  z-index: 1;
`;

export const Header = styled(motion.div)`
  height: 60px;
`;

export const Body = styled(motion.div)``;

const Sheet = {
  Backdrop,
  Dragger,
  Container,
  Header,
  Body,
};

export default Sheet;
