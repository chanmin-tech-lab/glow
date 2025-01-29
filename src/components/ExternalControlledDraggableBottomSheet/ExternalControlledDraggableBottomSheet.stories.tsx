import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { default as ExternalControlledDraggableBottomSheet } from "./ExternalControlledDraggableBottomSheet";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/ExternalControlledDraggableBottomSheet",
  component: ExternalControlledDraggableBottomSheet,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ExternalControlledDraggableBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "ExternalControlledDraggableBottomSheet",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>();

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      setIsOpen(() => false);
    };

    const handleBottomSheetOpen = (value: boolean) => {
      setIsOpen(() => value);
    };
    return (
      <div>
        <div>선택한 옵션 : {selectedOption}</div>
        <ExternalControlledDraggableBottomSheet
          isOpen={isOpen}
          handleOpen={handleBottomSheetOpen}
        >
          <ul>
            {MOCK_OPTIONS_DATA.map((data, index) => (
              <li
                onClick={() => handleSelect(data.value)}
                key={data.value + index}
                style={{ padding: "12px 0", fontWeight: 600, color: "#111" }}
              >
                {data.label}
              </li>
            ))}
          </ul>
        </ExternalControlledDraggableBottomSheet>
      </div>
    );
  },
};

const MOCK_OPTIONS_DATA = [
  {
    label: "오사카",
    value: "오사카",
  },
  {
    label: "도쿄",
    value: "도쿄",
  },
  {
    label: "후쿠오카",
    value: "후쿠오카",
  },
  {
    label: "뉴욕",
    value: "뉴욕",
  },
  {
    label: "워싱턴",
    value: "워싱턴",
  },
];
