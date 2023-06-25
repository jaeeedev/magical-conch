import { ReactNode, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import AnswerPic from "@/assets/answer.jpg";
import QuestionPic from "@/assets/loading.png";
import Image, { StaticImageData } from "next/image";
import DownloadButton from "./DownloadButton";

type Props = {
  question: string;
  answer: string;
};

const ResultSection = ({ question, answer }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!canvasRef.current || question.length === 0) return;
    html2canvas(canvasRef.current, { scale: 2 }).then((canvas) => {
      const url = canvas.toDataURL();

      const link = document.createElement("a");
      link.download = "magicalConch.png";
      link.href = url;
      link.click();
    });
  };

  return (
    question.length !== 0 && (
      <div ref={canvasRef}>
        <ResultImage img={QuestionPic}>{question}</ResultImage>
        <ResultImage img={AnswerPic}>{answer}</ResultImage>

        <DownloadButton isDone={true} onClick={handleDownload} />
      </div>
    )
  );
};

export default ResultSection;

type ResultProps = {
  children: ReactNode;
  img: StaticImageData;
};

const ResultImage = ({ children, img }: ResultProps) => {
  return (
    <div className="w-full relative">
      <Image src={img} alt="질문 이미지" className="w-full" draggable={false} />
      <p className="w-full absolute px-4 text-center bottom-4 text-white text-[22px] font-bold font-[ChosunGu] tracking-wider font-outline">
        -&nbsp;{children}
      </p>
    </div>
  );
};
