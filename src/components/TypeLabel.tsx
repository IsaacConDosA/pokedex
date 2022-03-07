import * as React from "react";

type TypeLabelProps = {
  colorStyle: {
    backgroundColor: string;
    color: string;
    background?: string;
  };
  text: string;
};

const TypeLabel = ({ colorStyle, text }: TypeLabelProps): JSX.Element => {
  return (
    <div
      className="h-[18px] leading-[18px] max-w-[105px] m-0.5 px-2.5 rounded text-center text-[11px] w-20"
      style={colorStyle}
    >
      {text}
    </div>
  );
};

export default TypeLabel;
