import React, { Dispatch, SetStateAction, useState } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import useHelpAnimate from "@/hooks/useHelpAnimate";
import { motion } from "framer-motion";

type Props = {
  setAlternative: Dispatch<SetStateAction<boolean>>;
};

const HelpIcon = ({ setAlternative }: Props) => {
  const [helpOpen, setHelpOpen] = useState(false);
  const scope = useHelpAnimate(helpOpen);
  return (
    <div
      className="absolute top-4 right-0 flex flex-col items-end gap-4"
      ref={scope}
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setHelpOpen((prev) => !prev)}
      >
        <AiFillExclamationCircle
          size={35}
          className="text-yellow-700 cursor-pointer"
        />
      </motion.button>
      <div className="relative p-4 bg-yellow-400 text-sm font-[SUITE] rounded-md helpmodal">
        질문을 작성하고 줄을 당겨주세요.
        <br />
        만약 줄이 당겨지지 않는다면&nbsp;
        <button
          onClick={() => {
            setAlternative(true);
          }}
          className="text-orange-700"
        >
          여기
        </button>
        를 클릭해주세요
      </div>
    </div>
  );
};

export default HelpIcon;
