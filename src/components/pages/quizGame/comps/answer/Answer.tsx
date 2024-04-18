import { FC, ReactElement } from 'react';
import wrongAudio from '../../../../assets/audios/wrongAudio.mp3'
import correctAudio from '../../../../assets/audios/correctAudio.mp3';

export interface AnswerProps {
  answer: string;
  index: number;
  onSelectAnswer: (answer: string) => void;
  selectedAnswer: string | null | undefined;
  correctAnswer: string | null | undefined;
  askedHelp: boolean | null | undefined;
}

const Answer: FC<AnswerProps> = ({
  answer,
  index,
  onSelectAnswer,
  selectedAnswer,
  correctAnswer,
  askedHelp,
}): ReactElement => {
  const answerLetterMapping: Array<string> = ['A', 'B', 'C', 'D'];
  const isCorrect =
    selectedAnswer && correctAnswer === answer ? 'correct-answer' : null;
  const isWrong =
    selectedAnswer && selectedAnswer === answer && answer !== correctAnswer
      ? 'wrong-answer'
      : null;
  const isDisabled = selectedAnswer ? 'disabled-answer' : null;
  const isHelp =
    askedHelp && !selectedAnswer && answer !== correctAnswer
      ? 'help-answer'
      : null;

  const startAudio = () => {
    if (correctAnswer === answer) {
      new Audio(correctAudio).play();
    } else {
      new Audio(wrongAudio).play();
    }
  };
  
  return (
    <>
      <div
        className={`answer flex items-center cursor-pointer ${isCorrect} ${isWrong} ${isDisabled} ${isHelp}`}
        onClick={() => {
          onSelectAnswer(answer);
          startAudio();
        }}
      >
        <div className="flex h-[3rem] items-center justify-center text-base font-semibold bg-red">
          <div className="flex-[10%] items-center justify-center ml-[10px] text-white text-center">
            <p className="answer-letter px-6 py-1 bg-[#004225] rounded-[10px]">
              {answerLetterMapping[index]}
            </p>
          </div>
          <div className="flex-[90%]">
            <p className="text-select-answer">{answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
