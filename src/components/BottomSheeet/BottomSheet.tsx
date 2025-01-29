import { debounce } from "lodash-es";
import { PanInfo } from "motion/react";
import {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Sheet from "./BottomSheet.styled";

type BottomSheetProps = {
  open: boolean;
  header?: string;
  handleClose: () => void;
  // 바텀싯 컨텐츠를 children으로 뚫은 이유
  // 바텀싯 컴포넌트는 Backdrop, 열기 / 닫기 기능을 지원하는 순수한 컴포넌트여야 한다.
  // 내부 컨텐츠의 구현은 children에 맡기고, children에서 BottomSheet 컴포넌트를 제어할 수 있도록 인터페이스를 제공하자.
  children: ReactNode;
};

const BottomSheet = ({ open, handleClose, children }: BottomSheetProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [initialPosition, setInitialPosition] = useState(0);
  const ContainerRef = useRef<HTMLDivElement | null>(null);
  const HeaderRef = useRef<HTMLDivElement | null>(null);
  const BodyRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ContainerRef.current && HeaderRef.current) {
      const containerHeight = ContainerRef.current.clientHeight;
      const headerHeight = HeaderRef.current.clientHeight;
      setInitialPosition(containerHeight - headerHeight);
    }
  }, []);

  const handleDragEnd = useCallback(
    debounce((_, info: PanInfo) => {
      if (info.offset.y < -50) {
        setIsOpen(true); // 위로 100px 이상 드래그 → 열기
      } else if (info.offset.y > 50) {
        setIsOpen(false); // 아래로 100px 이상 드래그 → 닫기
      }
    }, 100),
    []
  );
  return (
    <>
      <Sheet.Backdrop onTap={handleClose} />
      <Sheet.Container
        ref={ContainerRef}
        drag="y"
        dragMomentum={true}
        dragConstraints={{ top: 50, bottom: 50 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        dragTransition={{
          power: 0.2,
        }}
        initial={{
          y: isOpen ? 0 : initialPosition,
        }}
        animate={{
          y: isOpen ? 0 : initialPosition,
        }}
      >
        <Sheet.Header ref={HeaderRef}>
          <Sheet.Dragger />
        </Sheet.Header>
        <Sheet.Body ref={BodyRef}>{children}</Sheet.Body>
      </Sheet.Container>
    </>
    // )
  );
};

export default BottomSheet;
