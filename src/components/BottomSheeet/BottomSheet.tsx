import BottomSheet from "./BottomSheet.styled";

type BottomSheetProps = {
  open: boolean;
  header?: string;
};

const BottomSheetDemo = ({ open }: BottomSheetProps) => {
  console.log(open);
  return (
    <>
      <BottomSheet.Backdrop />
      <BottomSheet.Container animate={{ rotate: open ? 360 : "" }}>
        <BottomSheet.Dragger />
        <BottomSheet.Body>Hello</BottomSheet.Body>
      </BottomSheet.Container>
    </>
  );
};

export default BottomSheetDemo;
