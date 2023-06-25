import React, {
  Dispatch,
  FormEvent,
  RefObject,
  SetStateAction,
  useRef,
} from "react";
import { randomResponse } from "@/constants/randomResponse";

type Props = {
  submitButtonRef: RefObject<HTMLButtonElement>;
  setQuestion: Dispatch<SetStateAction<string>>;
  setAnswer: Dispatch<SetStateAction<string>>;
};

const FormSection = ({ submitButtonRef, setQuestion, setAnswer }: Props) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!textRef.current || textRef.current.value.length === 0) return;

    const randomIndex = Math.floor(Math.random() * randomResponse.length);

    setQuestion(textRef.current.value);
    setAnswer(randomResponse[randomIndex]);
    textRef.current.value = "";

    setTimeout(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} id="question">
        <textarea
          ref={textRef}
          placeholder="지금 게임을 해도 될까?"
          className="w-full p-4 my-10 rounded-md h-[120px] font-[SUITE] bg-yellow-200 placeholder:text-orange-600 focus:outline-none"
          maxLength={200}
        />
        <button className="hidden" ref={submitButtonRef}>
          제출하기
        </button>
      </form>
    </div>
  );
};

export default FormSection;
