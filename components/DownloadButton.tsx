import React from "react";

type Props = {
  isDone: boolean;
  onClick: () => void;
};

const DownloadButton = ({ isDone, ...props }: Props) => {
  return (
    <div>
      {isDone && (
        <button
          className="fixed right-4 bottom-4 p-4 rounded-md bg-slate-800 text-white"
          {...props}
        >
          저장하기
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
