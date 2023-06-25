import React, { FormEvent, useCallback, useState } from "react";
import Image from "next/image";
import loadingPic from "@/assets/loading.png";
import answerPic from "@/assets/answer.jpg";
import conch from "@/assets/conch.png";

const ImageSection = ({ textRef, randomResponse, submitButtonRef }) => {
  const [quetionText, setQuestionText] = useState<string>("");
  const [answerText, setAnswerText] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    if (textRef.current?.value.length === 0 || !textRef.current?.value) return;

    const randomIndex = Math.floor(Math.random() * randomResponse.length);
    setQuestionText(textRef.current?.value);
    setAnswerText(randomResponse[randomIndex]);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <Image src={loadingPic} alt="질문 로딩 이미지" className="w-full" />
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 font-[ChosunGu] text-xl text-white font-semibold w-full flex items-end"
          style={{
            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
          }}
        >
          <p className="text-center w-full px-4 break-all ">{quetionText}</p>
        </div>
      </div>

      {!loading && (
        <div className="relative w-full overflow-hidden">
          <Image src={answerPic} alt="답변 이미지" className="w-full" />
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 font-[ChosunGu] text-xl text-white font-semibold w-full flex items-end"
            style={{
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            <p className="text-center w-full px-4 break-all ">{answerText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
