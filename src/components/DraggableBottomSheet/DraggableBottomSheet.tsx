import { PanInfo } from "motion/react";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import Sheet, { DraggedBackground } from "./DraggableBottomSheet.styled";

type BottomSheetProps = {
  header?: string;
  // 바텀싯 컨텐츠를 children으로 뚫은 이유
  // 바텀싯 컴포넌트는 Backdrop, 열기 / 닫기 기능을 지원하는 순수한 컴포넌트여야 한다.
  // 내부 컨텐츠의 구현은 children에 맡기고, children에서 BottomSheet 컴포넌트를 제어할 수 있도록 인터페이스를 제공하자.
  children: ReactNode;
};

const DraggableBottomSheet = ({ children }: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPosition, setInitialPosition] = useState<number>(
    // 값이 0 -> containerHeight - headerHeight 으로 상승하는 과정에서 초기 애니메이션이 이상해진다.
    // 초기 애니메이션을 수정하기 위해 window.innerHeight -> containerHeight - headerHeight 처럼 구현한다.
    window.innerHeight
  );
  const ContainerRef = useRef<HTMLDivElement | null>(null);
  const HeaderRef = useRef<HTMLDivElement | null>(null);
  const BodyRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ContainerRef.current && HeaderRef.current) {
      const containerHeight = ContainerRef.current.clientHeight;
      const headerHeight = HeaderRef.current.clientHeight;
      setInitialPosition(() => containerHeight - headerHeight);
    }
  }, []);

  const animateState = isOpen ? "open" : "close";

  const handleDragToClose = (_, info: PanInfo) => {
    if (info.offset.y > 10) {
      setIsOpen(() => false);
    } else if (info.offset.y < -10) {
      setIsOpen(() => true);
    }
  };

  return (
    <>
      <Sheet.Backdrop
        initial={false}
        animate={animateState}
        variants={{
          open: {
            backdropFilter: "blur(1px)",
            pointerEvents: "all",
            opacity: 0.7,
          },
          close: {
            backdropFilter: "blur(0px)",
            pointerEvents: "none",
            opacity: 0,
          },
        }}
        onTap={() => setIsOpen(() => false)}
      />
      <Sheet.Container
        ref={ContainerRef}
        drag="y"
        dragSnapToOrigin={false}
        dragConstraints={{ top: 0, bottom: initialPosition }}
        dragElastic={0.05}
        onDragEnd={handleDragToClose}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        dragTransition={{ power: 0.2 }}
        animate={isOpen ? { y: 0 } : { y: initialPosition }}
        initial={{ y: initialPosition }}
      >
        <Sheet.Header ref={HeaderRef}>
          <Sheet.Dragger />
        </Sheet.Header>
        <Sheet.Body ref={BodyRef}>{children}</Sheet.Body>
      </Sheet.Container>
      {isOpen && <DraggedBackground />}
    </>
    // )
  );
};

export default DraggableBottomSheet;
