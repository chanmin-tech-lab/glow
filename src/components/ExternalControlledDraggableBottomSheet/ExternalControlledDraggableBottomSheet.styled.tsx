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
  height: 6px;
  background-color: #cccccc80;
  border-radius: 8px;
  margin: 0 auto;
  cursor: grabbing;
`;

const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 24px 24px 0 0;
  padding: 20px 20px 20px 20px;
  background-color: #fff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;

  // 위로 계속 드래그 시 노출되는 그림자 숨기기 위한 용도 1
  &::after {
    content: "";
    height: 5px;
    width: 100%;
    position: fixed;
    bottom: -4px;
    left: 0;
    background-color: #fff;
    z-index: 2;
  }
`;

export const Header = styled(motion.div)`
  height: 60px;
`;

export const Body = styled(motion.div)``;

// 위로 계속 드래그 시 노출되는 그림자 숨기기 위한 용도 2
export const DraggedBackground = styled.div`
  height: 40px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 24px 24px 0 0;
`;

const Sheet = {
  Backdrop,
  Dragger,
  Container,
  Header,
  Body,
};

export default Sheet;
