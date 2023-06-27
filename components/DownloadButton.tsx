import React, { RefObject } from "react";

type Props = {
  // isDone: boolean;
  // ref: RefObject<HTMLButtonElement>;
  onClick: () => void;
};

const DownloadButton = ({ ...props }: Props) => {
  return (
    <div>
      {
        <button
          className="fixed right-4 bottom-4 p-4 rounded-md bg-slate-800 text-white"
          {...props}
        >
          저장하기
        </button>
      }
    </div>
  );
};

export default DownloadButton;
