import Head from "next/head";
import { motion, useDragControls, AnimatePresence } from "framer-motion";
import { PointerEventHandler, useRef, useState } from "react";
import Image from "next/image";
import Conch from "@/assets/conch.png";
import String from "@/assets/string.png";
import FormSection from "@/components/FormSection";
import ResultSection from "@/components/ResultSection";
import HelpIcon from "@/components/HelpIcon";

export default function Home() {
  const [alternative, setAlternative] = useState(false);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const constraintRef = useRef(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const controls = useDragControls();

  const startDrag: PointerEventHandler<HTMLDivElement> = (e) => {
    controls.start(e);
  };

  return (
    <>
      <Head>
        <title>마법의 소라고둥</title>
        <meta
          name="description"
          content="마법의 소라고둥에게 질문하고 고민하는 시간을 줄이세요."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[780px] m-4 py-8 md:mx-auto">
        <h1 className="font-bold text-[72px] font-[Spongeboy] text-center text-title-yellow title-shadow">
          magical conch
        </h1>
        <p className="font-[SUITE] text-center py-2 px-4 bg-title-blue text-white w-fit mx-auto rounded-lg">
          마법의 소라고둥에게 질문해보세요!
        </p>

        <div className="relative" draggable={false}>
          <HelpIcon setAlternative={setAlternative} />
          <motion.div
            className="absolute w-[200px] h-[10px] top-[200px] -left-[180px] -z-1"
            ref={constraintRef}
          >
            <motion.div
              className="w-[600px] h-[40px] bg-transparent relative"
              drag="x"
              dragControls={controls}
              dragConstraints={constraintRef}
              style={{
                zIndex: -1,
              }}
              onDragEnd={(e, info) => {
                const target = e.target as HTMLElement;
                if (
                  !submitButtonRef.current ||
                  target.getBoundingClientRect().right < 600
                )
                  return;
                submitButtonRef.current.click();
              }}
            >
              <Image src={String} alt="소라고둥 줄" />
            </motion.div>
          </motion.div>

          <div
            className="absolute top-[200px] left-[100px] w-[320px] h-[40px] bg-red-200 opacity-0 z-2 touch-none"
            onPointerDown={startDrag}
          />

          <div
            className="absolute w-[500px] h-[300px] bg-white top-0 -left-[300px]"
            style={{ zIndex: -1 }}
          />
          <Image
            src={Conch}
            alt="conch"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />

          <AnimatePresence>
            {alternative && (
              <motion.button
                type="submit"
                form="question"
                className="absolute bottom-0 right-0 p-3 px-8 bg-title-yellow font-[SUITE] rounded-md"
                key="alternativeButton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                제출하기
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <FormSection
          submitButtonRef={submitButtonRef}
          setQuestion={setQuestion}
          setAnswer={setAnswer}
        />

        <ResultSection question={question} answer={answer} />
      </div>
    </>
  );
}
