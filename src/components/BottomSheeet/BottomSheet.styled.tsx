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
  background-color: #ccc;
  border-radius: 8px;
  margin: 0 auto 20px auto;
`;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 30vh;
  width: 100%;
  border-radius: 24px 24px 0 0;
  padding: 20px;
  background-color: red;
`;
export const Header = styled(motion.div)``;
export const Body = styled(motion.div)``;

const BottomSheet = {
  Backdrop,
  Dragger,
  Container,
  Header,
  Body,
};

export default BottomSheet;
